import React from 'react';
import Button from 'react-bootstrap/Button';
import { Modal as BootstrapModal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ show, handleClose }) => {
  return (
    <>
      <BootstrapModal show={show} onHide={handleClose}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Modal heading</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>Woohoo, you are reading this text in a modal!</BootstrapModal.Body>
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
};

export default ModalComponent;
