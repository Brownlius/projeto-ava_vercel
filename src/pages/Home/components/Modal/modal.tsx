import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function CalendarModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="modal">
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
export default CalendarModal;
