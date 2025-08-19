import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export function ToggleTheme () {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined"){
            return(
                localStorage.theme === "dark" || (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
            )
        }
        return false
    })

    useEffect(()=>{
        const root = document.documentElement
        if(isDark){
            root.classList.add("dark")
            localStorage.theme = "dark"
        } else {
            root.classList.remove("dark")
            localStorage.theme = "light"
        }
    }, [isDark])

    return (
            <button onClick={()=>setIsDark(!isDark)} className="flex items-center">
                {isDark ? <Sun /> : <Moon />}
            </button>
    )
}
