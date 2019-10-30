import Typography from "@material-ui/core/Typography";
import React, {Component} from "react";
import * as Conf from "../cfg/config";
import Link from "@material-ui/core/Link";


class MyFooter extends Component {
    render() {
        return (
            <footer className={Conf.classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Redes Sociales
                </Typography>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Visitanos en nuestras redes:
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Distribuidora de Arcor Villa Mercedes © 1991 - ' + (new Date().getFullYear())}
                    <br/>
                    <Link color="inherit" target={'_blank'} href="https://www.instagram.com/salondeventasarcor.vm/">
                        <i className={'fab fa-instagram'}></i> Instagram
                    </Link>
                    <br/>
                    <Link color="inherit" target={'_blank'} href="https://www.facebook.com/arcorcenter.vm/">
                        <i className={'fab fa-facebook'}></i> Facebook
                    </Link>
                </Typography>
            </footer>
        );
    }
}

MyFooter.propTypes = {};

export default MyFooter;
