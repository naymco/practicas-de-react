import React from "react";

// Material ui icons
import MenuIcon from '@material-ui/icons/Menu';

const Icon =({ fontSize, onClick})=>{
    return(
        <MenuIcon fontSize={fontSize} onClick={onClick}/>
    )
}

export default Icon;