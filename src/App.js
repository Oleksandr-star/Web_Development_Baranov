import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CommentProvider } from './contexts/CommentContext';
import './css/App.css';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Catalog from './components/Catalog';
import ProductPage from './pages/ProductPage';

class App extends React.Component {
  render() {
    return (
      <CommentProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Error />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Router>
      </CommentProvider>
    );
  }
}

export default App;
