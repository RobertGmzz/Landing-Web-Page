import { Work } from "./work"

export function ProjectSection(){
    return (
        <section id="projects" className="flex flex-col items-center p-5 w-75 sm:w-150 lg:w-220 border rounded-2xl">
            <h2 className="mb-4">Projects</h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <Work ruta="/img/proyecto.webp"></Work>
                <Work ruta="/img/Captura.webp"></Work>
                <Work ruta="/img/proyecto.webp"></Work>
            </div>
        </section>
    )
}