import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./Routes";
import {
  FloatingButtons,
  Footer,
  Header,
  ScrollToTop,
} from "./commanComponents";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <RenderRoutes />
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </div>
  );
}

export default App;
