import type { ReactNode }  from "react"

type image = {
    ruta: string
    children: ReactNode
}


export function Work({ruta, children}:image){
    return(
        <article className="flex flex-col gap-4 w-70 sm:w-100 p-4 border rounded-2xl">
            <div className="border rounded-2xl overflow-hidden">
                <img src={ruta} alt="captura de proyecto" loading="lazy" className="object-cover"/>
            </div>
            <div>
                <h3>titulo</h3>
                <p>
                    Pequeñisima descripcion, adipisicing elit.
                </p>
                <footer>
                    <ul className="flex gap-2 pt-4">
                        {children}
                    </ul>
                </footer>
            </div>
        </article>
    )
}