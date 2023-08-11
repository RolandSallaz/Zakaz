import './Popup.scss'
import {ReactNode, SyntheticEvent} from "react";

type Props = {
    children?: ReactNode,
    onClose: () => void,
};

export function Popup({children, onClose}: Props) {

    function handleClose(e: SyntheticEvent) {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className='popup' onClick={handleClose}>
            <div className='popup__container'>
                {children}
            </div>
        </div>
    );
};