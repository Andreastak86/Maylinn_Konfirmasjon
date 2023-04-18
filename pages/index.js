import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className=' text-center mt-6'>
                <h2 className=' text-lg'>Gratulerer med konfirmasjonen</h2>
                <h1 className=' text-4xl pt-4'>Maylinn</h1>
            </div>
        </>
    );
}
