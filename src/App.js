import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import Video from './Pages/Video/video';
import Home from './Pages/Home/home';
import {Route,Routes} from 'react-router-dom';
import Profile from './Pages/Profile/profile';
import VideoUpload from './Pages/VideoUpload/videoUpload';

function App() {
    const [sideNavbar, setSideNavbar] = useState(true);

    const setSideNavbarFunc = (value) => {
        setSideNavbar(value);
    }

    return (
        <div className="App">
            <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
            <Routes>
                <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
                <Route path='/watch/:id' element={<Video /> }/>
                <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar}/>}/>
                <Route path = '/:id/upload' element={<VideoUpload />}/>
            </Routes>
            
        </div>
    );
}

export default App;