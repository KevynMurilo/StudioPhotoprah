import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
      onClose();
    }
  };

  return (
    <div>
      {/* Ícone do "hambúrguer" com a classe menu-icon */}
      <div className="menu-icon" onClick={onClose}>
        <div className={`menu-icon-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Elemento de fundo do menu */}
      {isOpen && <div className="menu-background" />}

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className='color-hamb'>
           <li>
            <a
              href="#Inicio"
              onClick={(event) => handleLinkClick(event, 'inicio')}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              onClick={(event) => handleLinkClick(event, 'sobre')}
            >
              Sobre o Studio
            </a>
          </li>
          <li>
            <a
              href="#equipe"
              onClick={(event) => handleLinkClick(event, 'equipe')}
            >
              Sobre a Equipe
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={(event) => handleLinkClick(event, 'portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={(event) => handleLinkClick(event, 'contato')}
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
