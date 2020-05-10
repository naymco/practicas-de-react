import React from "react";

// Custom variables
import {_title, _subtitle} from "../data/data.labels"

// Selectors
import Input from "./Selectors/Input";

// Components
import Editor from "./Editor";

// Material ui
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '98%',

        },
    },
}));


const ArticlesForm = () => {
    const classes = useStyles();

    return (
        <form className={classes.root}>
            <h3>Crear altículos</h3>
            <Input label={_title}/>
            <Input label={_subtitle}/>
            <Editor/>
        </form>
    )
}

export default ArticlesForm;