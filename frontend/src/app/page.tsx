import { FaBuilding } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdForklift } from "react-icons/md";
import { Footer } from "@/components/footer";
import { Aside } from "@/components/aside";
import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { ModeToggle } from "@/components/ui/toggle-mode";

export default function Home() {

  const cards = [
    { color: "bg-orange-300", qty: "100", text: "Ambientes", icon: <FaBuilding size={48} /> },
    { color: "bg-blue-300", qty: "100", text: "Equipamentos", icon: <MdForklift size={48} /> },
    { color: "bg-red-100", qty: "100", text: "O.S. Abertas", icon: <GrNotes size={48} /> },
    { color: "bg-purple-100", qty: "100", text: "O.S. Concluídas", icon: <IoMdCheckboxOutline size={48} /> },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col flex-wrap relative">
          <div className="absolute top-4 right-4">
            <ModeToggle/>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight uppercase w-full p-6 text-center">
            Sistema de Gestão de Manutenção
          </h1>
          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
              {cards.map((props) => (
                <Card
                  key={props.text}
                  color={props.color}
                  qty={props.qty}
                  text={props.text}
                  icon={props.icon}
                />
              ))}
            </div>
            <Table />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
