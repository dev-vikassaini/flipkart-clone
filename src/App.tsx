import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </main>

        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
