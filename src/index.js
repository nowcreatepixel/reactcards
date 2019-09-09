import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import './index.css';
import Card from './components/cards/card';
import Controls from './components/controls/controls';
import Addnew from './components/addnew/addnew';



// dummy data source //
// ----------------------------------------- //
import data from './data.json';
import { brotliDecompressSync } from 'zlib';



class App extends React.Component {

     // CONSTRUCTOR 
    // --------------------------------------------------------- //

    constructor(props) {
        super(props);

         // SET THE STATE
        // spread dummy data source into the profiles array
        this.state = {
        profiles: [...data]
         };

           // BINDINGS
        // This binding is necessary to make `this` work in the callback
         this.removeAll = this.removeAll.bind(this);
         this.removeCard = this.removeCard.bind(this);
    }


    // METHODS
    // --------------------------------------------------------- //


     // Method to remove all profile cards
      removeAll(e) {
        e.preventDefault();
        console.log('remove all');
        this.setState({
            profiles: [] 
            }); 
      }



       
    // Method to remove a chosen card
       removeCard(e, index) {

        e.preventDefault();

        // Filter over profiles array to remove the chosen profile
        const newProfiles = this.state.profiles.filter(profile => {
        return profile !== this.state.profiles[index];
        });

        // Update state by applying the new array
        this.setState({
        profiles: [...newProfiles] 
        });

       }


    // Method to add a new profile
       addNew(e) {
           e.preventDefault();
           const addNewContainer = document.getElementById('add');
           addNewContainer.style.setProperty('display', 'block');
       }


       
    


    // RENDER
    // --------------------------------------------------------- //

    render() {

        const profileAmount = this.state.profiles.length;
      
        return (
            <div>

             <div className="titlearea"><h3>
             {profileAmount !== 1 ? `there are ${profileAmount} members` : `there is ${profileAmount} member`}
             </h3>
             </div>

            <section className="grid">
            <Card removeCardBtn={this.removeCard} removeAllBtn={this.removeAll} profiles={this.state.profiles} />
            </section>     
            <Controls addNewProfileBtn={this.addNew} removeAllBtn={this.removeAll}/> 

            <Addnew /> 

            </div>
        );
    }
}



function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();




