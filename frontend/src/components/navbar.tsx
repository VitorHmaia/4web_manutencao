import Link from "next/link";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";


export function Navbar() {

    const links = [
        {target: "/dashboards", text: "Dashboard", icon: <MdDashboard />},
        {target: "/environment", text: "Ambientes", icon: <FaBuilding />},
        {target: "/equipments", text: "Equipamentos", icon: <MdForklift />},
        {target: "/maintenance", text: "Manutenções", icon: <FaTools />},
        {target: "/teams", text: "Usuários", icon: <FaUsers />},
    ];

    return (
        <nav className="space-y-4 flex flex-col mt-8">
            {links.map((obj, index) => (
                <Link href={obj.target} key={index} className="flex items-center gap-4 hover:font-semibold">
                    {obj.icon}
                    {obj.text}
                </Link>
            ))}
        </nav>
    );
}