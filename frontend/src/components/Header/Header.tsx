import './Header.scss'
import {Link} from "react-router-dom";
export function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <h1 className='header__heading'>СТРОЙ<span className='orange-select'>ПРОФ</span>СЕРВИС</h1>
                <p className='header__description orange-select'>Подрядочная организация</p>
            </div>
            <ul className='info-list'>
                {/*<li className='info-list__item'>*/}
                {/*    Г. Челябинск*/}
                {/*</li>*/}
                {/*<li className='info-list__item'>*/}
                {/*    Г. Челябинск*/}
                {/*</li>*/}
                {/*<li className='info-list__item'>*/}
                {/*    Г. Челябинск*/}
                {/*</li>*/}
            </ul>
            <nav className='nav'>
                <Link className='nav__link' to='/'>Главная</Link>
                <Link className='nav__link' to={'/2'}>Информация</Link>
                <Link className='nav__link' to={'/3'}>Каталог услуг</Link>
                <Link className='nav__link' to={'/4'}>Документации</Link>
            </nav>
        </header>
    );
}