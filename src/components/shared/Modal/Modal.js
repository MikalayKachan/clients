import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.scss';

ReactModal.setAppElement('#root');



const Modal = ({ open, onClose, children }) => {
    return (
        <ReactModal
            isOpen={open}
            className={styles.modal}
            overlayClassName={styles.overlay}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            closeTimeoutMS={300}
            onRequestClose={onClose}
        >
            <div className={styles.close} onClick={onClose} >
                <img src={'icons/close.svg'} alt="close" />
            </div>
            {children}
        </ReactModal>
    );
};

Modal.defaultProps = {
    open: false,
};

export default Modal;
