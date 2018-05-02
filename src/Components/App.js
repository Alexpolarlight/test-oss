import React, { Component, Fragment } from 'react'
import '../App.css'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import Fetch from './Fetch';



const styles = {
  Fragment: {
    height: 500
  }
}

class App extends Component {
  render() {    
    return <Fragment style={styles.Fragment}> 
            <Header />
            <Fetch  />
            <Footer />
          </Fragment>
    };
 }

export default App;
