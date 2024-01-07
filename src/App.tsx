import { useState } from 'react'
import './App.css'

function App() {

    const [dataSelecionada, setDataSelecionada] = useState('');
    const [semanaSelecionada, setSemanaSelecionada] = useState('');
  
    const handleDataChange = (event) => {
      const novaData = event.target.value;
      setDataSelecionada(novaData);
  
      const data = new Date(`${novaData} 00:00:00`);
      const inicioSemana = new Date(data);
      inicioSemana.setDate(data.getDate() - data.getDay()); 
      const finalSemana = new Date(inicioSemana);
      finalSemana.setDate(inicioSemana.getDate() + 6); 
  
      const formatoData = { year: 'numeric', month: 'numeric', day: 'numeric' };
      const semanaFormatada = `${inicioSemana.toLocaleDateString('pt-BR', formatoData)} - ${finalSemana.toLocaleDateString('pt-BR', formatoData)}`;
  
      setSemanaSelecionada(semanaFormatada);
    };
  
    return (
      <div style={{border: '1px solid'}}>
        <input style={{
          padding: '5px',
          width: '15px',
          appearance: 'none',
          border: 'none',
          background: 'transparent',
        }} type="date" id="dataInput" value={dataSelecionada} onChange={handleDataChange} />
        <input  
          style={{
            padding: '5px',
            appearance: 'none',
            border: 'none',
            background: 'transparent',
          }}
        type="text" value={semanaSelecionada} readOnly />
      </div>
    );
  };
  

export default App
