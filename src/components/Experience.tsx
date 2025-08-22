import { Job } from "./Job"

export function Experience(){
    return (
        <main id="experience" className="flex flex-col items-center p-5 w-full max-w-5xl rounded-2xl shadow-primary">
            <h2 className="mb-5">
                Expe
            </h2>
            <section className="flex flex-col flex-wrap justify-center gap-5">
                <Job 
                title="Latest proyect" 
                info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet provident doloremque eum id excepturi quos suscipit quia obcaecati ullam, voluptatibus adipisci ad omnis voluptas alias debitis eius. Doloremque, quidem."
                route="/img/proyecto.webp"
                link="#"
                AAMMDD="2025-08-20"
                date="Agosto 2025"
                >
                </Job>
                <Job 
                title="First Proyect"
                info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eveniet provident doloremque eum id excepturi quos suscipit quia obcaecati ullam, voluptatibus adipisci ad omnis voluptas alias debitis eius. Doloremque, quidem."
                route="/img/Captura.webp"
                link="#"
                AAMMDD="2025-01-13"
                date="Enero 2025"
                >
                </Job>
            </section>
        </main>
    )
}