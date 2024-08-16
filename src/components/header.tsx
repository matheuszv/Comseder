export function Header(){
    return (
            <div className="h-24 flex justify-between items-center bg-sky-950 px-10">
                <img className="h-16 cursor-pointer" src="./assets/logo.png" alt="" />
                <div className="flex text-sm text-blue-100">
                    <a className="flex w-20 justify-center hover:font-bold" href="">HOME</a><span className="text-zinc-500">|</span>
                    <a className="flex w-36 justify-center hover:font-bold" href="">INSTITUCIONAL</a><span className="text-zinc-500">|</span>
                    <a className="flex w-36 justify-center hover:font-bold" href="">AMBULATÓRIO</a><span className="text-zinc-500">|</span>
                    <a className="flex w-24 justify-center hover:font-bold" href="">PLANOS</a><span className="text-zinc-500">|</span>
                    <a className="flex w-28 justify-center hover:font-bold" href="">SERVIÇOS</a><span className="text-zinc-500">|</span>
                    <a className="flex w-28 justify-center hover:font-bold" href="">PRESTADOR</a><span className="text-zinc-500">|</span>
                    <a className="flex w-24 justify-center hover:font-bold" href="">CONTATO</a><span className="text-zinc-500">|</span>
                    <a className="flex w-16 justify-center hover:font-bold" href="">ANS</a>
                </div>
            </div>
    )
    
}

/*
    <div className="flex">
                        <a className="text-center hover:font-bold" href="">PLANOS</a>
                        <p className="text-zinc-500">|</p>
                    </div>
                    <div className="flex">
                        <a className="text-center hover:font-bold" href="">SERVIÇOS</a>
                        <p className="text-zinc-500">|</p>
                    </div>
                    <div className="flex">
                        <a className="text-center hover:font-bold" href="">PRESTADOR</a>
                        <p className="text-zinc-500">|</p>
                    </div>
                    <div className="flex">
                        <a className="text-center hover:font-bold" href="">CONTATO</a>
                        <p className="text-zinc-500">|</p>
                    </div>
                    <div className="justify-around flex">
                        <a className="text-center hover:font-bold" href="">ANS</a>
                    </div>

*/