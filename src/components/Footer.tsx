import { useState } from "react"

export function Footer() {
    const [status, setStatus] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        const res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
        })

        if (res.ok) {
        setStatus("¡Mensaje enviado con éxito!")
        form.reset()
        } else {
        setStatus("Ocurrió un error, intenta de nuevo")
        }
    }

    return (
        <footer id="contact" className="flex flex-col items-center w-75 sm:w-150 lg:w-220 p-5 mb-4 rounded-2xl shadow-primary">
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5 lg:gap-10">
            <h3 className="pt-4 w-60 sm:w-77 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa vero
            quidem dolor.
            </h3>

            <form
            action="https://formsubmit.co/187d575a438535c5f4d8661d1bd328d6"
            method="POST"
            onSubmit={handleSubmit}
            className="flex basis-2/3 flex-col items-center gap-3 w-70 sm:w-full lg:w-100 p-5">

            {/* Anti-spam */} 
            <input type="text" name="_honey" style={{ display: "none" }} />
            
            <input
                type="hidden"
                name="_subject"
                value="Nuevo mensaje desde el formulario"
            />

            <h2 className="pb-2 text-center">Contact me</h2>

            <input
                type="text"
                name="name"
                placeholder="Tu nombre..."
                required
                className="p-2 w-full  rounded-xl outline-0 shadow-secondary"
            />
            <input
                type="email"
                name="email"
                placeholder="Tu correo..."
                required
                className="p-2 w-full rounded-xl outline-0 shadow-secondary"
            />
            <textarea
                name="message"
                placeholder="Tu mensaje..."
                required
                className="p-2 w-full min-h-30 rounded-xl outline-0 shadow-secondary"
            ></textarea>

            {/* Verificacion y estilos del mensaje */}
            {status && (
                <p className="text-center font-semibold">{status}</p>
            )}

            <button
                type="submit"
                className="w-20 p-2 rounded-xl text-sm shadow-button">
                Enviar
            </button>
            </form>
        </div>
        <div className="flex mt-5 justify-between w-full text-sm">
            <a translate="no" href="#" rel="noopener noreferrer" className="hover:underline">©autor</a>
            <a href="#hero" className="hover:underline">comeback</a>
        </div>
        </footer>
    )
}
