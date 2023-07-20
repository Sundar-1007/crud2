import { useState } from "react"

export default function Use(){

    const [name, setName] = useState('sundar');

    return(
        <>
            <button onClick={()=>setName('lavanya')}>clickme</button>
            <p>{name}</p>
        </>
    )
}