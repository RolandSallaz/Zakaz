import './AdminPopup.scss'
import {ReactNode} from "react";

interface IProps {
    children?: ReactNode
    onSubmit: () => void
    onClose: () => void
    isOpen: boolean
    refProp?: HTMLFormElement
}

export function AdminPopup({children, onClose, onSubmit, isOpen, refProp}) {
    return (
        <div className={`admin-modal ${isOpen && 'admin-modal_open'}`}>
            <button className={'admin-modal__close-button'} onClick={onClose}>
                X
            </button>
            <form className={'admin-modal__form'} onSubmit={onSubmit} ref={refProp}>
                {children}
            </form>
        </div>
    );
};