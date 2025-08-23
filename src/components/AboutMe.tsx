import { X, Instagram } from "./Pills/SocialPills"
/*orden de propiedades para los enlaces*/
/*link - name - color*/

export function AboutMe(){
    return(
        <section id="about" className="flex flex-col items-center gap-x-4 w-full max-w-5xl p-5 rounded-2xl shadow-primary">
            <h2 className="mb-5 text-3xl">About me</h2>
            <article className="flex flex-col-reverse items-center lg:items-start lg:flex-row w-full max-w-4xl">
                <div className="p-2 md:text-xl text-pretty">
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
                <img src="/img/icono.png" alt="foto de user" loading="lazy" className="size-50 lg:size-70 rounded-2xl hover:rotate-4 transition duration-500 shadow-primary"/>
            </article>
            <div className="flex-col">
                <h3 className="text-center text-2xl">more networks</h3>
                <ul className="flex flex-wrap justify-center gap-3 m-4">
                    <li><X link="#" name="@Twitter" color="currentColor"></X></li>
                    <li><Instagram link="#" name="@isntagram" color="currentColor"></Instagram></li>
                </ul>
            </div>
        </section>
    )
}