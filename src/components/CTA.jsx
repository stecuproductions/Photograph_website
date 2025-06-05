import { Camera } from "lucide-react";
import SectionHeader from "../UI/SectionHeader";
import Button from "../UI/Button";
const CTA = () => {
    return (
        <section id ="#contactMe" className="flex flex-col items-center justify-center gap-4">
            <SectionHeader className="text-center">Potrzebujesz Fotografa?</SectionHeader>
            <div className="max-w-60 w-full border-1 border-black"></div>
            <div className="flex flex-row items-center  gap-2">
                <div className="h-[20px] aspect-square bg-black "></div>
                <h3 className="font-header uppercase text-xl">Napisz do mnie</h3>
                <div className="h-[20px] aspect-square bg-black "></div>
            </div>
            <a href="/kontakt" ><Button>SKONTAKTUJ SIĘ</Button></a>
        </section>
    );
    }
export default CTA;