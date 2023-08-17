import './App.css';
import Contato from './Componentes/Contato';
import Header from './Componentes/Header';
import Portfolio from './Componentes/Portfolio';

import SobreEquipe from './Componentes/SobreEquipe';
import SobreStudio from './Componentes/SobreStudio';

function App() {
  return (

      <div className='container'>
          <Header />
          <SobreStudio />
          <SobreEquipe />
          <Portfolio/>
          <Contato/>
      </div>
  );
}

export default App;
