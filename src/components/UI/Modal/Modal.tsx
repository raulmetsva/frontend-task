import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import React from 'react';

import styles from './Modal.module.css';

const Backdrop: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

const portalElement = document.getElementById('overlays')!;

const Modal: React.FC<{ children: ReactNode; onClose: () => void }> = ({ children, onClose }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
