import { NavigationBar } from "@/components/NavigationBar";
import { SideBar } from "@/components/SideBar";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <NavigationBar />
        <div className="flex">
          <div className='flex-[1]'>
            <SideBar />
          </div>
          <main className="px-12 py-12 flex-[3]">
            <Heading level='0'>
              Heading level 0
            </Heading>
            <Heading level='1'>
              Heading level 1 (a)
            </Heading>
            <Paragraph>
              Lots of text.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </Paragraph>
            <Heading level='1'>
              Heading level 1 (b)
            </Heading>
            <Heading level='1'>
              Heading level 1 (c)
            </Heading>
            <Heading level='0'>
              Heading level 0 (b)
            </Heading>
            <Heading level='1'>
              Heading level 1 (d)
            </Heading>
            <Heading level='1'>
              Heading level 1 (e)
            </Heading>
          </main>
        </div>
      </div>
      <footer className="flex w-full justify-center p-6">
       To be added
      </footer>
    </div>
  );
}
