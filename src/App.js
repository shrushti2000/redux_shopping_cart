import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar  from './components/navbar/Navbar';

import { render } from '@testing-library/react';
import Card from './components/card/Card';
import CartItem from './components/cart/CartItem';
import Cart from './components/cart/Cart';
import { Route, Switch } from 'react-router-dom';
import  Home  from './components/home/Home';
import Filterbar from './components/Filterbar/Filterbar';


class App extends React.Component {

  render() {

    
    return (
      <div>
      <Route path="/" component={Navbar} />
      <Route exact path="/"  component={Filterbar}/>
      <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}></Route>
      </Switch>
      </div>
    );
  }

}
export default App;
