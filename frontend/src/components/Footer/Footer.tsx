import './Footer.scss'

export function Footer() {
    return (
        <footer className={'footer'}>
            <div className={'footer__container'}><p
                className={'copyrigth'}>&copy; {new Date().getFullYear()} StarWise</p></div>
        </footer>
    );
}