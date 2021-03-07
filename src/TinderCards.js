import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setState] =useState([
        {
            name: "Elon Musk",
            url:"https://image.cnbcfm.com/api/v1/image/106806377-1607090600215-gettyimages-1229893101-AFP_8WA6E2.jpeg?v=1613170197&w=1400&h=950",
            
        },
        {
            name: "Beyonce Knowles-Carter",
            url:"https://pyxis.nymag.com/v1/imgs/6c0/570/056961772f9239c7ad26e784b020e410ae-beyonce.rsquare.w330.jpg",
        }

    ]);
    const swipe=(dir, nameToDelete) => {
        console.log("removing: "+ nameToDelete);

    };
    const outOfFrame=(name)=> {
        console.log(name+ " left the screen!");
    };

    return (
        <div className="TinderCards">
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swipe(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>

                    </div>

                </TinderCard>
            ))}

            </div>
            
            
        </div>
    );
}

export default TinderCards
