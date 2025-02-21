import React from "react";
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Login = ({setLoginModel}) =>{
    return (
        <div className="login">
            <div className="login_card">
                <div className="title_login">
                    <YouTubeIcon sx ={{fontSize: "54px",color:"blue"}} className="login_image"/>
                    Login
                </div>

                <div className="LoginCredentials">
                    <div className="userNameLogin">
                        <input type="text" placeholder="UserName" className="userLogin" />
                    </div>
                    <div className="userNameLogin">
                        <input type="password" placeholder="Password" className="userLogin" />
                    </div>
                </div>

                <div className="login_buttns">
                    <div className="login_btn">Login</div>
                    <div className="login_btn">SignUp</div>
                    <div className="login_btn" onClick={() =>setLoginModel()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}
export default Login