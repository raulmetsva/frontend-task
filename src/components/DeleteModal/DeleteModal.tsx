import { useState, useEffect } from 'react';
import { MouseEventHandler } from 'react';

import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import AlertIcon from '../../assets/alert.svg';
import styles from './DeleteModal.module.css';

interface DeleteModalProps {
  onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const DeleteModal = ({ onClose }: DeleteModalProps) => {
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDeleteButtonDisabled(false);
    }, 2000);
  }, []);

  return (
    <Modal onClose={onClose}>
      <img src={AlertIcon} alt="alert" />
      <p className={styles['main-text']}>Delete subprocess 03A456 Picking smtg_long name</p>
      <p className={styles['supporting-text']}>
        Are you sure you want to delete this subprocess? This action cannot be undone.
      </p>
      <div className={styles['button-container']}>
        <Button variant="secondary" onClick={onClose} text="Cancel" />
        <Button variant="primary" disabled={deleteButtonDisabled} onClick={onClose} text="Delete" />
      </div>
    </Modal>
  );
};

export default DeleteModal;
