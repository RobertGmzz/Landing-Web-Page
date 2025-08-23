import type { ReactNode }  from "react"

type props = {
    title: string
    description: string
    route: string
    children: ReactNode
    link: string
}

export function Work({title, description, route, children, link}:props){
    return(
        <article className="flex flex-col gap-4 w-full [@media(min-width:500px)]:w-100 p-4 rounded-2xl shadow-primary">
            <a href={link} aria-label="Ver proyecto" title="Abrir proyecto" target="_blank" rel="noopener noreferrer" className="rounded-2xl overflow-hidden shadow-button">
                <img src={route} alt="captura de proyecto" loading="lazy" className="object-cover transition duration-500 hover:scale-110"/>
            </a>
            <div>
                <h3 className="font-bold text-2xl sm:text-2xl">{title}</h3>
                <p className="text-sm sm:text-base pt-1.5">
                    {description}
                </p>
                <footer>
                    <ul className="flex flex-wrap gap-2 pt-4">
                        {children}
                    </ul>
                </footer>
            </div>
        </article>
    )
}