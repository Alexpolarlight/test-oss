import React, { Component, Fragment } from 'react'
import { products } from './Products.json'
import { Grid, Paper, Typography, Button, Chip } from 'material-ui'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import DoneIcon from '@material-ui/icons/Done'
import { withStyles } from 'material-ui/styles';

const styles = {
    Paper: {
        padding: 20, 
        marginTop: 10, 
        marginBottom: 10,
        height: 400,
        overflowY: "auto"
    },
    Card: {
      margin: 10,
      maxWidth: 345,
      width: 300
    },
    CardMedia: {
      height: 0,
      paddingTop: '56.25%'
    },
    Description: {
      height: 10,
      overflowY: "auto"
    }
}

class Fetch extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        fetch('./Products.json')
        .then(results => {
            return results.json();
        }).then(data => {
            let products = data.results.map((name, image, description, price) => {
                return(
                    <Grid container spacing={8}>
                        <Grid item sm={9}>
                            <Paper style={styles.Paper}>
                                <Card style={styles.Card} className='Card' >
                                    <CardMedia style={styles.CardMedia}
                                        image={image.results}
                                        title={name.results}
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {name.results}
                                        </Typography>
                                        <Typography component="p" className='Description'>
                                            {description.results}
                                        </Typography>
                                        <Typography component="p" variant="subheading">
                                            {price.results}
                                        </Typography>
                                        </CardContent>
                                    </Card>
                            </Paper>
                        </Grid>
                        <Grid item sm={3}>
                            <Paper style={styles.Paper}>
                                Valar Dohaeris!
                            </Paper>
                        </Grid>
                    </Grid>
                )
            })
            this.setState({products: products})
            console.log('state', this.state.products)
        })
    }
    render(){
        return (
            <Fragment>
                {this.state.products}
            </Fragment>
        )
    }
}
export default Fetch;

