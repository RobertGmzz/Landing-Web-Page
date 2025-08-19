import { X } from "./Pills/SocialPills"
/*orden de propiedades para los enlaces*/
/*link - name - color*/

export function AboutMe(){
    return(
        <section id="about" className="flex flex-col items-center gap-x-4 w-75 lg:w-220 sm:w-150 p-5 border rounded-2xl">
            <h2 className="mb-4">About me</h2>
            <article className="flex flex-col-reverse items-center lg:flex-row w-77 sm:w-full p-5 sm:p-0">
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
                <img src="/img/icono.png" alt="foto de robert" loading="lazy" className="size-50 lg:size-70 mb-4 mx-4 border-2 rounded-2xl rotate-4"/>
            </article>
            <div className="flex-col">
                <h3 className="text-center"><span>more networks</span></h3>
                <ul className="flex flex-wrap justify-center sm:justify-start gap-3 pt-4">
                    <li><X link="#" name="Twitter" color="currentColor"></X></li>
                </ul>
            </div>
            
        </section>
    )
}