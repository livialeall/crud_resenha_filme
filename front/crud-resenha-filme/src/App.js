import Button from  "./components/Button"
import Grid from "./components/Grid";
import { useState } from "react";
import ModalComponent from "./components/ModalComponent";
import Modal from 'react-modal'


function App() {

  const [modalOpened,setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div >
      <h1>CRUD - Resenha de filmes</h1>
      
      <Modal isOpen={modalOpened} className="modal">
        <ModalComponent closeModal={closeModal}></ModalComponent>
      </Modal>
      <input type="text" className="search"></input>
      <Button nome={"Adicionar"} onClick={openModal}></Button>
      <Grid openModal={openModal}></Grid>
    </div>
  );
}

export default App;
