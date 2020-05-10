import React from "react";

// General variables
import {_content} from '../data/data.labels'

// Selectors
import Multiline from "./Selectors/Multiline";

// Material ui
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
}));

const Editor = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Multiline id="standard-multiline-flexible"
                       label={_content}
                       multiline
                       rows={4}
                       className={classes.root}
            />
        </div>
    )
}

export default Editor;