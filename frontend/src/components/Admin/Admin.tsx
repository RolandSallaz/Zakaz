import './Admin.scss';
import {sendPost} from "../../utils/Api";
import {FormEvent, MutableRefObject, SyntheticEvent, useContext, useRef, useState} from "react";
import {AdminPopup} from "../AdminPopup/AdminPopup";
import {ADMIN_POPUPS} from "../../utils/enums";
import {LoggedInContext} from "../../contexts/LoggedInContexts";

interface IProps {
    onLogin: (password: string) => void
}

export function Admin({onLogin}: IProps) {
    const [password, setPassword] = useState<string>('')
    const [modalOpen, setModalOpen] = useState<ADMIN_POPUPS | false>(false)
    const addPostRef = useRef<HTMLFormElement | null>(null)
    const loggedIn = useContext(LoggedInContext)

    function handleLoginSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        onLogin(password)
    }

    function handlePasswordChange(e: FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        setPassword(value)
    }

    function handleAddPostOpen() {
        setModalOpen(ADMIN_POPUPS.ADD_POST)
    }

    function handleAddPostSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()
        sendPost(addPostRef.current!).then(console.log).catch(console.log)

    }

    function closePopups() {
        setModalOpen(false)
    }

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
                        {modalOpen === ADMIN_POPUPS.ADD_POST && (
                            <AdminPopup onSubmit={handleAddPostSubmit}
                                        onClose={closePopups}
                                        refProp={addPostRef as MutableRefObject<HTMLFormElement>}
                                        heading={'Добавить пост'}>
                                <input className={'admin-modal__input'} placeholder='image' name='image' type="file"
                                       accept="image/*"/>
                                <input className={'admin-modal__input'} placeholder='Заголовок' name='heading'/>
                                <textarea className={'admin-modal__input admin-modal__textfield'} placeholder='Текст'
                                          name='description'/>
                            </AdminPopup>
                        )}
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
}