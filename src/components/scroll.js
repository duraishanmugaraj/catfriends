import React from "react"

function Scroll(props){
    return (
        <div className = "mt4" style={{overflow:"scroll" , border : "3px solid rgba(0,0,0,0.5)",height:"800px"}}>
            {props.children}
        </div>
    );
}

export default Scroll