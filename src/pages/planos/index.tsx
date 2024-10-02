import { Carousel } from "./CarrosselCards"
import { AcordeonPlan } from "./AcordeonPlan"
import { ModalPlan } from "./modalPlans"
import { Cards } from "../../components/cards"
import { useState } from "react"

export function Planos(){

    const [modalPlan, setModalPlan] = useState(false)

    function handleModal(){
        setModalPlan(!modalPlan)
    }

    const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda necessitatibus similique, dolorum vero eum temporibus sint voluptatibus accusamus, itaque enim atque in quidem repellendus dolore, aliquam deserunt. Dolorem, pariatur.\nLorem ipsum dolor, sit amet consectetur adipisicing elit." 
    return (
        <div className="flex flex-col">    
            <h1 className="text-sky-900 font-bold text-3xl text-center p-12">PLANOS</h1>    
            <div className="flex gap-16 px-56 flex-col max-mxl:px-0">
                <div className="py-12 max-mxl:hidden">        
                    <Carousel handleModal={handleModal}/>
                </div>
                <div className="flex-wrap gap-8 justify-center hidden max-mxl:flex">
                    <p onClick={handleModal}>
                        <Cards img="assets/icone-antigo.png">ANTIGO</Cards>
                    </p>
                    <p onClick={handleModal}>    
                        <Cards img="assets/icone-executivo.png">EXECUTIVO I</Cards>
                    </p>
                    <p onClick={handleModal}>
                        <Cards img="assets/icone-executivo-I.png">EXECUTIVO II</Cards>
                    </p>
                    <p onClick={handleModal}>
                        <Cards img="assets/icone-estrela-cadente.png">ESPECIAL I</Cards>
                    </p>
                    <p onClick={handleModal}>
                        <Cards img="assets/icone-estrela.png">ESPECIAL II</Cards>
                    </p>
                    <p onClick={handleModal}>
                        <Cards img="assets/icone-distintivo.png">REFERÊNCIA I</Cards>
                    </p>
                    <p onClick={handleModal}>
                        <Cards img="assets/icone-distintivo-I.png">REFERÊNCIA II</Cards>
                    </p>
                </div>
                <div className="flex bg-white mb-10 rounded-3xl shadow-xl flex-col px-20 py-8 gap-8 max-mxl:px-8">
                    <h2 className="text-sky-900 font-bold text-lg text-center pt-2">Informações úteis</h2>
                    <div className="flex flex-col rounded-xl gap-2">
                        <AcordeonPlan title="Como aderir ao plano" content={lorem}/>
                        <AcordeonPlan title="Quem pode aderir" content={lorem}/>
                        <AcordeonPlan title="Exclusão a pedido" content={lorem}/>
                    </div>
                </div>
            </div>

            {modalPlan && (<ModalPlan handleModal={handleModal}/>)}

        </div>
    )
    
}