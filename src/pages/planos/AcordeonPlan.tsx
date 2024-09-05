import { X, ChevronDown } from "lucide-react"
import { useState } from "react";

interface AcordeonPlan{
    title: string;
    content: string;
}

export function AcordeonPlan({title, content}: AcordeonPlan){

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={toggleAccordion} className="flex cursor-pointer bg-sky-900 justify-between items-center p-3 font-normal text-sky-100 rounded-t-lg">
                <h3 className="font-bold text-white">{title}</h3> {isOpen? (<X/>) : (<ChevronDown />)}
            </div>
            {isOpen && (
            <div className="border border-sky-600 bg-sky-100 px-3 text-zinc-800 py-2 rounded-b-lg">
                <p className="text-sky-950">{content}</p>
            </div>)}
            
        </div>
    )
}