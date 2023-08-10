import './AdminPopup.scss'
import {LegacyRef, ReactNode} from "react";

interface IProps {
    children?: ReactNode
    onSubmit: () => void
    onClose: () => void
    isOpen: boolean
    refProp?: LegacyRef<HTMLFormElement>
}

export function AdminPopup({children, onClose, onSubmit, isOpen, refProp}:IProps) {
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
}