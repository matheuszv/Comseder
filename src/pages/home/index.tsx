import { Carousel } from '../../components/slide.tsx';
import { Cards } from '../../components/cards.tsx';
import { VideoPlayer } from '../../components/videos.tsx';
import { Comunicados } from '../../components/comunicados.tsx';

export function Home(){
    return(
        <>
            <Carousel/>
            <div className="justify-center gap-x-20 gap-y-12 flex-wrap flex py-12 max-mxl:gap-28">
                
                <a href={`/planos`}><Cards img="assets/icone-planos.png">Planos</Cards></a>
                <a href={`/ambulatorios`}><Cards img="assets/icone-ambulatorio.png">Ambulatórios</Cards></a>
                <a href="#"><Cards img="assets/icone-servico-online.png">Serviços On-line</Cards></a>
                <a href="#"><Cards img="assets/icone-guia-medico.png">Guia Médico</Cards></a>
            </div>

            <div className="flex flex-col items-center justify-center my-12">
                <h3 className="text-zinc-800 font-bold text-xl">
                    <span className="text-sky-600">COMSEDER </span>
                    FILIADA À 
                    <span className="text-blue-800"> UNIDAS</span>
                </h3>
                <p className="text-zinc-600 italic">Juntos somos mais fortes</p>
                <VideoPlayer/>
            </div>

            <div className="px-56 max-md:px-10">
                <div className="h-px w-full bg-sky-300"/>
            </div>

            <div className="justify-center flex flex-col pt-6 pb-20 items-center bg-white">
                <h3 className="text-zinc-800 font-bold text-3xl pb-2">Comunicados</h3>
                <span className="text-sky-500 text-sm hover:text-sky-700 hover:underline h-7"><a href={`/comunicados`}>Ver mais comunicados</a></span>
                <div className="justify-around items-center flex gap-10 px-10 mt-8 flex-wrap max-sm:px-2">
                    <Comunicados/>
                    <Comunicados/>
                    <Comunicados/>
                </div>
            </div>
            
        </> 
    )
}