import SectionHeader from "@/UI/SectionHeader";
import Paragraph from "@/UI/Paragraph";
const ContactHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <SectionHeader className="text-center">Skontaktuj Się Ze Mną</SectionHeader>
            <div className="max-w-60 w-full border-1 border-black"></div>
            <Paragraph className="text-center text-lg">Masz pytania o sesję? Chcesz poznać szczegóły współpracy? Napisz do mnie – odpowiem na wszystkie Twoje wątpliwości i pomogę wybrać najlepsze rozwiązanie dla Twoich potrzeb.</Paragraph>
        </div>
    );
}


export default  ContactHeader;