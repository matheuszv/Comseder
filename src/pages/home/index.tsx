import { Carousel } from '../../components/slide.tsx';
import { Cards } from '../../components/cards.tsx';
import { VideoPlayer } from '../../components/videos.tsx';

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

            <div className="w-full h-px bg-sky-400"/>

            <div className="flex flex-col items-center justify-center my-12">
                <h3 className="text-zinc-800 font-bold text-xl">
                    <span className="text-sky-500">COMSEDER </span>
                    FILIADA A 
                    <span className="text-blue-800"> UNIDAS</span>
                </h3>
                <p className="text-zinc-600 italic">Juntos somos mais fortes</p>
                <VideoPlayer />
            </div>
            
        </> 
    )
}