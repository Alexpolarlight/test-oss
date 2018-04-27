import React from 'react'
import logo from '../../Images/logo.png'
import { AppBar, Toolbar, Typography} from 'material-ui'

const styles = {
  AppBar: {
    backgroundColor: '#212121',
    height: 100
  },
  Logomotto: {
    margin: 10
  }
}

export default props =>

        <AppBar style={styles.AppBar} position='static'>
          <Toolbar>
            <Typography variant='button' color='inherit' gutterBottom style={styles.Logomotto}>
              <img src={logo} className="App-logo" alt="logo" />
              <Typography variant='button' color='inherit' className="App-title">MAKING LIFE MULTIPLANETARY</Typography>
            </Typography>
          </Toolbar>
        </AppBar>
     