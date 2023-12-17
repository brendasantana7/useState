import './App.css';

import { useState } from 'react';

// Gerenciar o estado de algum valor
// getter setter

function App() {
  const [name, setName] = useState("Brenda");
  const [number, setNumber] = useState(1);


  const changeNumber = () => {
    setNumber(number + 1);
};
const reduceNumber = () => {
  setNumber(number - 1);
};
  return (
      <div className='App'>
        <h2>Meu nome é: {name}</h2>
        <p>Insira seu nome</p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <div className='contador'>
          <p>Número: {number}</p>
        <div className='btn-contador'>
          <button onClick={changeNumber}>Adicionar</button>
          <button onClick={reduceNumber}>Diminuir</button>
        </div>
        </div>
      </div>
  );
}

export default App
