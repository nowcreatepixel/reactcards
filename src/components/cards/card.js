import React from 'react';
import './card.css';
import Button from '../buttons/button';



// card component as a class //
// ----------------------------------------- //

class Card extends React.Component {

    constructor(props) { 
    super(props);
    } 


    // LIFECYCLE METHODS
    componentDidMount() {
      console.log('component did mount');
    }

    componentWillUnmount() {
     console.log('component will unmount');
    }

    viewProfile () {
     alert('view profile');
    }


    
    

    render() { 

        return ( 

             this.props.profiles.map( (cardItem, index) => {
          
                return <div key={cardItem.id} className="card card--sm">
                <div className="card__content">
                <div className="card__image" style={{backgroundImage:`url(${cardItem.photo})`}}></div>
                <div className="card__text">
                <h3>{cardItem.fullname}</h3>
                <p>{cardItem.infotext}</p>
                <p><strong>ID: {this.props.profiles[index].id}</strong></p>
                <Button onClick={(e) => this.props.removeCardBtn(e, (index))} btnClass={'btn--red'}>Remove</Button>
                <Button onClick={this.viewProfile} btnClass={'btn--default'}>View Profile</Button>
                </div>
                </div>
                </div>           
        
            }) 
 
        )
    }
}



export default Card;


