import './App.css';
import {Header} from "./components/header/Header";
import {Catalog} from "./components/catalog/Catalog";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Catalog/>
        <Footer/>
    </div>
  );
}

export default App;
