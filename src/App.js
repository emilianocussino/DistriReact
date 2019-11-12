//Dependencies
import React, {Component} from 'react';
import Route from "react-router-dom/es/Route";
import {Router} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {Switch} from "@material-ui/core";
import {render} from 'react-dom'
import PropTypes from 'prop-types';
//Routes
import AppRoutes from "./routes";
import {AxiosInstance as Axios} from "axios";

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
    };

    render(

<Router>
<AppRoutes/>
</Router>,

)
    ;


    export default App;
