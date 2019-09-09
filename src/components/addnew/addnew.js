import React from 'react';
import './addnew.css';
import Button from '../buttons/button';



// card component as a class //
// ----------------------------------------- //

class Addnew extends React.Component {

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

  


    

    render() { 

        return ( 
              
            <div id="add" className="modal modal--addnew">
            <h3>Add New</h3>
              
              <div>
              <form className="add-profile">
               <input type="text" name="item" placeholder="Full Name" required />
               <input type="text" name="item" placeholder="Bio" required />
               <input type="submit" value="+ Add Item" />
              </form>
              </div>
           

             

             
            </div>
         
 
        )
    }
}



export default Addnew;