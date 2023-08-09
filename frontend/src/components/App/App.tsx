import './App.scss'
import {Header} from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import {News} from "../News/News";
import {Admin} from "../Admin/Admin";
import {Footer} from "../Footer/Footer";

function App() {

    return (
        <>
            <Header/>
            <main className='main'>
                <Routes>
                    <Route path='/Zakaz' element={<News/>}/>
                    <Route path='/Zakaz/admin' element={<Admin/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
