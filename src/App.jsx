import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    );
}
