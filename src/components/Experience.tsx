import { Job } from "./Job"

export function Experience(){
    return (
        <main id="experience" className="flex flex-col items-center p-5 w-75 sm:w-150 lg:w-220 rounded-2xl shadow-primary">
            <h2 className="mb-5">
                Expe
            </h2>
            <section className="flex flex-col flex-wrap justify-center gap-5">
                <Job 
                title="Latest proyect" 
                info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet provident doloremque eum id excepturi quos suscipit quia obcaecati ullam, voluptatibus adipisci ad omnis voluptas alias debitis eius. Doloremque, quidem."
                route="/img/proyecto.webp"
                link="#"
                date="Agosto 2025"
                >
                </Job>
                <Job 
                title="First Proyect"
                info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet provident doloremque eum id excepturi quos suscipit quia obcaecati ullam, voluptatibus adipisci ad omnis voluptas alias debitis eius. Doloremque, quidem."
                route="/img/Captura.webp"
                link="#"
                date="Enero 2025"
                >
                </Job>
            </section>
        </main>
    )
}