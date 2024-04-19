import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <MidSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
