import { Job } from "./Job"

/* PROPIEDADES QUE DEBE RECIBIR "Job"*/
/*
title(string - titulo descriptivo) - 
info(string - pequeña descripcion directa sobre el proyecto) - 
route(string - ruta de la imagen) - 
link(string - enlace a la pagina del proyecto) - 
dateFact(string - fecha en la que se realizo el proyecto en este formato AAAA-MM-DD) - 
date(string - fecha escrita de la manera que se desee y que coincida con la fecha dateFact) - 
load(solo recibe los datos "lazy" de carga diferida, "eager" de carga instantanea, y undefined)
*/


/*PROPERTIES THAT "Job" SHOULD RECIVE*/
/*title(string - descriptive title) - 
info(string - short direct description about the project) - 
route(string - image path) - 
link(string - link to the project page) - 
dateFact(string - date the project was created in this YYYY-MM-DD format) - 
date(string - date written in the desired way and that matches the dateFact date) - 
load(only receives "lazy" data for delayed loading, "eager" data for instant loading, and undefined)
*/

export function Experience(){
    return (
        <main id="experience" className="flex flex-col items-center p-5 w-full max-w-5xl rounded-2xl shadow-primary">
            <h2 className="mb-5 text-3xl">
                Experience
            </h2>
            <section className="flex flex-col flex-wrap justify-center gap-5 text-pretty">
                <Job 
                title="Latest proyect" 
                info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet provident doloremque eum id excepturi quos suscipit quia obcaecati ullam."
                route="/img/example1.webp"
                link="#"
                dateFact="2025-08-20"
                date="Agosto 2025"
                load="eager"
                >
                </Job>
                <Job 
                title="First Proyect"
                info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet provident doloremque eum id excepturi quos suscipit quia obcaecati ullam, voluptatibus adipisci ad omnis voluptas alias."
                route="/img/example2.webp"
                link="#"
                dateFact="2025-01-13"
                date="Enero 2025"
                load="lazy"
                >
                </Job>
            </section>
        </main>
    )
}