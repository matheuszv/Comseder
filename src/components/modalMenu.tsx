
interface ModalMenu{
    closeMenuModal: () => void;
}

export function ModalMenu({closeMenuModal}: ModalMenu){
    return(
        <div className="flex justify-end">
            <div className="bg-sky-700 flex flex-col w-8/12 justify-center">
                <button onClick={closeMenuModal}>FECHA</button>
            </div>
        </div>
    )
}