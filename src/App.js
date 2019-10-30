import React, {Component} from 'react';
import Axios from "axios";
import Album from "./components/Album";

class App extends Component {
    state = {
        products: []
    };


    componentDidMount() {

// Make a request for a user with a given ID
        Axios.get('http://api.localdistri.com/api/products')
            .then(function (response) {
                // handle success
                console.log('Respuesta',response);
                let products = response.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }

    constructor(props) {
        super(props);
    }

    render() {
        return (<Album products={this.state.products}/>)
    }
}

export default App;
