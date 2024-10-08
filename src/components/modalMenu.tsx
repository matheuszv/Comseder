import { X } from 'lucide-react'
interface ModalMenu{
    closeMenuModal: () => void;
}

export function ModalMenu({closeMenuModal}: ModalMenu){
    return(
        <div className="fixed inset-0 bg-black/60 flex justify-end z-10">
            <div className="bg-sky-950 flex flex-col w-[240px] items-end text-blue-100 px-10 pt-8">
                <button onClick={closeMenuModal}><X/></button>
                <div className="items-start flex flex-col gap-4 px-12 pt-8 moving-text">
                    <a className="hover:font-bold" href={`/`}>HOME</a>
                    <a className="hover:font-bold" href={`/institucional`}>INSTITUCIONAL</a>
                    <a className="hover:font-bold" href={`/ambulatorios`}>AMBULATÓRIO</a>
                    <a className="hover:font-bold" href={`/planos`}>PLANOS</a>
                    <a className="hover:font-bold" href={`/comunicados`}>COMUNICADOS</a>
                    <a className="hover:font-bold" href="https://www.gov.br/ans/pt-br">ANS</a>
                    
                </div>
            </div>
        </div>
    )
}