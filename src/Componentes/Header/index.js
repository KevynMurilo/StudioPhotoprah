import React, { useState } from 'react';
import './Header.css';
import Menu from '../Menu'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div id='inicio' className="video-container">
        <video
          className="video"
          src="/assets/videomodel1.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Componente Menu utilizado como o ícone do "hambúrguer" */}
      <Menu isOpen={menuOpen} onClose={toggleMenu} />

      <div className="content">
        {/* Conteúdo do header aqui */}
        <h1 className="title">Wellcome</h1>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </header>
  );
};

export default Header;
