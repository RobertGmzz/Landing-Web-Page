import { GitHub, LinkedIn } from "./Pills/SocialPills"
/*orden de propiedades para los enlaces de redes sociales*/
/*link - name - color*/

export function Hero(){
    return (
        <section id="hero" className="flex flex-col sm:flex-row gap-x-4 items-center md:items-stretch w-75 sm:w-150 lg:w-220 p-5 mt-19 sm:mt-25 rounded-2xl shadow-primary">
            <div className="flex flex-col items-center h-70 w-55 lg:h-80 lg:w-70 p-5 rounded-2xl shadow-primary">
                <img src="/img/icono.png" alt="foto de user" loading="lazy" className="size-30 lg:size-40 rounded-full shadow-primary"/>
                <div translate="no" className="flex flex-col flex-grow justify-center text-center divide-y">
                    <h3>Name</h3>
                    <h2>web dev</h2>
                </div>
            </div>
            <div className="flex-1/2 flex flex-col p-5 w-77 pt-8 sm:items-stretch text-center sm:text-start">
                <h1>
                    Hello everyone
                </h1>
                <h3>Here’s Who I am & What I do.</h3>
                <p>
                    The About Me or Profile section of your portfolio, is a short summary about yourself in relation to the type of role you are applying for. In the sample portfolio, the student has highlighted their 
                </p>
                <ul className="flex justify-center sm:justify-start gap-3 pt-4">
                    <li><GitHub link="#" name="@github" color="currentColor"></GitHub></li>
                    <li><LinkedIn link="#" name="@linkedin" color="currentColor"></LinkedIn></li>
                </ul>
            </div>
        </section>
    )
}