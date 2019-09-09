import React from 'react';
import './controls.css';
import Button from '../buttons/button';




// controls component //
// ----------------------------------------- //

class Controls extends React.Component {


  
    render() { 

        return (
  
           <div className="controls">
               <Button btnClass={'btn--default'} onClick={this.props.addNewProfileBtn}>Add New</Button>
               <Button btnClass={'btn--red'} onClick={(e) => this.props.removeAllBtn(e)}>Remove All</Button>
           </div>
    
        )
    }
}

export default Controls;

