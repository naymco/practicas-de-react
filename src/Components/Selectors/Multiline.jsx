import React from "react";

// Material ui
import TextField from "@material-ui/core/TextField";


const Multiline = ({variant, label, rows, id, className}) => {

    return (
        <TextField className={className}
                   variant={variant}
                   label={label}
                   rows={rows}
                   multiline
                   id={id}
        />
    )
}

export default Multiline;