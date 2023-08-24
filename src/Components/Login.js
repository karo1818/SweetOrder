import React from 'react';
import "../Styles/Login.css"
import Logo from '../Images/Logo.png';
function Login() {
  return (
    <div className="login_page">
      <div className="left_section">
      <img alt='Logo' className='Logo'
             src={Logo} />
      </div>
      <div className="right_section">
        <div className="background"></div>
        <div className="button_container">
          <button className="login_button">Administrador</button>
          <button className="login_button">Cliente</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
