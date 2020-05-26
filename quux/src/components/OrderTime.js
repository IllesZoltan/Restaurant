import React from 'react'
import ElapsedTime from '../services'

export default class OrderTime extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            time: ElapsedTime(this.props.startTime)
        }
    }

    componentDidMount(){
        setInterval(()=>this.setState({time: ElapsedTime(this.props.startTime)}),1000)
    }

    

    render(){
        const hours = this.state.time.getHours()-1
        const minutes = this.state.time.getMinutes()
        const seconds = this.state.time.getSeconds()
    
        return(
            <div>
              {hours}:{minutes}:{seconds}           
            </div>
        )
    }
        
}