import React from 'react';
import './button.css';



// button component //
// ----------------------------------------- //
class Button extends React.Component {

    constructor(props) {
        super(props);
      }

    
  
    render() { 
        const {btnLink, btnClass, onClick} = this.props;
        return (
            
            <button onClick={onClick} className={`btn ${btnClass}`}>{this.props.children}</button>
            
        )
    }
}

export default Button;