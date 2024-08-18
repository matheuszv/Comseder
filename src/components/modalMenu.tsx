
interface ModalMenu{
    closeMenuModal: () => void;
}

export function ModalMenu({closeMenuModal}: ModalMenu){
    return(
        <div className="fixed inset-0 bg-black/60 flex justify-end">
            <div className="bg-sky-700 flex flex-col w-8/12 justify-center items-center">
                <button onClick={closeMenuModal}>FECHA</button>
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