
"use client";
import Paragraph from "./Paragraph";
import { useEffect, useState } from "react";

const OpinionBox = ({author, onChange, children}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentContent, setCurrentContent] = useState({ author, children });

    // Update content with animation when props change
    useEffect(() => {
        if (author !== currentContent.author || children !== currentContent.children) {
            // Fade out
            setIsVisible(false);
            
            // Wait for fade out to complete, then update content and fade in
            const timer = setTimeout(() => {
                setCurrentContent({ author, children });
                setIsVisible(true);
            }, 300); // Match this with CSS transition duration
            
            return () => clearTimeout(timer);
        }
    }, [author, children]);

    return (
        <div className="w-full border-black border-1 text-center p-2 py-4 md:py-6 md:px-8 lg:px-16 lg:py-8 relative overflow-hidden">
            <div
                className={`transition-all duration-300 ease-in-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <p className="text-body text-lg">{currentContent.author}</p>
                <Paragraph className="mx-auto italic">
                    {currentContent.children}
                </Paragraph>
            </div>
        </div>
    );
}


export default OpinionBox;