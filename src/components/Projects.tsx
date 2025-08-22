import { Work } from "./work"
import { ReactIcon, HTMLIcon, JavaScriptIcon, NodeJsIcon } from "./Pills/ToolsPills"


export function ProjectSection(){
    return (
        <section id="projects" className="flex flex-col items-center p-5 w-full max-w-5xl rounded-2xl shadow-primary">
            <h2 className="mb-4">Projects</h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

                    <Work title="Proyect 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque aliquid." route="/img/proyecto.webp" link="#">
                    
                        <ReactIcon></ReactIcon>
                        <HTMLIcon></HTMLIcon>
                        <NodeJsIcon></NodeJsIcon>
                        <JavaScriptIcon></JavaScriptIcon>

                    </Work>

                    <Work title="Proyect 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque aliquid." route="/img/proyecto.webp" link="#">
                        <NodeJsIcon></NodeJsIcon>
                        <JavaScriptIcon></JavaScriptIcon>
                    </Work>

                    <Work title="Proyect 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque aliquid." route="/img/proyecto.webp" link="#">
                        <ReactIcon></ReactIcon>
                        <HTMLIcon></HTMLIcon>
                        <NodeJsIcon></NodeJsIcon>
                    </Work>

            </div>
        </section>
    )
}

