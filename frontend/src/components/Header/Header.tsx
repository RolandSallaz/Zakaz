import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../../contexts/LoggedInContexts";

export function Header() {
  const loggedIn = useContext(LoggedInContext);
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__heading">
          <span className="main-color">S</span>
          tar
          <span className="main-color">W</span>
          ise
        </h1>
        <p className="header__description main-color">Строительная компания</p>
      </div>
      <nav className="nav">
        <Link className="nav__link" to="/">
          Главная
        </Link>
        <Link className="nav__link" to={"/catalog"}>
          Каталог услуг
        </Link>

        {loggedIn && (
          <Link className="nav__link" to={"/admin"}>
            Админка
          </Link>
        )}
      </nav>
    </header>
  );
}
