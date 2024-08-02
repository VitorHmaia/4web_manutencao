import { Footer } from "@/components/footer";
import { Aside } from "@/components/aside";
import { ModeToggle } from "@/components/ui/toggle-mode";

export default function Maintenance() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col flex-wrap relative">
          <div className="absolute top-4 right-4">
            <ModeToggle />
          </div>
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Manutenção
          </h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}
