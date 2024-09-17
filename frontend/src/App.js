import './App.css';
import { BrowserRouter } from 'react-router-dom';  // BrowserRouter está correto
import Main from './pages/Main';  // Mudou para usar o componente Main

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Main /> 
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
