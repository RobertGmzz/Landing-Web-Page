type image = {
    ruta: string
}

export function Work({ruta}:image){
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
                    <div>**herramientas usadas**</div>
                </footer>
            </div>
        </article>
    )
}