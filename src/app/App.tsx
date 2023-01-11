import React  from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";




const App = () => {
const{theme} =useTheme()
    return (
        <div className={classNames('app',{},[theme])}>
            <Navbar/>
            <div className='content-page'>
                <AppRouter/>

            </div>
        </div>
    );
};

export default App;