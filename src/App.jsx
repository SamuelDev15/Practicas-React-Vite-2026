import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import TrikiPage from './pages/TrikiPage';
import ProductsPage from './pages/ProductsPage';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Menu />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/triki" />} />
                        <Route path="/triki" element={<TrikiPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
