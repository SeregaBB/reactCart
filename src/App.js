import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Button} from 'react-bootstrap';
import {data} from './components/data/items';
import  GroupButton  from './components/GroupButton/GroupButton';
import Cart from "./components/Cart/Cart";

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

  addOrRemove = (elClassName, elemid) => {
    console.log(elClassName);
    console.log(elemid);
    const stateEl = this.state.itemsInCart.map(function(el, indelm){
      if (el.id === elemid.id) return indelm;
    })
     for (let k in stateEl){ 
      if(stateEl[k] > -1 && elClassName.indexOf('minus') > -1) {
          this.state.itemsInCart[stateEl[k]].num -= 1;
           if (this.state.itemsInCart[stateEl[k]].num === 0) {
            this.state.itemsInCart.splice(stateEl[k], 1);
          }
        } else if(stateEl[k] > -1 && elClassName.indexOf('remove') > -1) {
          this.state.itemsInCart.splice(stateEl[k], 1);
        }
     }
    // if(stateEl > -1 && elClassName.indexOf('minus') > -1) {
    //   this.state.itemsInCart[stateEl].num -= 1;
    //    if (this.state.itemsInCart[stateEl].num === 0) {
    //     this.state.itemsInCart.splice(stateEl, 1);
    //   }
    // } 

    this.setState({itemsInCart: this.state.itemsInCart});
  }

  // nums = (numOfel) => {
  //   return numOfel === 1 ? ' штука' : 
  //   (numOfel > 1 && numOfel < 5) ? ' штуки' : 
  //   (numOfel >= 5 && numOfel < 20) ? ' штук' : ' штук';  
  // }




  render() {
    return (
    <div>
      <GroupButton data={data} onClick={this.addToCart}/>
      <br/>
      <hr/>
{/* 
      <ul> 
        {this.state.itemsInCart.map(el=><li className="row" id={el.id} key={el.id}>
        <span className="col-md-4">{el.name}</span><span className="col-md-4">{el.num + this.nums(el.num)}</span></li>)}
        </ul> */}

        <Cart items={this.state.itemsInCart} onClick={this.addOrRemove}/>

      </div>
    );
  }
}

export default App;
