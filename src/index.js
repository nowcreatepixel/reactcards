import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import './index.css';
import Card from './components/cards/card';
import Controls from './components/controls/controls';



// dummy data source //
// ----------------------------------------- //
import data from './data.json';



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
    


    // RENDER
    // --------------------------------------------------------- //

    render() {
      
        return (
            <div>
            <section className="grid">
            <Card removeCardBtn={this.removeCard} removeAllBtn={this.removeAll} profiles={this.state.profiles} />
            </section>     
            <Controls removeAllBtn={this.removeAll}/>  
            </div>
        );
    }
}



function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();




