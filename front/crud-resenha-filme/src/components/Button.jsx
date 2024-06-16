import React from "react";

function Button({nome,onClick}){
    return(
        <button type="submit" onClick={onClick} className={nome}>{nome}</button>
    )
}

export default Button;