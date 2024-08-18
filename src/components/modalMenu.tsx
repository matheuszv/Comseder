import { X } from 'lucide-react'
interface ModalMenu{
    closeMenuModal: () => void;
}

export function ModalMenu({closeMenuModal}: ModalMenu){
    return(
        <div className="fixed inset-0 bg-black/60 flex justify-end z-10">
            <div className="bg-sky-950 flex flex-col w-8/12 items-center gap-4 text-blue-100">
                <button onClick={closeMenuModal}><X/></button>
                    <a className="hover:font-bold" href={`/`}>HOME</a>
                    <a className="hover:font-bold" href={`/institucional`}>INSTITUCIONAL</a>
                    <a className="hover:font-bold" href="">AMBULATÓRIO</a>
                    <a className="hover:font-bold" href="">PLANOS</a>
                    <a className="hover:font-bold" href="">SERVIÇOS</a>
                    <a className="hover:font-bold" href="">PRESTADOR</a>
                    <a className="hover:font-bold" href="">CONTATO</a>
                    <a className="hover:font-bold" href="">ANS</a>
            </div>
        </div>
    )
}