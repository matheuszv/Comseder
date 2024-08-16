import { Carousel } from '../../components/slide.tsx';
import { Cards } from '../../components/cards.tsx';
import { VideoPlayer } from '../../components/videos.tsx';
import { Comunicados } from '../../components/comunicados.tsx';

export function Home(){
    return(
        <>
            <Carousel/>
            <div className="justify-center gap-x-20 gap-y-12 flex-wrap flex py-12">
                <Cards img="blabla.png">Planos</Cards>
                <Cards img="blabla.png">Ambulatórios</Cards>
                <Cards img="blabla.png">Serviços On-line</Cards>
                <Cards img="blabla.png">Guia Médico</Cards>
            </div>

            <div className="flex flex-col items-center justify-center my-12">
                <h3 className="text-zinc-800 font-bold text-xl">
                    <span className="text-sky-600">COMSEDER </span>
                    FILIADA A 
                    <span className="text-blue-800"> UNIDAS</span>
                </h3>
                <p className="text-zinc-600 italic">Juntos somos mais fortes</p>
                <VideoPlayer />
            </div>

            <div className="px-56">
                <div className="h-px w-full bg-sky-300"/>
            </div>

            <div className="justify-center flex flex-col my-6 items-center">
                <h3 className="text-zinc-800 font-bold text-3xl pb-8">Comunicados</h3>
                <div className="justify-around items-center flex gap-8 px-10">
                    <Comunicados/>
                    <Comunicados/>
                    <Comunicados/>
                </div>
            </div>
            
        </> 
    )
}