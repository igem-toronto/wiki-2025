import { CONTINUE, visit } from 'unist-util-visit';
import { parse } from 'node-html-parser'
// @ts-ignore
import { Cite } from "@citation-js/core"
import '@citation-js/plugin-csl'
import '@citation-js/plugin-bibtex'
// @ts-ignore
import fs from 'fs'
import type { Plugin } from 'unified';
import type { Root, Text, Element } from 'hast';
import type { VFile } from 'vfile';
import type { BibliographyEntry } from './types';


const interleave = <T>(arr: T[], x: T): T[] => arr.flatMap(e => [e, x]).slice(0, -1)


const createBibliography = (citations: string[]): BibliographyEntry[] => {
  const bibtexContent = fs.readFileSync("./bibliography.bib")
  const parser = new Cite(bibtexContent.toString())
  const bibliography = parser.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-CA',
  })

  const parsed = parse(bibliography)
  return citations.map((key, index) => {
    const entry = parsed.querySelector(`.csl-entry[data-csl-entry-id=${key}]`)
    if (!entry) {
      throw new Error(`Key ${key} not found in the bibtex file`)
    }

    const link_find = /https:\/\/[^\s<]+/;
    const hyperlink = (entry.toString()).match(link_find);
    let link_index = (entry.toString()).search(link_find);
    const ref = entry.toString();
    let reference;
    if (hyperlink != null) {
      let link = "<a href=\"" + hyperlink[0] + "\">" + hyperlink[0] + "</a>";
      reference = ref.slice(0, link_index) + link + ref.slice(link_index + hyperlink[0].length);
    } else {
      reference = ref;
    }

    return {
      html: reference,
      citationKey: key,
      index: index + 1,
    }
  })
}

const rehypeCitations: Plugin<[], Root> = () => {
  return (tree, file: VFile) => {
    const citations: string[] = []
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || typeof node.value !== 'string' || typeof index !== 'number') return;

      const regex = /(\s@\w+)+/g;
      const groups = [...node.value.matchAll(regex)]
      let lastIndex = 0;
      const newChildren: (Text | Element)[] = []

      for (const group of groups) {
        const matchIndex = group.index ?? 0;

        if (matchIndex > lastIndex) {
          newChildren.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchIndex),
          });
        }

        const fullMatch = group[0]
        const individualParts = fullMatch.trim().split(/\s+/)

        const aChildren: (Text | Element)[] = []

        for (const match of individualParts) {
          const citationKey = match.slice(1)

          let index = citations.indexOf(citationKey) + 1
          if (index === 0) {
            citations.push(citationKey)
            index = citations.length
          }

          aChildren.push({
            type: 'element',
            tagName: 'a',
            properties: { href: `#citation-${citationKey}`, className: ['citation'] },
            children: [{ type: 'text', value: `${index}` }],
          })
        }

        newChildren.push({
          type: 'element',
          tagName: 'sup',
          properties: {},
          children: ([] as (Text | Element)[]).concat(
            [{ type: 'text', value: '[' }],
            interleave(aChildren, { type: 'text', value: ', ' }),
            [{ type: 'text', value: ']' }]
          ),
        })

        lastIndex = matchIndex + fullMatch.length;
      }

      if (lastIndex < node.value.length) {
        newChildren.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        });
      }

      if (newChildren.length > 0) {
        parent.children.splice(index, 1, ...newChildren);
      }

      return CONTINUE
    });

    // @ts-ignore
    file.data.astro.frontmatter.bibliography = createBibliography(citations)
  };
};

export default rehypeCitations;
