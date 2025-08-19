import { Job } from "./Job"

export function Experience(){
    return (
        <main id="experience" className="flex flex-col items-center p-5 w-75 sm:w-150 lg:w-220 border rounded-2xl">
            <h2 className="mb-5">
                Expe
            </h2>
            <section className="flex flex-col flex-wrap justify-center gap-5">
                <Job ruta="/img/proyecto.webp"></Job>
                <Job ruta="/img/Captura.webp"></Job>
            </section>
        </main>
    )
}