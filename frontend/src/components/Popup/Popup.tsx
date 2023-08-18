import './Popup.scss'
import {ReactNode, SyntheticEvent, useState} from "react";
import {IPost} from "../../types/interfaces";

type Props = {
    children?: ReactNode,
    onClose: () => void,
    isOpen: boolean
};

export function Popup({children, onClose, isOpen}: Props) {
    function handleClose(e: SyntheticEvent) {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`} onClick={handleClose}>
            <div className={`popup__container ${isOpen && 'popup__container_opened'}`}>
                {children}
            </div>
        </div>
    );
};