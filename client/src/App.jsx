import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import GameDetailPage from './routes/GameDetailPage';

const App = () => {
    return <div class="container">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/games/:id/update" element={<UpdatePage/>}/>
                <Route exact path="/games/:id" element={<GameDetailPage/>}/>
            </Routes>
        </Router>
    </div>
}

export default App;