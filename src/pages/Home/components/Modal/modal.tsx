import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Calendar() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="modal">
      <button onClick={openModal}>Abrir o negócio</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo"
        overlayClassName="modal-overlay"
        className="Modal-content"
      >
        Eu sou o Modal
      </Modal>
    </div>
  );
}
export default Calendar;
