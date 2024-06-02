// eslint-disable-next-line no-unused-vars
import React,{ useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";


import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";


const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    return(
        <>
            <Router>
        <div className={darkTheme ? "Dark" : " "}>
            <div className="bg-gray-100 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Search/>
                <Routes>
                    <Route path="/"/>
                </Routes>
                <Footer/>
            </div>
        </div>
            </Router>
            </>
    );
};

export default App;