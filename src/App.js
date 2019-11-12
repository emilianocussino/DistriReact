//Dependencies
import React, {Component} from 'react';

import Axios from "axios";
import Album from "./components/Album";



//Routes




class App extends Component {

    state = {
        products: []
    };


    componentDidMount() {
        // Make a request for a user with a given ID

        Axios.get('http://api.localdistri.com/api/products?limit=10')
            .then((response) => {
                // handle success
                console.log('Respuesta', response);
                let products = response.data.data;
                this.setState({products: products});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }

    render() {
        return (<Album products={this.state.products}/>)
    }
}


export default App;
