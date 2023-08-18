import {Link} from "react-router-dom";
import './NotFound.scss'

export function NotFound() {
    return (
        <div className={'not-found'}>
            <Link className={'not-found__link'} to={'/'}>404 Вернуться на главную страницу</Link>
        </div>
    );
}