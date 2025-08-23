import { Work } from "./work"
import { ReactIcon, HTMLIcon, JavaScriptIcon, NodeJsIcon } from "./Pills/ToolsPills"

/* Propiedades que debe recibir Job -en orden- */
/*
title(string - titulo descriptivo) - 
info(string - pequeña descripcion directa sobre el proyecto) - 
route(string - ruta de la imagen) - 
children(recibe elementos de tipo ReactNode jsx, tsx(componentes react) o html) - 
link(string - enlace a la pagina del proyecto)
*/

/* Properties that Job should receive -in order- */
/*
title(string - descriptive title) - 
info(string - short direct description about the project) - 
route(string - image path) - 
children(receives elements of type ReactNode jsx, tsx (react components), or html) - 
link(string - link to the project page)
*/


export function ProjectSection(){
    return (
        <section id="projects" className="flex flex-col items-center p-5 w-full max-w-5xl rounded-2xl shadow-primary">
            <h2 className="mb-5 text-3xl">Projects section</h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-pretty">

                    <Work title="Project 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque aliquid." route="/img/proyecto.webp" link="#">
                        <ReactIcon></ReactIcon>
                        <HTMLIcon></HTMLIcon>
                        <NodeJsIcon></NodeJsIcon>
                        <JavaScriptIcon></JavaScriptIcon>
                    </Work>

                    <Work title="Project 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque aliquid." route="/img/proyecto.webp" link="#">
                        <NodeJsIcon></NodeJsIcon>
                        <JavaScriptIcon></JavaScriptIcon>
                    </Work>

                    <Work title="Project 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque aliquid." route="/img/proyecto.webp" link="#">
                        <ReactIcon></ReactIcon>
                        <HTMLIcon></HTMLIcon>
                        <NodeJsIcon></NodeJsIcon>
                    </Work>

            </div>
        </section>
    )
}

