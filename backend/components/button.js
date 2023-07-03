import React from "react";
import "./loginPage.css";

function Button(props) {
    return(
        <button className={"button "+props.status} >{props.identity}</button>
    );
}
export default Button;