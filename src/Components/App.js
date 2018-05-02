import React, { Component, Fragment } from 'react'
import '../App.css'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { products } from './Products.json'


const styles = {
  Fragment: {
    height: 500
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    fetch("../Products.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.products
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return <Fragment style={styles.Fragment}> 
            <Header />
            <Exercises 
              products = { this.state.products }
              image = {this.state.products.image}
            />
            <Footer />
          </Fragment>
  }
 }
}
export default App;
