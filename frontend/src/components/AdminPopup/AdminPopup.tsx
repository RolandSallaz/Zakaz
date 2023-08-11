import './AdminPopup.scss'
import {MutableRefObject, ReactNode, SyntheticEvent} from "react";

interface IProps {
    children?: ReactNode;
    onSubmit: (e:SyntheticEvent<HTMLFormElement>) => void;
    onClose: () => void;
    isOpen: boolean;
    refProp?: MutableRefObject<HTMLFormElement>;
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