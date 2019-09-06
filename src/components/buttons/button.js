import React from 'react';
import './button.css';



// button component //
// ----------------------------------------- //
class Button extends React.Component {

    constructor(props) {
        super(props);
      }

    
  
    render() { 
        const {btnText, btnLink, btnClass} = this.props;
        return (

            <button className={`btn ${btnClass}`}>{btnText}</button>
            
        )
    }
}

export default Button;