import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SingIn from './SingIn';
import {Icon} from "@material-ui/core";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Distribuidora de Arcor Villa Mercedes © 1991 - ' + (new Date().getFullYear())}
      <br/>
      <Link color="inherit" target= {'_blank'} href="https://www.instagram.com/salondeventasarcor.vm/">
        <i className={'fab fa-instagram'} ></i> Instagram
      </Link>
      <br/>
      <Link color="inherit" target= {'_blank'} href="https://www.facebook.com/arcorcenter.vm/">
        <i className={'fab fa-facebook'} ></i> Facebook
      </Link>    
    </Typography>
  );
}// esta funcion deberia ir a un componente foot

function Loggin(){
  return (<SingIn/>);
}





class Album extends Component {
  constructor(props){
    super(props);
    this.products = [
        { id : 1,
          name: 'product 1'
        },{ id : 2,
          name: 'product 2'
        },{ id : 3,
          name: 'product 3'}
        ];

    this.classes =makeStyles(theme => ({
      icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    }));
  }
  render(){
    return (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <CameraIcon className={this.classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Aca deberia poner algo
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <div className={this.classes.heroContent}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Bienvenidos
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Distribuidora de Arcor
                  Villa Mercedes, San Luis.
                </Typography>
                <div className={this.classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button onClick="Loggin()" variant="contained" color="primary">
                        Iniciar Session
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Estoy registrado
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={this.classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {this.products.map(product => (

                    <Grid item key={product} xs={12} sm={6} md={4}>
                      <Card className={this.classes.card}>
                        <CardMedia
                            className={this.classes.cardMedia}
                            image={'http://api.localdistri.com/files/products/'+ product.id +'/default.jpg'}
                            title="Image title"
                        />
                        <CardContent className={this.classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            ProductName
                          </Typography>
                          <Typography>
                            DescriptionProductName
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            View
                          </Button>
                          <Button size="small" color="primary">
                            Edit
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          {/* Footer */}
          <footer className={this.classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Redes Sociales
            </Typography>

            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Visitanos en nuestras redes:
            </Typography>
            <Copyright />
          </footer>
          {/* End footer */}
        </React.Fragment>
    );
  }
}
export default Album;
