import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { X } from "lucide-react"

interface Acordeon{
  title: string;
  content: string;
};

export function Acordeon({title, content}: Acordeon){
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

    const RenderText = () => {
        return (
            <div dangerouslySetInnerHTML={{ __html: (String(content)).replace(/\n/g, '<br />') }} />
        );
    };

  return (
    <div className="flex flex-col rounded-lg text-sky-50 text-sm">
    {title=="DIRETORIA" ?
    (
      <div onClick={toggleAccordion} className="flex cursor-pointer bg-sky-900 justify-between items-center p-3 font-normal rounded-t-lg">
        <h3>{title}</h3> {isOpen? (<X/>) : (<ChevronDown />)}
      </div>
    ) : 
    (
    <div onClick={toggleAccordion} className="flex cursor-pointer bg-sky-900 justify-between items-center p-3 font-normal">
        <h3>{title}</h3> {isOpen? (<X/>) : (<ChevronDown />)}
    </div>
      )
    }
      {isOpen && (
        <div className="border border-sky-600 bg-sky-100 px-3 text-zinc-800 py-2">
          <RenderText/>
        </div>
      )}
    </div>
  );
};
