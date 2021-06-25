import React from 'react';
import Card from "./Card"

function CardList(props) {
    return (<div>
        {props.array.map((eachCat) => <Card key={eachCat.id} name={eachCat.name} username={eachCat.username} email={eachCat.email} />)}
    </div>
    );
}

export default CardList