import { Carousel } from '../../components/slide.tsx';
import { Cards } from '../../components/cards.tsx';

export function Home(){
    return(
        <>
            <Carousel/>
            <div className="justify-center gap-x-20 gap-y-12 flex-wrap flex py-6">
                <Cards img="blabla.png">Planos</Cards>
                <Cards img="blabla.png">Ambulatórios</Cards>
                <Cards img="blabla.png">Serviços On-line</Cards>
                <Cards img="blabla.png">Guia Médico</Cards>
            </div>
            <div className="w-full h-px bg-sky-400 my-10"/>
            <p>aaaaaaaaaaa</p>
        </> 
    )
}