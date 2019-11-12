import React, {Component} from 'react';
import Album from "./components/Album";
import Route from "react-router-dom/es/Route";
import ProductDescription from "./components/ProductDescription";
import {Router} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {Switch} from "@material-ui/core";

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
    render(){
        const {products} = this.state
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product/:id">Aboutproduct</Link>
                        </li>
                    </ul>
                            <Switch>
                                <Route path="/" component={Album}/>
                                <Route path="/product/:id" component={ProductDescription}/>
                            </Switch>
                </div>
            </Router>
    );
    }

    function Home() {
        return <h2>Home</h2>
    }
    function Aboutproduct() {
        return <h2>Aboutproduct</h2>
    }

    export default App;
