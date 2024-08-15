import { Carousel } from '../../components/slide.tsx';
import { Cards } from '../../components/cards.tsx';

export function Home(){
    return(
        <>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <Carousel/>
            <div className="px-6 justify-center">
                <div>Planos</div>
                <div>Ambulatórios</div>
                <div>Serviços Online</div>
                <div>Guia Médico</div>
                <div>Recebimento de Produção</div>
            </div>
            <Cards img="blabla.png">Planos</Cards>
            <div className="w-full h-px bg-sky-400 my-8"/>
        </> 
    )
}