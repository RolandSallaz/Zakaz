import './App.scss'
import {Header} from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import {News} from "../News/News";
import {Admin} from "../Admin/Admin";
import {Footer} from "../Footer/Footer";
import {useEffect, useState} from "react";
import {adminLogin, checkToken} from "../../utils/Api";
import {LoggedInContext} from "../../contexts/LoggedInContexts";
import {NotFound} from "../NotFound/NotFound";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (token) {
            checkToken(token).then(() => setLoggedIn(true)).catch(console.log)
        }
    }, [])

    function handleLoginSubmit(password: string) {
        adminLogin(password)
            .then(({token}) => {
                localStorage.setItem('jwt', token);
                setLoggedIn(true)
            })
            .catch(console.log)
    }

    return (
        <LoggedInContext.Provider value={loggedIn}>
            <Header/>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<News/>}/>
                    <Route path='/admin' element={<Admin onLogin={handleLoginSubmit}/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </LoggedInContext.Provider>
    )
}

export default App
