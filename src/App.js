import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Button} from 'react-bootstrap';
import {data} from './components/data/items';
import  GroupButton  from './components/GroupButton/GroupButton';


class App extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      itemsInCart: [

      ]
    }
  }





  addToCart = (elId, elName) => {
    const cart = this.state;
    const a = cart.itemsInCart.map(function(el){
      return (el.id);
    })
    console.log(a)

    if (a.indexOf(elId) === -1) {
    cart.itemsInCart.push({
      id: elId, name: elName, num: 1
    })
  } else {
    cart.itemsInCart[a.indexOf(elId)].num += 1;
  }
      
    
      console.log(cart.itemsInCart);
      console.log(this.state);
       this.setState({ 'itemsInCart' : this.state.itemsInCart});
  }


  nums = (numOfel) => {
    return numOfel === 1 ? ' штука' : 
    (numOfel > 1 && numOfel < 5) ? ' штуки' : 
    (numOfel >= 5 && numOfel < 20) ? ' штук' : ' штук';  
  }




  render() {
    return (
    <div>
      <GroupButton data={data} onClick={this.addToCart}/>

      <ul> 
        {this.state.itemsInCart.map(el=><li className="row" id={el.id} key={el.id}>
        <span className="col-md-4">{el.name}</span><span className="col-md-4">{el.num + this.nums(el.num)}</span></li>)}
        </ul>
      </div>
    );
  }
}

export default App;
