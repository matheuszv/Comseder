import { Clock } from 'lucide-react'

export function Comunicados(){
    return(
        <a href="#">
            <div className="text-sky-500 bg-sky-100 rounded-lg border-transparent border justify-center items-center flex-col py-4 px-6 w-72 h-76 shadow-2xl hover:border hover:border-sky-500">
                <h4 className="text-xl text-left py-3">Título do comunicado</h4>
                <p className="text-sky-950 text-base pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis tempora facilis eligendi cum esse, 
                aperiam doloribus soluta at architecto id delectus ut sint laboriosam accusamus libero excepturi quod rem impedit.</p>
                <span className="border-t flex border-sky-400 text-xs justify-center pt-3 items-center gap-2"><Clock size={16}/> 14 de janeiro de 2024</span>
            </div>
        </a>
    )
}