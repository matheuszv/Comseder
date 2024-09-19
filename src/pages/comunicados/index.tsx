import { Comunicados } from "../../components/comunicados"
import { useState } from "react"
import { ModalComunicados } from "./modalComunicados";

export function ComunicadosPage(){

    const [modalComunicados, setModalComunicados] = useState(false);

    function handleModal(){
        setModalComunicados(!modalComunicados)
    }

    return(
        <div className="flex flex-col">    
            <h1 className="text-sky-900 font-bold text-3xl text-center p-12">Comunicados</h1>    
            <div className="flex flex-wrap px-8 gap-12 justify-center mb-10">
                <span onClick={handleModal}>
                    <Comunicados/>
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
                <span onClick={handleModal}>
                    <Comunicados />
                </span>
            </div>

            { modalComunicados && 
            (<ModalComunicados handleModal={handleModal}/> )
            }
        </div>
    )
}