import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export function ConfirmModal({ title, message, onConfirm }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleConfirm = () => {
    onConfirm(); // Llama a la función pasada como prop
    setShow(false);
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <Button variant="danger" onClick={handleShow}>
        Eliminar
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title || "Confirmar acción"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message || "¿Estás seguro de realizar esta acción?"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
