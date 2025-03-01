import { CONTINUE, visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root, Text, Element } from 'hast';
import type { VFile } from 'vfile';

const rehypeCitations: Plugin<[], Root> = () => {
  return (tree, file: VFile) => {
    const citations: string[] = []
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || typeof node.value !== 'string') return;

      const regex = /@(\w+)/g;
      const matches = [...node.value.matchAll(regex)];


      if (matches.length > 0 && index !== null) {
        const newChildren: (Text | Element)[] = [];
        let lastIndex = 0;

        matches.forEach(match => {
          const [fullMatch, citationKey] = match;
          const matchIndex = match.index ?? 0;

          // Add preceding text as a separate node
          if (matchIndex > lastIndex) {
            newChildren.push({
              type: 'text',
              value: node.value.slice(lastIndex, matchIndex),
            });
          }

          let index = citations.indexOf(citationKey)
          if (index === -1) {
            citations.push(citationKey)
            index = citations.length
          }

          // Add citation element
          newChildren.push({
            type: 'element',
            tagName: 'span',
            properties: { className: ['citation'] },
            children: [{ type: 'text', value: `[${index}]` }],
          });

          lastIndex = matchIndex + fullMatch.length;
        });

        // Add remaining text
        if (lastIndex < node.value.length) {
          newChildren.push({
            type: 'text',
            value: node.value.slice(lastIndex),
          });
        }

        // Replace text node with new elements
        if (index) {
          parent.children.splice(index, 1, ...newChildren);
        }
      }

      return CONTINUE
    });

    // @ts-ignore
    file.data.astro.frontmatter.citations = citations
  };
};

export default rehypeCitations;
