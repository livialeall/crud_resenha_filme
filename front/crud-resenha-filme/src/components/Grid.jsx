import React, { useEffect,useState } from "react";
import "../styles/index.css";
import axios from 'axios'; 
import Button from "./Button";


function Grid(){

    const [reviews,sediveview] = useState([]);

    
    const fetchReviews = async () => {
        try {
            const response = await axios.get("/review-teste.json");
            sediveview(response.data);
        }
        catch(erro) {
            console.error("Erro ao buscar as resenhas dos filmes", erro)
        }
    }

    return(
        <div className="container-grid">
            <div className="display-flex-row">
                <h2>Resenhas</h2><Button nome={"Visualizar"} onClick={fetchReviews}></Button>
            </div>
            <div className="grid">
                <div className="header">
                    <div>Usuário</div>
                    <div>Filme</div>
                    <div>Review</div>
                    <div>Nota</div>
                    <div>Ações</div>

                    {reviews.length > 0 ?(
                    reviews.map((r) => (
                        <div className="row" key={r.id}>
                            <div className="cell">{r.user}</div>
                            <div className="cell">{r.film}</div>
                            <div className="cell">{r.review}</div>
                            <div className="cell">{r.nota}</div>
                            <div className="actions">
                                <Button nome={"Deletar"}></Button>
                                <Button nome={"Editar"}></Button>
                            </div>
                        </div>
                    ))
                ): <div></div>}

                </div>
                
                 
            </div>
            
            <div>
            
            </div>
        </div>
    )
}

export default Grid;