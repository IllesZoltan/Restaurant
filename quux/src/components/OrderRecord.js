import React, {Component} from 'react';
import '../orderRec.css';
import { connect } from "react-redux";



 class OrderRecord extends Component{
     constructor(props){
         super(props)

         this.state = {
             selectedTable: 0
         }
     }

     currentTable(e){
        this.setState({selectedTable: e.target.selectedIndex})
     }


    submitDish(totalPrice){
            this.props.dispatch({type: 'add', payload: {selectedTable: this.state.selectedTable, dishesAdded: this.props.dishesAdded, totalPrice, startTime: new Date()}})
    }

    render(){ 

        const totalPrice = this.props.dishesAdded.reduce((priceSoFar,currDish)=>{return priceSoFar+(currDish.price*currDish.pieces)},0)


        return(
            <div className="container">
                <div>
                    <select onChange={(e)=>{this.currentTable(e)}}>
                        {this.props.tables.map(table => 
                        <option>
                            {table.name}
                        </option>
                        )}

                    </select>
                   

                </div>
                <table className="display">
                    <tbody>
               { this.props.dishesAdded.map(dish => <tr key={dish.dishName} className="added-dish">
                    <td>{dish.dishName}</td>
                    <td>{dish.pieces}</td>
                    <td>{dish.price}</td>
                </tr> )} 

                <tr className="total">
                    <td>Total</td>
                    <td/>
                    <td>{totalPrice}</td>
                </tr>
                </tbody>
                </table>
                <div className="comments">

                </div>
                <div className="buttons">
                    <button onClick={() => this.props.modalHalndel()}>Discard</button>
                    <button onClick={() => this.submitDish(totalPrice)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default connect(null , null)(OrderRecord)