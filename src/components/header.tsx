export function Header(){
    return (
            <div className="h-24 flex justify-between items-center bg-blue-950 px-8">
                <img className="h-16 cursor-pointer" src="./assets/logo.png" alt="" />
                <div className="flex gap-4 font- text-sm text-blue-100 p-2">
                    <a className="text-center hover:font-bold" href="">HOME</a> <p className="text-zinc-500">|</p>
                    <a className="text-center hover:font-bold" href="">INSTITUCIONAL</a> <p className="text-zinc-500">|</p>
                    <a className="text-center hover:font-bold" href="">AMBULATÓRIO</a> <p className="text-zinc-500">|</p>
                    <a className="text-center hover:font-bold" href="">PLANOS</a> <p className="text-zinc-500">|</p>
                    <a className="text-center hover:font-bold" href="">SERVIÇOS</a> <p className="text-zinc-500">|</p>
                    <a className="text-center hover:font-bold" href="">PRESTADOR</a> <p className="text-zinc-500">|</p>
                    <a className="text-center hover:font-bold" href="">CONTATO</a> <p className="text-zinc-500">|</p>
                    <a className="text-center hover:font-bold" href="">ANS</a>
                </div>
            </div>
    )
    
}