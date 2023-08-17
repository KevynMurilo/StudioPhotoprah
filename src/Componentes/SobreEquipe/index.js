import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './SobreEquipe.css';

const membrosDaEquipe = [
  {
    nome: 'Dyogo Alarcão',
    foto: 'assets/images/dyogo.png',
    whatsapp: 'https://api.whatsapp.com/qr/XCBCT6OHUNLAF1?autoload=1&app_absent=0 overflow: hidden; overflow: hidden;',
    instagram: 'https://www.instagram.com/fotografo_dyogoalarcao/',
    apresentacao: 'Olá, eu sou o Dyogo Alarcão. Como fotógrafo no nosso estúdio, adoro capturar momentos únicos e transformá-los em memórias inesquecíveis.',
  },
  {
    nome: 'Dudu Campbel',
    foto: 'assets/images/dudu.png',
    whatsapp: 'https://api.whatsapp.com/send/?phone=5561999718212&text&type=phone_number&app_absent=0',
    instagram: 'https://www.instagram.com/duducampbel_fotografo/',
    apresentacao: 'Olá, eu sou o Dudu Campbel. Sou especializado em fotografias de moda e beleza, buscando sempre ressaltar a essência de cada modelo.',
  },
  {
    nome: 'Paulo Souza',
    foto: 'assets/images/paulo.png',
    whatsapp: 'link_do_whatsapp_membro_3',
    instagram: 'link_do_instagram_membro_3',
    apresentacao: 'Olá, eu sou o Paulo Souza. Com minha paixão por fotografia de paisagens, busco capturar a beleza do mundo ao nosso redor.',
  },
  {
    nome: 'Júlia Helena',
    foto: 'assets/images/julia.png',
    whatsapp: 'https://api.whatsapp.com/send?phone=5561998443666&text=Oi,%20vim%20pelo%20Instagram%20e%20quero%20saber%20mais%20sobre%20o%20seu%20trabalho!%20%F0%9F%98%8A',
    instagram: 'https://www.instagram.com/jh.vmaker/',
    apresentacao: 'Olá, eu sou a Júlia Helena. Como fotógrafa de retratos, minha missão é revelar a personalidade única de cada cliente em cada clique.',
  },
];

const SobreEquipe = () => {
  return (
    <div id='equipe' className="sobre-equipe-page">
      <div className="sobre-equipe-container">
        {membrosDaEquipe.map((membro, index) => (
          <div className="membro" key={index}>
            <img src={membro.foto} alt={membro.nome} />
            <h2>{membro.nome}</h2>
            <p>{membro.apresentacao}</p>
            <div className="redes-sociais">
              <a href={membro.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href={membro.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SobreEquipe;
