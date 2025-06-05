import SectionHeader from "@/UI/SectionHeader";
import Paragraph from "@/UI/Paragraph"
import Image from "next/image";
import Button from "@/UI/Button";
const Hero = () => {
    return (
        <header className="flex flex-col  lg:grid lg:grid-cols-2 grid-rows-2 gap-8">
            <div className="flex flex-col gap-4">
                <SectionHeader>Zatrzymuję czas jednym kliknięciem</SectionHeader>
                <Paragraph>Tworzę zdjęcia, które pomagają budować zaufanie – niezależnie, czy chodzi o markę osobistą, wizerunek firmy, czy ważne momenty w życiu. Skupiam się na naturalnym świetle, spójnej estetyce i dopasowaniu do Twoich potrzeb. Pracuję tak, byś czuł się swobodnie, nawet jeśli to Twoja pierwsza sesja. Wierzę, że dobre zdjęcie to nie tylko technika, ale też atmosfera. Zadbam o jedno i drugie.</Paragraph>
                <a href="/portfolio"><Button className="mt-4 max-w-[200px]">Zobacz Portfolio</Button></a>
            </div>
            <figure className="col-start-2 row-start-1 row-span-2">
                <Image
                    src="/images/home/portrait.png"
                    alt="Zdjęcie przedstawiające osobę w naturalnym świetle"
                    width={1000}
                    height={1000}
                    className="w-full max-w-[400px] md:max-w-[600px] h-auto lg:max-w-none  object-cover shadow-lg mx-auto"
                />
            </figure>
            <figure className="relative w-fit mx-auto lg:mr-auto lg:mx-0  lg:mx-none">
                {/* Dolne zdjęcie – główne */}
                <Image
                    src="/images/home/weeding1.png"
                    alt="Para młoda tańcząca"
                    width={1000}
                    height={1000}
                    className="  w-auto  shadow-lg max-h-[300px]"
                />

                {/* Górne zdjęcie – nadpisane na główne */}
                <Image
                    src="/images/home/weeding2.png"
                    alt="Para młoda przytula się"
                    width={1000}
                    height={1000}
                    className="absolute w-auto max-h-[200px] -right-15 top-30  shadow-md"
                />
            </figure>

        </header>
    );
}

export default Hero;