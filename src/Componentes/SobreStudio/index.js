import React from 'react';
import Typed from 'react-typed';
import './SobreStudio.css';

const SobreStudio = () => {
  return (
    <div id='sobre' className="sobre-studio-container">
      <h1 id='SobreStudio'> <Typed strings={['Bem Vindo ao Studio Campbell']} typeSpeed={70} startDelay={500} backSpeed={20} showCursor={false} /></h1>
      <p><Typed strings={['Somos um estúdio de fotografia e vídeo especializado em capturar momentos especiais de forma criativa e profissional. Fotografamos casamentos, batizados, eventos em geral e oferecemos serviços de foto profissional para destacar sua imagem pessoal ou de negócios. Nossa missão é eternizar memórias preciosas em fotos e vídeos de alta qualidade, transmitindo emoções e contando histórias através da arte da imagem. Confie em nós para tornar seus momentos inesquecíveis com talento, dedicação e paixão pela fotografia e vídeo.']} typeSpeed={40} startDelay={1000} backSpeed={10} showCursor={false} /> </p>
    </div>
  );
};

export default SobreStudio;
