import React from "react";
import "../styles/index.css";
import Button from "./Button";

function Form(){
    return(
        <>
        <form action="" className="display-flex">
            <label>Seu nome:
                <input type="text" />
            </label>
            <label>Nome do filme:
                <input type="text" />
            </label>
            <label>
            Resenha:
                <input type="text" />
            </label>
            <label>
                Nota:
                <input type="number" max={10} min={0}/>
            </label>
        </form>
        <Button nome={"Adicionar"}></Button>
        </>
    )
}

export default Form;