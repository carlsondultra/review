import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import GameDetailPage from './routes/GameDetailPage';
import { GamesContextProvider } from './context/GamesContext';

const App = () => {
    return (
        <GamesContextProvider>
            <div class="container">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/games/:id/update" element={<UpdatePage/>}/>
                        <Route exact path="/games/:id" element={<GameDetailPage/>}/>
                    </Routes>
                </Router>
            </div>
        </GamesContextProvider>
    )
}

export default App;