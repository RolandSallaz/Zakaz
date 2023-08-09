import './Admin.scss';

export function Admin() {
    return (
        <div className='admin'>
            <form className={'admin-form'}>
                <h1 className='admin-form__heading'>Админ панель</h1>
                <input type='password' placeholder='password'/>
                <button type='submit'>Вход</button>
            </form>
        </div>
    );
};