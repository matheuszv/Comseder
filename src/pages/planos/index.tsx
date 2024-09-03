import { useState } from 'react'
import { ChevronDown } from "lucide-react"
import { X } from "lucide-react"

export function Planos(){

    const [isOpen, setIsOpen] = useState(false);

        const toggleAccordion = () => {
            setIsOpen(!isOpen);
        };

    return (
        <div className="flex flex-col">    
        <h1 className="text-sky-900 font-bold text-3xl text-center p-12">PLANOS</h1>    
        <div className="flex gap-16 flex-wrap px-24">
            <div className="flex-1 space-y-8 bg-white px-8 mb-10 rounded-3xl shadow-xl">
                <h2 className="text-sky-900 font-bold text-lg text-center px-12 pt-2">Informações uteis</h2>
                <div onClick={toggleAccordion} className="flex cursor-pointer bg-sky-900 justify-between items-center p-3 font-normal rounded-md text-sky-50 flex-col">
                    <div>
                        <h3 className="text-sky-50 font-bold">Como aderir ou mudar o plano</h3>
                        {isOpen? (<X/>) : (<ChevronDown />)}
                    </div>
                    {isOpen && ( <div className="border border-sky-600 bg-sky-100 px-3 text-zinc-800 py-2">
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quas sequi nam fuga soluta possimus, ex, adipisci ea architecto ad veritatis? Consequatur vitae temporibus nulla dicta deleniti? Repellendus, repellat! Alias!</p> 
                    </div>)}
                
                </div>   
            </div>
            <div className="w-2/6 px-1/12 mb-10 rounded-lg flex flex-col">
                
                
            </div>
        </div>
        </div>
    )
    
}