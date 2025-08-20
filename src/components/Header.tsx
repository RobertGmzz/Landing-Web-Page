import { ToggleTheme } from "./ToggleTheme"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640
            setIsMobile(mobile)

            if(!mobile){
                setIsOpen(false)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <header className="fixed z-10 flex flex-col w-80 sm:w-154 lg:w-224 mt-2 p-4 rounded-2xl bg-[#FFFFFF]/50 dark:bg-[#1B1B1F]/50 backdrop-blur-md shadow-primary">
            <div className="flex justify-between items-center gap-20 sm:gap-50">
                <div className="flex items-center">
                <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]">
                </span>
                <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-[#ffffff] rounded-full dark:bg-[#1B1B1F] dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">Status
                </div>
            </span>
        </div>

                <nav className="flex gap-2">
                    <ToggleTheme></ToggleTheme>
                    <button onClick = {() => isMobile && setIsOpen(prev => !prev)} className="sm:hidden" aria-label="Toggle button">
                        {isOpen ? <X></X> : <Menu></Menu>}
                    </button>
                </nav>
            </div>

            <nav className={`${isOpen ? "flex" : "hidden"} sm:flex`}>
                <ul className="flex flex-wrap justify-center w-80 sm:w-full gap-4 mt-5 sm:mt-0">
                    <li><a onClick={handleOnClick} href="#experience">Experience</a></li>
                    <li><a onClick={handleOnClick} href="#projects">Projects</a></li>
                    <li><a onClick={handleOnClick} href="#about">About Me</a></li>
                    <li><a onClick={handleOnClick} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}