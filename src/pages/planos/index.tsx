import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { X } from "lucide-react"
import { Carousel } from "./CarrosselCards"


export function Planos(){

    const [isOpen, setIsOpen] = useState(false);

        const toggleAccordion = () => {
            setIsOpen(!isOpen);
        };

        /*
        const items = [
            <div className="flex items-center justify-center h-48 bg-red-500" key="item1">
              Item 1
            </div>,
            <div className="flex items-center justify-center h-48 bg-green-500" key="item2">
              Item 2
            </div>,
            <div className="flex items-center justify-center h-48 bg-blue-500" key="item3">
              Item 3
            </div>,
          ];
        */
        

          

    return (
        <div className="flex flex-col">    
        <h1 className="text-sky-900 font-bold text-3xl text-center p-12">PLANOS</h1>    
        <div className="flex gap-16 px-24 flex-col">
            <div className="px-40 py-12">        
                <Carousel/>
            </div>
            <div className="flex space-y-8 bg-white px-8 mb-10 rounded-3xl shadow-xl flex-col">
                <h2 className="text-sky-900 font-bold text-lg text-center pt-2">Informações uteis</h2>
                <div onClick={toggleAccordion} className="flex bg-sky-900 justify-between items-center p-3 font-normal rounded-md text-sky-50 flex-col">
                    <div className="justify-between items-center cursor-pointer flex flex-1">
                        <h3 className="text-sky-50 font-bold">Como aderir ou mudar o plano</h3>
                        {isOpen? (<X/>) : (<ChevronDown />)}
                    </div>
                    {isOpen && ( 
                    <div className="border border-sky-600 bg-sky-100 px-3 text-zinc-800 py-2">
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quas sequi nam fuga soluta possimus, ex, adipisci ea architecto ad veritatis? Consequatur vitae temporibus nulla dicta deleniti? Repellendus, repellat! Alias!</p> 
                    </div>)}
                
                </div>   
            </div>
        </div>
        </div>
    )
    
}