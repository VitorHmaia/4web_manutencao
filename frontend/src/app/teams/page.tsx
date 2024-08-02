import { Footer } from "@/components/footer";
import { Aside } from "@/components/aside";
import { ModeToggle } from "@/components/ui/toggle-mode";
import TeamsTable from "@/components/teamstable";
import TeamDetails from "@/components/teamsdetails";
import AssignTeam from "@/components/assignteam";
import ManageAvailability from "@/components/manageavaibility";
import { Navbar } from "@/components/navbar";
import { Card } from "@/components/card";
import { FaBuilding } from "react-icons/fa";
import { MdForklift } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function Teams() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex mt-16">
        <Aside />
        <main className="flex-1 flex flex-col flex-wrap relative">
          <div className="absolute top-4 right-4">
            <ModeToggle />
          </div>
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Gestão de Equipes de Manutenção
          </h1>
          <div className="p-6 grid grid-cols-2 gap-4">
            <Card color="bg-orange-300" text="Membros das equipes" icon={<FaBuilding size={48} />}>
              <TeamDetails />
            </Card>
            <Card color="bg-blue-300" text="Atribuir Equipe para O.S." icon={<MdForklift size={48} />}>
              <AssignTeam />
            </Card>
            <Card color="bg-red-100" text="Disponibilidade das equipes" icon={<GrNotes size={48} />}>
              <ManageAvailability />
            </Card>
            <Card color="bg-purple-100" text="Detalhes" icon={<IoMdCheckboxOutline size={48} />}>
              <TeamsTable />
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
