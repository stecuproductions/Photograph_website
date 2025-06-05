"use client";
import SecitonHeader from "@/ui/SectionHeader"
import OpinionBox from "@/ui/OpinionBox";
import { useState } from "react";
import opinions from "@/data/opinions";
import { ChevronRight, ChevronLeft } from "lucide-react";

const References = () => {
    const [opinionIndex, setOpinionIndex] = useState(0);
    const currentOpinion = opinions[opinionIndex];
    
    const handlePrevOpinion = () => {
        setOpinionIndex((prevIndex) => 
            prevIndex === 0 ? opinions.length - 1 : prevIndex - 1
        );
    };
    
    const handleNextOpinion = () => {
        setOpinionIndex((prevIndex) => 
            (prevIndex + 1) % opinions.length
        );
    };
    
    return (
        <section id="references" className="w-full mt-8 lg:mt-0 flex flex-col items-center justify-center gap-8 ">
            <SecitonHeader className="text-center">Co mówią klienci</SecitonHeader>
            <OpinionBox author={currentOpinion.name}>{currentOpinion.text}</OpinionBox>
            <div className="flex flex-row gap-8">
                <button 
                    className="flex items-center p-1 border-2 justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                    onClick={handlePrevOpinion}
                >
                    <ChevronLeft size={24}/>
                </button>
                <button 
                    className="flex items-center p-1 border-2 justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                    onClick={handleNextOpinion}
                >
                    <ChevronRight size={24}/>
                </button>
            </div>
        </section>
    );
}

export default References;