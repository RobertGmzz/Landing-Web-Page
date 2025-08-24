import { RightRow } from "./Pills/Sprites"

type image = {
    title: string
    info:string
    route: string
    link: string
    dateFact: string
    date: string
    load: "lazy" | "eager" | undefined
}

export function Job({info, title, route, link, dateFact, date, load}:image){
    return(
        <article className="flex flex-col md:flex-row items-start gap-4 [@media(max-width: 400px)]:w-full md:h-auto p-4 rounded-2xl shadow-primary">
            <div className="basis-1/2 rounded-2xl overflow-hidden shadow-button">
                <img src={route} alt="captura de trabajo" loading={load} className="object-cover transition duration-500 hover:scale-110"/>
            </div>
            <div className="basis-2/3 lg:pt-3">
                <header>
                    <h3 className="text-2xl sm:text-3xl">{title}</h3>
                    <time dateTime={dateFact} className="text-sm">{date}</time>
                </header>
                <p>
                    {info}
                </p>
                
                <a href={link} title="Saber mas del proyecto" aria-label="Ver mas informacion" target="_blank" rel="noopener noreferrer" className="flex flex-nowrap">
                    <RightRow></RightRow>
                    <span>more info</span>
                </a>
            </div>
        </article>
    )
}