import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModalPortal, openModaPortal, closeModalPortal] = useModal(false);

    return ( 
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1} >Modal 1</button>
            <Modal isOpen={isOpenModal1}  closeModal={closeModal1} >
                <h3>modal 1</h3>
                <p>este es el contenido del modal 1</p>
                <img src="https://loremflickr.com/320/240" alt="Nature" />
            </Modal>

            <button onClick={openModal2} >Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2} >
                <h3>modal 2</h3>
                <p>este es el contenido del modal 2</p>
                <img src="https://loremflickr.com/320/240" alt="Animals" />
            </Modal>
            <button onClick={openModaPortal} >Modal Portal</button>
            <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal} >
                <h3>modal Portal</h3>
                <p>Este contenido carga en otro lado del DOM diferente de donde carga nuestra app de REACT</p>
                <img src="https://loremflickr.com/400/400" alt="Animals" />
            </ModalPortal>
        </div>
    );
}
 
export default Modals;