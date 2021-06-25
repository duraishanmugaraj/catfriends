import React from 'react';


function Card(props) {
    return (<div style={{ backgroundColor: "rgba(255,255,255,0.4)" }} className="tc dib br3 pa3 ma2 mt5 grow bw2 shadow-5">
        <img alt="cat" src={`https://robohash.org/set_set4/${props.username}?size=200x200`}></img>
        <h2>{props.name}</h2>
        <hr className="mw3 bb bw1 b--black-50"></hr>
        <p>{props.username}</p>
        <p>{props.email}</p>
    </div>
    );
}

export default Card