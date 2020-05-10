import React, {Fragment} from "react";

// Components


// Material ui
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import ArticlesForm from "./ArticlesForm";
import ShowArticles from "./ShowArticles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1)
    },
    panel: {
        background: "#f9f9f9",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.55)",
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        position: "absolute",
        top: "5%",
        left: "10%"
    },
    root: {
        background: "#f9f9f9",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.55)",
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        position: "absolute",
        top: "5%",
        left: "35%"
    },
    image: {
        width: "50%",
        margin: theme.spacing(2)
    }
}));

const Menu = ({onClick, show, getArticles, get, articles}) => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <MenuList>
                    <MenuItem onClick={getArticles}>Ver artículos</MenuItem>
                    <MenuItem onClick={onClick}>Crear artículo</MenuItem>
                    <MenuItem>Editar artículo</MenuItem>
                    <MenuItem>Borrar artículo</MenuItem>

                </MenuList>
            </Paper>

            <Fragment>
                {show ? <div className={classes.panel}><ArticlesForm/></div> : null}
                {get ? <div className={classes.root}><ShowArticles className={classes.image} articles={articles}/>
                </div> : null}
            </Fragment>
        </div>
    )
}

export default Menu;