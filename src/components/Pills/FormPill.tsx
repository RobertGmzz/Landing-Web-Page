import type { ReactElement } from "react"
import type { ReactNode } from "react"

type props = {
    sprite: ReactElement
    id: string
    children: ReactNode
}

export function FormPill({sprite, id, children}:props){
    return(
        <li className="flex flex-nowrap gap-4">
            <div>
                {sprite}
            </div>
            <span>
                {id}:
                {children}
            </span>
        </li>
    )
}