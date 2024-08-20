import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Acordeon{
  title: string;
  content: string;
};

export function Acordeon({title, content}: Acordeon){
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col rounded-lg text-sky-50">
    {title=="DIRETORIA" ?
    (
      <div onClick={toggleAccordion} className="flex cursor-pointer bg-sky-900 justify-between items-center p-3 rounded-t-lg">
        <h3>{title}</h3> <ChevronDown />
      </div>
    ) : 
    (
    <div onClick={toggleAccordion} className="flex cursor-pointer bg-sky-900 justify-between items-center p-3">
        <h3>{title}</h3> <ChevronDown />
    </div>
      )
    }
      {isOpen && (
        <div className="border border-sky-600 px-3">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
