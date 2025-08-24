import { ToggleTheme } from "./ToggleTheme"
import { useState, useEffect } from "react"

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
        <header className="fixed z-10 flex flex-col w-full max-w-260 mt-2 p-4 rounded-2xl bg-[#FFFFFF]/50 dark:bg-[#1B1B1F]/50 backdrop-blur-md shadow-primary">
            <div className="flex justify-between items-center gap-20 sm:gap-50">
                <div className="flex flex-nowrap gap-x-2 text-lime-600 dark:text-lime-300">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-power-icon lucide-circle-power"><path d="M12 7v4"/><path d="M7.998 9.003a5 5 0 1 0 8-.005"/><circle cx="12" cy="12" r="10"/></svg>
                    </div>
                    <h3>status</h3>
                </div>

                <nav className="flex gap-2">
                    <ToggleTheme></ToggleTheme>
                    <button onClick = {() => isMobile && setIsOpen(prev => !prev)} className="sm:hidden cursor-pointer" aria-label="Toggle button">
                        {isOpen ? 
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div> 
                        : 
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg></div>}
                    </button>
                </nav>
            </div>
            <nav className={`${isOpen ? "flex" : "hidden"} sm:flex`}>
                <ul className="flex flex-wrap justify-center w-full gap-4 mt-5 sm:mt-0">
                    <li><a onClick={handleOnClick} href="#experience">Experience</a></li>
                    <li><a onClick={handleOnClick} href="#projects">Projects</a></li>
                    <li><a onClick={handleOnClick} href="#about">About Me</a></li>
                    <li><a onClick={handleOnClick} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}