import Image from "next/image";
import { NavBar } from "@/components/navbar";
export function Aside() {

    return (

        <aside className="w-64 p-6 bg-slate-100/40">

            <Image src={"/image/maintenace.webp"} className="w-full"
                alt="Logo" width={240} height={240} />

            <NavBar />

        </aside>

    );

}