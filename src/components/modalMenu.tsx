import { X } from 'lucide-react'
interface ModalMenu{
    closeMenuModal: () => void;
}

export function ModalMenu({closeMenuModal}: ModalMenu){
    return(
        <div className="fixed inset-0 bg-black/60 flex justify-end z-10">
            <div className="bg-sky-950 flex flex-col w-8/12 items-end gap-4 text-blue-100 px-12 pt-8">
                <button onClick={closeMenuModal} className="text-right"><X/></button>
                    <a className="hover:font-bold" href={`/`}>HOME</a>
                    <a className="hover:font-bold" href={`/institucional`}>INSTITUCIONAL</a>
                    <a className="hover:font-bold" href={`/ambulatorios`}>AMBULATÓRIO</a>
                    <a className="hover:font-bold" href={`/planos`}>PLANOS</a>
                    <a className="hover:font-bold" href={`/comunicados`}>COMUNICADOS</a>
                    <a className="hover:font-bold" href="">ANS</a>
            </div>
        </div>
    )
}