import React, { Component } from 'react';
class Total extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }




total = (nums) => {
    console.log(nums);
    let a = 0;
    for(let k in nums){ 
        
        console.log(nums[k]);
        a = a + (nums[k].price * nums[k].num);
    }
    return a;

}
render() {
    return (
        <div className="row">
        <span className="col-md-6">{'Итого: '}</span>
        <span className="col-md-6">{this.total(this.props.dataNum) + ' руб.'}</span>  
        
        </div>
    )
}
}

export default Total;
