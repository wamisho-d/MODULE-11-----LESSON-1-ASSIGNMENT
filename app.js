import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import './App.css'; // Optional for additional global styling

const App = () => {
    return (
        <div className="app">
            <Header />
            <About />
            <Contact />
        </div>
    );
};

export default App;
