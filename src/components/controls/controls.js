import React from 'react';
import './controls.css';
import Button from '../buttons/button';




// controls component //
// ----------------------------------------- //

class Controls extends React.Component {


  
    render() { 

        return (
  
           <div className="controls">
               <Button btnClass={'btn--default'} btnText={'Add New'} />
               <button className='btn btn--red' onClick={(e) => this.props.removeAllBtn(e)}>remove all</button>
           </div>

       
            
        )
    }
}

export default Controls;

