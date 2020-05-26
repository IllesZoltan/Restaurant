import React from "react";

export default class HistoryElement extends React.Component{
    render(){

        
        
        return(
            <div>
                <div>{this.props.tableName} {this.props.totalPrice} Total elapsed time</div>
                <div>
                    {this.props.orders.map(order => {
                        return(
                            <table>
                                <tr>
                                    <td>
                                        <ul>
                                        {order.map(dish => <li> {dish.pieces} x {dish.dishName} </li>)} 
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        )
                    })}
                </div>
            </div>
        )
    
    }
}