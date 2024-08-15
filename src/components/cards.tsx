import { User } from 'lucide-react'

interface Cards{
    img: string;
    children: string
}

export function Cards({children}:Cards){
    return(
        <div className="h-32 w-32 border-sky-400 border p-4 justify-center items-center flex flex-col rounded-3xl text-sky-400 font-semibold bg-white">
            <User size={30}/>
            {children}
        </div>
    )
}