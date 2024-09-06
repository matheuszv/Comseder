interface Cards{
    img: string;
    children: string
}

export function Cards({children, img}:Cards){
    return(
        <div className="p-8 w-48 justify-center items-center flex flex-col cursor-pointer border border-transparent font-semibold bg-white rounded-lg shadow-lg hover:border-sky-600 hover:border hover:text-sky-600">
            <img className="h-20 w-20" src={img} alt="icone"/>
            <h3 className="my-3">{children}</h3>
        </div>
    )
}