import './AdminPopup.scss'
import {MutableRefObject, ReactNode, SyntheticEvent} from "react";

interface IProps {
    children?: ReactNode;
    onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
    onClose: () => void;
    refProp?: MutableRefObject<HTMLFormElement>;
    heading: string;
    submitButtonText?: string;
}

export function AdminPopup({children, onClose, onSubmit, refProp, heading, submitButtonText}: IProps) {
    return (
        <div className={`admin-modal`}>
            <h2 className={'admin-modal__heading'}>{heading}</h2>
            <button className={'admin-modal__close-button'} onClick={onClose}>
                X
            </button>
            <form className={'admin-modal__form'} onSubmit={onSubmit} ref={refProp}>
                {children}
                <button className={'admin-modal__submit-button'}>{submitButtonText || 'Подтвердить'}</button>
            </form>
        </div>
    );
}