import { AlignJustify } from 'lucide-react'

interface Header{
    openMenuModal: () => void;
}

export function Header({openMenuModal}:Header){
    return (
            <div className="h-24 flex justify-between items-center bg-sky-950 px-10">
                <img className="h-16 cursor-pointer" src="./assets/logo.png" alt="" />
                <div className="flex text-sm text-blue-100">
                    <a className="flex w-20 justify-center hover:font-bold max-mxl:hidden" href={`/`}>HOME</a><span className="text-zinc-500 max-mxl:hidden">|</span>
                    <a className="flex w-36 justify-center hover:font-bold max-mxl:hidden" href={`/institucional`}>INSTITUCIONAL</a><span className="text-zinc-500 max-mxl:hidden">|</span>
                    <a className="flex w-36 justify-center hover:font-bold max-mxl:hidden" href={`/ambulatorios`}>AMBULATÓRIO</a><span className="text-zinc-500 max-mxl:hidden">|</span>
                    <a className="flex w-24 justify-center hover:font-bold max-mxl:hidden" href={`/planos`}>PLANOS</a><span className="text-zinc-500 max-mxl:hidden">|</span>
                    <a className="flex w-28 justify-center hover:font-bold max-mxl:hidden" href="">SERVIÇOS</a><span className="text-zinc-500 max-mxl:hidden">|</span>
                    <a className="flex w-36 justify-center hover:font-bold max-mxl:hidden" href={`/comunicados`}>COMUNICADOS</a><span className="text-zinc-500 max-mxl:hidden">|</span>
                    <a className="flex w-24 justify-center hover:font-bold max-mxl:hidden" href={`/contato`}>CONTATO</a><span className="text-zinc-500 max-mxl:hidden">|</span>
                    <a className="flex w-16 justify-center hover:font-bold max-mxl:hidden" href="https://www.gov.br/ans/pt-br" target="_blank">ANS</a>
                    <button onClick={openMenuModal} className="mxl:hidden">
                        <AlignJustify />
                    </button>
                </div>
            </div>
    )
    
}
