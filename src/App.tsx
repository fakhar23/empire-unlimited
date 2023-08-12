import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
