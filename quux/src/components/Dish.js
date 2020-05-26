import React, {Component} from 'react'


export default class Dish extends Component{
    render(){
        const dishObj = this.props.dishObj
        console.log('Megjelenik')
        return(
        <div className="dish">
            <img src={dishObj.imgPath} alt="habiszti"/>
        
            <div className="dish-infos">
                <div className="dish-name">{dishObj.dishName}</div>
                <div className="dish-ingredients">
                    <ul>
                    {dishObj.ingredients.map(ing => <li>{ing}</li>)}
                    </ul>
                    </div>
            </div>

            <div className="dish-price">
                {dishObj.price}
            </div>

            <div>
                <button onClick={() => this.props.orderRecord()}>+</button>
            </div>
            
        </div>
        )
    }
}