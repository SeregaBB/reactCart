import React, { Component } from 'react';
import {Grid, Row, Button} from 'react-bootstrap';
//import 'node_modules/bootstrap/dist/bootstrap.css';

class GroupButton extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <Grid>
                <Row>
            {this.props.data.map(el=>
            <Button bsStyle="default" id={el.id} key={el.name} 
            onClick={e => this.props.onClick(e.target.id, el.name)} className="col-md-3">
            {el.name}
            </Button>)}
                </Row>
            </Grid>
        )
    }
}

export default GroupButton;