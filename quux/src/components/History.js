import React from "react";
import {connect} from 'react-redux'
import HistoryElement from './HistoryElement'

const mapStateToProps = state => {
    const finishedOrders = state.finishedOrders
    return { finishedOrders }
}

 class History extends React.Component{
    render(){
        return(
            <div>
            {
            this.props.finishedOrders.map((finishedOrder, index) => {
                return <HistoryElement key={index} {...finishedOrder}/>
            })
            }
        </div>
        )
    
    }
}


export default connect(mapStateToProps)(History);