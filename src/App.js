import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from './Routes';
import { Footer, Header } from './commanComponents';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RenderRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
