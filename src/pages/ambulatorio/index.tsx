import { Cardzin } from "./cardzin"
import { projects } from "./data"
import { useScroll } from "framer-motion"
import { useRef } from "react"

export function Ambulatorio(){
    
    
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div className="flex flex-col">    
            <h1 className="text-sky-900 font-bold text-3xl text-center p-12">AMBULATÓRIOS</h1>    
            <div className="flex gap-16 justify-center flex-col items-center p-12">
                <div ref={container}>
                    {projects.map( (project, index) => {
                        const targetScale = 1 - ((projects.length - index) * 0.05)
                        return <Cardzin key={index} i={index} {...project} progress={scrollYProgress} range={[index*0.25, 1]} targetScale={targetScale}/>
                    } )}
                </div>
            </div>
        </div>
    )
}