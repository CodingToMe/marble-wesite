import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from './Routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
