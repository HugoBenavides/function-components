import { useState } from "react"

function FuncComponent(){

    const [value,setValue] = useState(0)

    return (
        <div>Componente Funcional
        <p>
            {value}
            <button onClick={ ()=>setValue(value-1) } >-</button> 
            <button onClick={ ()=>setValue(value+1) } >+</button>
        </p>
    </div>
    ) 
}

export default FuncComponent