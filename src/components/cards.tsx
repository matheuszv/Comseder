import { User } from 'lucide-react'

interface Cards{
    img: string;
    children: string
}

export function Cards({children}:Cards){
    return(
        <div className="h-40 w-40 p-4 justify-center items-center flex flex-col rounded-3xl cursor-pointer font-semibold">
            <User size={30}/>
            {children}
        </div>
    )
}