import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../lista';
import './style.scss';

function App() {
  return (
    <div className = "AppStyle">
      <Formulario />
      <Lista/>
    </div>
  );
}

export default App;