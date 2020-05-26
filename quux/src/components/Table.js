import React from 'react'
import {connect} from 'react-redux'

import OrderTime from './OrderTime'

class Table extends React.Component{

    finishOrder(){
        this.props.dispatch({type: 'finish', payload: {index: this.props.index, tableName: this.props.name, orders: this.props.orders, totalPrice: this.props.totalPrice}})
    }

    render(){
        return(
            <div>
                <div>{this.props.name} {this.props.totalPrice} <OrderTime startTime={this.props.times[0]}/></div>
                <div>
                    {this.props.orders.map((order, index) => {
                        return(
                            <table>
                                <tr>
                                    <td>
                                        <ul>
                                        {order.map(dish => <li> {dish.pieces} x {dish.dishName} </li>)} 
                                        </ul>
                                    </td>
                                    <td> <OrderTime startTime={this.props.times[index]}/> </td>
                                    <td> <input type='checkbox'></input> </td>
                                </tr>
                            </table>
                        )
                    })}
                </div>
                <button onClick={() => this.finishOrder()}>Finished</button>
            </div>
        )
    }
}

export default connect(null , null)(Table)
