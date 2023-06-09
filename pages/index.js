import Head from "next/head";
import Image from "next/image";

import TypingEffect from "../components/typingEffect";
import Wisdom from "@/components/wisdom";

import AMM from "../img/AMM.png";
import Maylinn from "../img/Maylinn1.jpg";
import Barna from "../img/35m.jpg";

export default function Home() {
    return (
        <>
            <Head>
                <title>Maylinn sin konfirmasjon</title>
                <meta name='Maylin' content='Gratulerer med dagen' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <div className=' text-center mt-8 text-lg text-white     '>
                    <TypingEffect />
                </div>
                <h1 className=' text-4xl pt-4 text-center font-extrabold text-pink-300'>
                    Maylinn
                </h1>
                <section className=' text-center py-8 mx-4 text-white'>
                    <p>
                        Vi ønsker deg en minnerik og flott konfirmasjonsdag.
                        Gode ønsker for framtiden med masse hell og lykke. Du er
                        en flott jente, som har alle muligheter for dine føtter.
                    </p>
                    <div className=' flex flex-col justify-center items-center mt-6 gap-6'>
                        <Image
                            src={Maylinn}
                            alt='Maylinn på karusell'
                            width={320}
                        />
                        <Image src={Barna} alt='Se de barna' width={320} />
                    </div>
                    <Wisdom />
                </section>
            </main>
        </>
    );
}
