import React from "react";
import "../styles/index.css";
import Button from "./Button";
import Modal from 'react-modal'

function ModalComponent({closeModal}){
    return(
            <form action="" className="display-flex-form-modal">
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
                <Button onClick={closeModal} nome={"Salvar"}></Button>
            </form>
        
    )
}

export default ModalComponent;