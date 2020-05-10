import React from "react";

// Components
import Menu from '../Components/Menu'
// import ArticlesForm from "../Components/ArticlesForm";
// import ShowArticles from "../Components/ShowArticles";

//Selectors
import Icon from "../Components/Selectors/Icon";

// Material ui
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
}));


const Articles = ({ articles }) => {
    const classes = useStyles();
    const [state, setState] = React.useState(false)
    const [ show, setShow ] = React.useState(false)
    const [ get, setGet ] = React.useState(false)

    const hadleClick = () => {
        setState(!state)
        console.log(state)
    }

    const showMenu =()=>{
        setShow(!show)
    }

    const getArticles = ()=>{
        setGet(!get)
    }

    return (
        <div className={classes.root}>
            <Icon onClick={hadleClick} fontSize="small"/>
            <div>
                {state ? <Menu  articles={articles} onClick={showMenu} show={show} get={get} getArticles={getArticles}/> : null}
            </div>

        </div>
    )
}

export default Articles;