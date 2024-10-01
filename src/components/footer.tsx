export function Footer(){
    return(
        <div className="py-8 border-t border-sky-500 justify-center items-center bg-sky-950">
            <div className="justify-center flex-wrap flex gap-4">
                <a href="https://www.gov.br/ans/pt-br" target="_blank" className="rounded-md">
                    <img src="assets\img_ans.png" alt="Ans" />
                </a>
                <a href="https://www.somos.coop.br/" target="_blank" className="rounded-md">
                    <img src="assets\img_coop.png" alt="Somos Coop" />
                </a>
            </div>
            <div className="text-white flex flex-col py-8 justify-center text-sm">
                <h4 className="text-center">COMSEDER - João Pessoa-PB</h4>
                <p className="text-center">© 2024</p>
            </div>
            
            <div className="text-white flex flex-col pb-8 justify-center text-sm">
                <p className="text-center"><a href="#" className="hover:underline hover:text-sky-600">POLÍTICA DE PRIVACIDADE</a></p>
                <p className="text-center text-xs text-zinc-400">Não armazenamos dados pessoais durante seu acesso ao nosso site.</p>
            </div>
            <div className="text-white flex justify-center items-center text-sm flex-col gap-4">
                <p className="text-xs">
                    Icones criados por <a href="https://www.flaticon.com/authors/freepik" className="hover:underline hover:text-sky-600 font-bold">Freepik</a> em <a href="www.flaticon.com" className="hover:underline hover:text-sky-600 font-bold">flaticon.com</a>
                </p>
                <p className="text-base border-t border-sky-300 px-16 pt-4 max-mxl:px-6">
                    Desenvolvido com ♥ por <a href="#" className="font-bold hover:underline">Matheus Vinagre</a>
                </p>
            </div>
        </div>
    )
}