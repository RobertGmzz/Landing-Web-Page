import { X, Instagram } from "./Pills/SocialPills"
/*orden de propiedades para los enlaces*/
/*link - name - color*/

export function AboutMe(){
    return(
        <section id="about" className="flex flex-col items-center gap-x-4 w-full max-w-5xl p-5 rounded-2xl shadow-primary text-pretty">
            <h2 className="mb-4">About me</h2>
            <article className="flex flex-col-reverse items-center lg:flex-row w-full max-w-4xl">
                <div>
                    <p className="mb-2">
                        Usar lazy en la etiqueta img. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong> inventore beatae earum nesciunt autem cupiditate ducimus deleniti quia!</strong>
                    </p>
                    <p className="mb-2">
                        Usar lazy en la etiqueta img.<strong> inventore beatae earum </strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam illo aliquam possimus numquam provident incidunt asperiores quis voluptatem.
                    </p>
                    <p className="mb-2">
                        Usar lazy en la etiqueta img. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam <strong> inventore beatae earum nesciunt autem cupiditate ducimus deleniti quia!</strong> illo aliquam possimus numquam provident incidunt asperiores quis voluptatem ex.
                    </p>
                </div>
                <img src="/img/icono.png" alt="foto de user" loading="lazy" className="size-50 md:size-70 m-4 rounded-2xl hover:rotate-4 transition duration-500 shadow-primary"/>
            </article>
            <div className="flex-col m-2">
                <h3 className="text-center"><span>more networks</span></h3>
                <ul className="flex flex-wrap justify-center gap-3 pt-4">
                    <li><X link="#" name="@Twitter" color="currentColor"></X></li>
                    <li><Instagram link="#" name="@isntagram" color="currentColor"></Instagram></li>
                </ul>
            </div>
        </section>
    )
}