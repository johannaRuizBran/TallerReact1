import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hoc from './Components/Hoc';
import Sidebar from './Components/Sidebar';

function App() {
  return (    
    <Hoc>
      <Header />
      <Sidebar />
      <Footer />
    </Hoc>          
  );
}

export default App;
