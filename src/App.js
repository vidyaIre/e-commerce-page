import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { ProductCard } from './components/productCard';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element = {<Header/>}/>
        <Route path="/ProductCard" element = {<ProductCard/>}/>
      </Routes>
    </Router>
    </>
    );
}

export default App;
