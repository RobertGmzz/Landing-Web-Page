type image = {
    ruta: string
}

export function Job({ruta}:image){
    return(
        <article className="flex flex-col lg:flex-row items-center gap-4 w-70 sm:w-120 lg:w-full p-4 lg:pt-1 border rounded-2xl">
            <div className="basis-1/2 border rounded-2xl overflow-hidden">
                <img src={ruta} alt="captura de trabajo" loading="lazy" className="object-cover"/>
            </div>
            <div className="flex-2/3 lg:pt-8">
                <header>
                    <h3>titulo</h3>
                    **etiqueta time en texto pequeño**
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt excepturi nesciunt nisi beatae dolores consequuntur quidem distinctio laborum iure animi, explicabo voluptates illo voluptate atque dolore. Voluptatem, quia cum.
                </p>
                <div>
                    **link para ver mas**
                </div>
            </div>
        </article>
    )
}