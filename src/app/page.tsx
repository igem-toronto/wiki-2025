import { NavigationBar } from "@/components/NavigationBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <NavigationBar />
        <main className="flex px-64 py-12">
          To be added
        </main>
      </div>
      <footer className="flex w-full justify-center p-6">
       To be added
      </footer>
    </div>
  );
}
