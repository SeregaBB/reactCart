import React, { Component } from 'react';
import {Grid, Row, Button} from 'react-bootstrap';

class Cart extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    nums = (numOfel) => {
        return numOfel === 1 ? ' штука' : 
        (numOfel > 1 && numOfel < 5) ? ' штуки' : 
        (numOfel >= 5 && numOfel < 20) ? ' штук' : ' штук';  
      }

    render() {
        return(
            <ul> 
            {this.props.items.map(el=><li className="row" id={el.id} key={el.id}>
            <span className="col-md-2"><img src={require('../imgs/Ph03nyx-Super-Mario-Mushroom-Super.ico')} width="40"/>{' ' + el.name}</span>
            <span className="col-md-2">{el.num + this.nums(el.num)}</span>
            <span className="col-md-2">{el.price + ' руб.'}</span>
            <span className="col-md-2 minus" onClick={e => this.props.onClick(e.target.className, el)}>{'-'}</span>
            <span className="col-md-2 remove" onClick={e => this.props.onClick(e.target.className, el)}>{'X'}</span>
            <br/>
            <hr/>
            </li>)}
            </ul>
        )
    }
}

export default Cart;