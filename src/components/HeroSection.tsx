import { GitHub, LinkedIn } from "./Pills/SocialPills"
/*orden de propiedades para los enlaces de redes sociales*/
/*link - name - color*/

export function Hero(){
    return (
        <section id="hero" className="flex flex-col [@media(min-width:550px)]:flex-row gap-x-4 justify-center w-full max-w-5xl mx-auto p-5 mt-19 sm:mt-25 rounded-2xl shadow-primary">
            <div className="flex flex-col items-center w-full h-70 [@media(min-width:550px)]:w-55 p-5 rounded-2xl shadow-primary">
                <img src="/img/icono.png" alt="foto de user" className="size-35 rounded-full shadow-primary"/>
                <div translate="no" className="flex flex-col flex-grow justify-center text-center divide-y">
                    <h3>Name</h3>
                    <h2>web dev</h2>
                </div>
            </div>
            <div className="basis-2/3 flex flex-col max-w-2xl p-3 my-4 text-pretty">
                <h1 className="text-3xl md:text-4xl">
                    Hello everyone
                </h1>
                <p className="mt-2 text-base md:text-xl">
                    The <span className="font-bold">About Me</span> or Profile section of your portfolio, <strong>is a short summary about yourself in relation</strong> to the type of role you are applying for.
                </p>
                <ul className="flex justify-center [@media(min-width:550px)]:justify-start gap-3 mt-4">
                    <li><GitHub link="#" name="@github" color="currentColor"></GitHub></li>
                    <li><LinkedIn link="#" name="@linkedin" color="currentColor"></LinkedIn></li>
                </ul>
            </div>
        </section>
    )
}