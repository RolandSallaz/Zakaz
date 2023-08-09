import './Admin.scss';
import {adminLogin, checkToken, sendPost} from "../../utils/Api";
import {FormEvent, FormEventHandler, SyntheticEvent, useEffect, useRef, useState} from "react";
import {AdminPopup} from "../AdminPopup/AdminPopup";
import {ADMIN_POPUPS} from "../../utils/enums";

export function Admin() {
    const [password, setPassword] = useState<string>('')
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<ADMIN_POPUPS | null>(null)
    const addPostRef = useRef<HTMLFormElement>()

    function handleLoginSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        adminLogin(password)
            .then(({token}) => {
                localStorage.setItem('jwt',token);
                setLoggedIn(true)
            })
            .catch(console.log)
    }

    function handlePasswordChange(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        setPassword(value)
    }

    function handleAddPostOpen() {
        setModalOpen(ADMIN_POPUPS.ADD_POST)
    }

    function handleAddPostSubmit(e: FormEventHandler<HTMLFormElement>) {
        e.preventDefault()
        sendPost(addPostRef.current).then(console.log).catch(console.log)
    }

    function closePopups() {
        setModalOpen(null)
    }


    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (token) {
            checkToken(token).then(()=>setLoggedIn(true)).catch(console.log)
        }
    }, [])

    return (
        <div className='admin'>
            {loggedIn ? (
                    <>
                        <div className='admin__container'>
                            <button className={'admin__button'} onClick={handleAddPostOpen}>Добавить пост</button>
                            <button className={'admin__button'}>Редактировать пост</button>
                            <button className={'admin__button'}>Удалить пост</button>
                            <button className={'admin__button'}>Добавить слайдер</button>
                            <button className={'admin__button'}>Удалить слайдер</button>
                        </div>
                        <AdminPopup onSubmit={handleAddPostSubmit} isOpen={modalOpen === ADMIN_POPUPS.ADD_POST}
                                    onClose={closePopups} refProp={addPostRef}>
                            <input className={'admin-modal__input'} placeholder='image' name='image' type="file"
                                   accept="image/*"/>
                            <input className={'admin-modal__input'} placeholder='Заголовок' name='heading'/>
                            <textarea className={'admin-modal__input admin-modal__textfield'} placeholder='Текст'
                                      name='description'/>
                            <button className={'admin-modal__submit-button'}>Отправить</button>
                        </AdminPopup>
                    </>
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