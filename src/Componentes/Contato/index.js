import React from 'react';
import './Contato.css';

const Contato = () => {
  const handleEnviarEmail = () => {
    window.location.href = 'mailto:contato@estudiofotografia.com';
  };

  return (
    <div id='contato' className="contato-container">
      <div className="card">
        <img src="assets/fundoContato2.jpeg" alt="Imagem de Contato" className="imagem-contato" />
        <h2>Entre em Contato</h2>
        <p>Estamos aqui para ajudar. Envie-nos uma mensagem para mais informações.</p>
        <button className="enviar-email" onClick={handleEnviarEmail}>
          Enviar E-mail
        </button>
      </div>
    </div>
  );
};

export default Contato;
