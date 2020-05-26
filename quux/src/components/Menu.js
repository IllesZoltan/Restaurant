import React from "react";
import Dish from './Dish.js'
import OrderRecord from './OrderRecord.js'

import { connect } from "react-redux";

 const mapStateToProps = state => {
    const { dishes } = state
    const {tables} = state
    return { dishes, tables }
}

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.hideModal=this.hideModal.bind(this);
        this.addDish= this.addDish.bind(this)
        this.state ={
            modalVisibility: false,
            dishesAdded: []
        }
    }

    addDish(dish){
        const dishIndex = this.state.dishesAdded.findIndex(dishInfo => dishInfo.dishName === dish.dishName)
    
        if(dishIndex === -1){
            const dishInfo = {dishName: dish.dishName, price: dish.price, pieces: 1}
            this.setState({modalVisibility: true,
                dishesAdded:[...this.state.dishesAdded,dishInfo]})
        } else {
            const newState = JSON.parse(JSON.stringify(this.state));
            newState.dishesAdded[dishIndex].pieces = newState.dishesAdded[dishIndex].pieces + 1
            newState.modalVisibility = true
            this.setState(newState);
        }
    }

    hideModal(){
        this.setState({
            modalVisibility: false,
            dishesAdded: []
        })
    }

    render(){
        return(<div>
            <h1>Szöveg</h1>
            {this.props.dishes.map(dish => <Dish orderRecord={()=>this.addDish(dish)} dishObj={dish}/>)}
            {(this.state.modalVisibility)&&<OrderRecord dishesAdded={this.state.dishesAdded} tables={this.props.tables} modalHalndel={this.hideModal}/>}
        </div>)
    }
}

export default connect(mapStateToProps)(Menu);
