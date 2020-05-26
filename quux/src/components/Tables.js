import React from "react";
import Table from './Table.js'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    const tables = state.tables
    return { tables }
}

class Tables extends React.Component{
    render(){
        return(
            <div>
            <h1>List of Tables:</h1>
            {
            this.props.tables.map((table, index) => {
                if(table.orders.length > 0) {
                    return <Table key={index} {...table} index={index}/>
                }
            })
            }
        </div>)
    }
}

export default connect(mapStateToProps)(Tables);