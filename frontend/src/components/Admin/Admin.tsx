import './Admin.scss';
import {adminLogin, checkToken} from "../../utils/Api";
import {FormEvent, useEffect, useState} from "react";

export function Admin() {
    const [password, setPassword] = useState<string>('')
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    function handleLoginSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        adminLogin(password)
            .then(() => {
                setLoggedIn(true)
            })
            .catch(console.log)
    }

    function handlePasswordChange(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        setPassword(value)
    }
    useEffect(()=>{
        checkToken().then(console.log).catch(console.log)
    },[])
    return (
        <div className='admin'>
            {loggedIn ? (
                    <div className='admin__container'>
                        <button className={'admin__button'}>Добавить пост</button>
                        <button className={'admin__button'}>Редактировать пост</button>
                        <button className={'admin__button'}>Удалить пост</button>
                        <button className={'admin__button'}>Добавить слайдер</button>
                        <button className={'admin__button'}>Удалить слайдер</button>
                    </div>
                )
                :
                (
                    <form className={'admin-form'} onSubmit={handleLoginSubmit}>
                        <h2 className='admin-form__heading'>Админ панель</h2>
                        <input type='password' placeholder='password' className={'admin-form__input'}
                               onChange={handlePasswordChange}/>
                        <button type='submit' className={'admin-form__submit-button'}>Вход</button>
                    </form>
                )}

        </div>
    );
};