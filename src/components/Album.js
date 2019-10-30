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

import Container from '@material-ui/core/Container';

import MyFooter from "./MyFooter";
import * as Conf from "../cfg/config";


class Album extends Component {
    constructor(props) {
        super(props);
        console.log(props.products);
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon className={Conf.classes.icon}/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Aca deberia poner algo
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div className={Conf.classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Bienvenidos
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Distribuidora de Arcor
                                Villa Mercedes, San Luis.
                            </Typography>
                            <div className={Conf.classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
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
                    <Container className={Conf.classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {this.props.products.map(products => (

                                <Grid item key={products.id} xs={12} sm={6} md={4}>
                                    <Card className={Conf.classes.card}>
                                        <CardMedia
                                            component="img"
                                            className={Conf.classes.cardMedia}
                                            image={'http://api.localdistri.com/files/products/' + products.id + '/default.jpg'} // aca deberia cambiar la forma de traer la imagen
                                            title="Image title"
                                        />
                                        <CardContent className={Conf.classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {products.id}
                                            </Typography>
                                            <Typography>
                                                {products.name}
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
                <MyFooter/>
            </React.Fragment>
        );
    }
}

export default Album;
