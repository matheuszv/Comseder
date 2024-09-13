import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useEffect, useRef } from "react"
import Lenis from 'lenis'

interface Cardzin{
    title: string
    description: string
    src: string
    link: string
    color: string
    i: number
    progress: MotionValue<number>
    range: number[]
    targetScale: number
}



export function Cardzin({title, description, src, color, i, progress, range, targetScale}: Cardzin){
   

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1] , [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])
    
    useEffect(() => {
        const lenis = new Lenis()
        
        function raf(time:number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    
    return (
       <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div style={{scale, backgroundColor: color, top: `calc(-10% + ${i*25}px)`}} className="w-[1000px] h-[400px] relative -top-[10%] rounded-3xl flex flex-col items-center gap-8 pt-8">
                <h3 className="font-bold text-xl">{title}</h3>
                <div className="flex justify-around px-8 gap-4">
                    <p className="flex-1">{description}</p>
                    <div className="h-[250px] w-[400px] overflow-hidden">
                        <motion.div style={{scale: imageScale}} className="flex rounded-lg overflow-hidden ">
                            <img src={src} alt="imagem"/>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
       </div>
    )
}