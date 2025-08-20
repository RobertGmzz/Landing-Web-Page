type image = {
    title: string
    info:string
    route: string
    link: string
    date: string
}

export function Job({info, title, route, link, date}:image){
    return(
        <article className="flex flex-col lg:flex-row items-center gap-4 w-70 sm:w-120 lg:w-full p-4 lg:pt-1 rounded-2xl shadow-primary">
            <div className="basis-1/2 rounded-2xl overflow-hidden shadow-primary">
                <img src={route} alt="captura de trabajo" loading="lazy" className="object-cover transition duration-500 hover:scale-110"/>
            </div>
            <div className="flex-2/3 lg:pt-8">
                <header>
                    <h3>{title}</h3>
                    <time dateTime="2025-08-20" className="text-sm">{date}</time>
                </header>
                <p>
                    {info}
                </p>
                <a href={link} title="Mas informacion" aria-label="Ver mas informacion" target="_blank" rel="noopener noreferrer" className="text-amber-300">saber mas...</a>
            </div>
        </article>
    )
}