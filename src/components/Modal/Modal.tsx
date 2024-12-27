import React, { memo } from "react";
import Button from "react-bootstrap/Button";
import { Modal as BootstrapModal } from "react-bootstrap";
import NewTask from "../../pages/Task/NewTask";

interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = memo (({ show, handleClose }) => {
  return (
    <>
      <BootstrapModal show={show} onHide={handleClose}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Add New Task</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <NewTask />
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>
  );
});

export default ModalComponent;
