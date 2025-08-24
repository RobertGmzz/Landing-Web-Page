import { useState } from "react"
import { FormPill } from "./Pills/FormPill"

/* PROPIEDADES QUE DEBE RECIBIR "FormPill"*/
/*
sprite - va como propiedad - (recibe elementos de tipo ReactElement jsx, tsx(componentes react) o html) - 
id(string - texto que describa  ) -
children(recibe elementos de tipo ReactElement jsx, tsx(componentes react) o html)
*/

/* PROPERTIES THAT "FormPill" SHOULD RECEIVE*/
/*
sprite - goes as property - (receives elements of type ReactElement jsx, tsx (react components) or html) - 
id (string - text that describes ) -
children (receives elements of type ReactElement jsx, tsx (react components) or html)
*/

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
        <footer id="contact" className="flex flex-col items-center w-full max-w-5xl p-5 mb-4 rounded-2xl shadow-primary">
            <form
                action="https://formsubmit.co/uncorreovalido"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-3 w-full">

                {/* Anti-spam */} 
                <input type="text" name="_honey" style={{ display: "none" }} />
                
                <input
                    type="hidden"
                    name="_subject"
                    value="Nuevo mensaje desde el formulario"
                />

                <h3 className="pb-2 text-center text-xl lg:text-2xl">Contact me</h3>

                <input
                    type="text"
                    name="name"
                    placeholder="Your name..."
                    required
                    className="p-2 w-full rounded-xl outline-0 bg-[#f0f0f0] dark:bg-[#2a2a30b7] shadow-secondary"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email..."
                    required
                    className="p-2 w-full rounded-xl outline-0 bg-[#f0f0f0] dark:bg-[#2a2a30b7] shadow-secondary"
                />
                <textarea
                    name="message"
                    placeholder="Your message..."
                    required
                    className="p-2 w-full min-h-30 rounded-xl outline-0 bg-[#f0f0f0] dark:bg-[#2a2a30b7] shadow-secondary"
                ></textarea>

                {/* Verificacion y estilos del mensaje */}
                {status && (
                    <p className="text-center font-semibold">{status}</p>
                )}

                <button
                    type="submit"
                    className="py-2 px-4 rounded-xl text-sm bg-[#f0f0f0] dark:bg-[#2a2a30b7] shadow-button active:scale-95">
                    Send
                </button>
            </form>

            <div className="flex-col mt-5 justify-between w-full text-sm">
                <div>
                    <h3>Contact information</h3>
                    <p>We're open for any suggestion or just to have a chat</p>
                </div>
                <ul className="mt-4">
                    <FormPill sprite={<div></div>} id="hola">{<div>buenas</div>}</FormPill>
                </ul>
            </div>
        </footer>
    )
}