import { Carousel } from "./CarrosselCards"
import { AcordeonPlan } from "./AcordeonPlan"
import { ModalPlan } from "./modalPlans"
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
            <div className="flex gap-16 px-56 flex-col">
                <div className="py-12">        
                    <Carousel handleModal={handleModal}/>
                </div>
                <div className="flex bg-white mb-10 rounded-3xl shadow-xl flex-col px-20 py-8 gap-8">
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