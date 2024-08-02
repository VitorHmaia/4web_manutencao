import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
export function Aside() {

    return (

        <aside className="w-64 p-6">
            <Link href="/">
            <Image src={"/image/maintenace.webp"} className="w-full"
                alt="Logo" width={240} height={240}/>

            <Navbar />
            </Link>
        </aside>

    );

}