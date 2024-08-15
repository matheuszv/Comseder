interface Cards{
    img: string;
    children: string
}

export function Cards({children, img}:Cards){
    return(
        <div className="p-8 justify-center items-center flex flex-col cursor-pointer font-semibold bg-sky-50 rounded-lg shadow-lg">
            <img className="h-20 w-20" src={img} alt="icone"/>
            <h3 className="my-3">{children}</h3>
            <button className="px-4 py-2 border rounded-2xl font-medium text-sm text-sky-50 shadow-lg bg-sky-600">SAIBA MAIS</button>
        </div>
    )
}