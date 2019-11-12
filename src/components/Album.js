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
import Link from "@material-ui/core/Link";


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
                    <Toolbar color ="#2e6da4">
                        <CameraIcon className={Conf.classes.icon}/>
                        <Typography variant="h6" color="inherit" noWrap>
                            HELLO
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
                                            image="https://geant.vteximg.com.br/arquivos/ids/232179-1000-1000/629985.jpg?v=636947536445100000 "  // ver metodo para traer imagenes
                                            title="Image title"
                                        />
                                        <CardContent className={Conf.classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {products.name}
                                            </Typography>
                                            <Typography>
                                                {products.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link href= "http://localhost:4200/" cl>
                                            Link
                                            </Link>
                                            <Button size="small" color="primary">
                                                 Consultar
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
