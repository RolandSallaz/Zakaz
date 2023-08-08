import './App.scss'
import {Header} from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import {News} from "../News/News";

function App() {

    return (
        <>
            <Header/>
            <main className='main'>
                <Routes>
                    <Route path='/Zakaz' element={<News/>}/>
                </Routes>
            </main>
        </>
    )
}

export default App
