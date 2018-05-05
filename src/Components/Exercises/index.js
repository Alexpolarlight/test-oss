import React from 'react'
import { Grid, Paper, Typography, Button, Fragment, Chip } from 'material-ui'
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

export default ({ products, image }) => {
  <Grid container spacing={8}>
      <Grid item sm={9}>
        <Paper style={styles.Paper}>
          {products.map(
            ({image, name, description, price}) => {
                <Card style={styles.Card} className='Card' >
                    <CardMedia style={styles.CardMedia}
                      image={image}
                      title={name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        {name}
                      </Typography>
                      <Typography component="p" className='Description'>
                        {description}
                      </Typography>
                      <Typography component="p" variant="subheading">
                        {price}
                      </Typography>
                    </CardContent>
                </Card>
            }
          )}
        </Paper>
      </Grid>
      <Grid item sm={3}>
        <Paper style={styles.Paper}>
              Valar Dohaeris!
        </Paper>
      </Grid>
  </Grid>
}