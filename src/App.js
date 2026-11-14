import "./App.css";
import { useLocation } from "react-router-dom";
import RenderRoutes from "./Routes";
import {
  FloatingButtons,
  Footer,
  Header,
  ScrollToTop,
} from "./commanComponents";

function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin-dashboard");

  return (
    <div>
      <ScrollToTop />
      {!isAdmin && <Header />}
      <RenderRoutes />
      {!isAdmin && <Footer />}
      { <FloatingButtons />}
    </div>
  );
}

export default App;