import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import BreadCrums from "./components/BreadCrums/BreadCrums";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <BreadCrums activeStep="Earning Income" />
      <Questions />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
