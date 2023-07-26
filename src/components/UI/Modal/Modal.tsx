import { ReactNode } from 'react';
import { MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

interface BackdropProps {
  onClose: MouseEventHandler<HTMLDivElement>;
}

interface ModalOverlayProps {
  children?: ReactNode;
}

interface ModalProps {
  children?: ReactNode;
  onClose: MouseEventHandler<HTMLDivElement>;
}
const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return <div className={styles.modal}>{children}</div>;
};

const portalElement = document.getElementById('overlays')!;

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
