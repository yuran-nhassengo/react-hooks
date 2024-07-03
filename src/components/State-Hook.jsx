import { useState } from "react";

export const StateHook = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [isHidden,setHidden] = useState(true)

    function handleNameChange(event) {
        setName(event.target.value )
    }
    function handleEmailChange(event) {
        setEmail(event.target.value )
    }
    function handleFormSunmit(event) {
        event.preventDefault();
        setHidden(false)
    }
   



    const labelStyle = "text-lg font-medium";
    const inputstyle ="border border-slate-300 px-1 py-2 round";
    return (
        <div className="flex flex-col ">

        <div className={`bg-white p-10 rounded-lg shadow-2xl text-slate-800 relative ${isHidden ?'hidden':'block'}`}>
            
                <h1>Ola,{name}</h1>
                <p>{email}</p>
            </div>
            <form  className="flex flex-col gap-2 bg-white py-10 rounded"> 
                <div>
                <label className={labelStyle}>Name</label>
                <input onInput={handleNameChange} className={inputstyle} type="text" placeholder="Introduza o nome"/>
                </div>
                <div>
                <label className={labelStyle}>Email</label>
                <input onInput={handleEmailChange} className={inputstyle} type="email"  placeholder="Introduza o email"/>
                </div>
                <button onClick={handleFormSunmit} type="submite" className="bg-blue-400 px-2 py-1 rounded-lg w-fit">Entrar</button>
            </form>

        </div>
    )

}