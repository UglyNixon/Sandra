import React, {useContext} from 'react';
import {Route,Routes,Link} from 'react-router-dom'
import './styles/index.scss'
import{Suspense} from'react'
import {AboutPageAsync} from "./pages/AboutPage/ui/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/ui/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
const{theme,toggleTheme} =useTheme()
    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'} > Главная</Link>
            <Link to={'/about'}> О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;