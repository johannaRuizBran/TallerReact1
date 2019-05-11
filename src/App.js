import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hoc from './Components/Hoc';
import Sidebar from './Components/Sidebar';
import PracticaUno from './Containers/PracticaUno';
import PracticaDos from './Containers/PracticaDos';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state = {
    show: true
  }

  showSidebar = () => {
    this.setState({ show: !this.state.show });
  }

  render(){
    const sidebar = this.state.show ? <Sidebar /> : null;
    return (    
      <Hoc>
        <Router>
          <Header click={this.showSidebar}/>
          {sidebar}
          <Footer />
          <Route exact path="/" component={PracticaUno}/>
          <Route exact path="/p2" component={PracticaDos}/>
        </Router>           
      </Hoc>          
    );
  }  
}

export default App;
