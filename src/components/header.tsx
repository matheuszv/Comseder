export function Header(){
    return (
            <div className="h-24 flex justify-between items-center bg-sky-200 px-8">
                <img className="h-16" src="./src/assets/logo.png" alt="" />
                <div className="flex gap-4 text-lg text-sky-700 p-2">
                    <a className="hover:text-sky-500" href="">HOME</a> |
                    <a className="hover:text-sky-500" href="">INSTITUCIONAL</a> |
                    <a className="hover:text-sky-500" href="">AMBULATÓRIO</a> |
                    <a className="hover:text-sky-500" href="">PLANOS</a> |
                    <a className="hover:text-sky-500" href="">SERVIÇOS</a> |
                    <a className="hover:text-sky-500" href="">PRESTADOR</a> |
                    <a className="hover:text-sky-500" href="">CONTATO</a> |
                    <a className="hover:text-sky-500" href="">ANS</a>
                </div>
            </div>
    )
    
}