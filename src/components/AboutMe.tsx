export function AboutMe(){
    return(
        <section id="about" className="flex flex-col items-center gap-x-4 w-full max-w-5xl p-5 rounded-2xl shadow-primary">
            <h2 className="mb-5 text-3xl">About me</h2>
            <article className="flex flex-col-reverse items-center lg:items-start lg:flex-row w-full max-w-4xl">
                <div className="p-2 md:text-xl text-pretty mt-5 lg:mt-0">
                    <p className="mb-3">
                        Usar lazy en la etiqueta img. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong> inventore beatae earum nesciunt autem cupiditate ducimus deleniti quia!</strong>
                    </p>
                    <p className="mb-3">
                        Usar lazy en la etiqueta img.<span className="diferent-font"> inventore beatae earum Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                        Commodi magnam illo aliquam possimus numquam provident incidunt asperiores quis voluptatem.
                    </p>
                    <p>
                        Usar lazy en la etiqueta img. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam <span className="different-font"> inventore beatae earum nesciunt autem cupiditate ducimus deleniti quia!</span> illo aliquam possimus numquam provident incidunt asperiores quis voluptatem ex.
                    </p>
                </div>
                <img src="/img/foto.webp" alt="foto de user" loading="lazy" className="size-50 lg:size-70 rounded-2xl hover:rotate-4 transition duration-500 shadow-primary"/>
            </article>
        </section>
    )
}