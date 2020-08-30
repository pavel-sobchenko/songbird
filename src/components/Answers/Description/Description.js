import React from "react";
import "./Description.scss"
import Picture from "../../UI/Picture/Picture";
import Player from "../../UI/Player/Player";

const Description = props => {
    const abc = props.selectedItem
    return (
        <div className="Description col-md-6">
            <div className="BirdCard">
             { !props.selectedItem ?
                <div>
                    <p>Listen to the player</p>
                    <p> Select a bird from the list</p>
                </div>
            :
                <React.Fragment>
                <div className="Title">
                    <Picture
                        src={props.selectedItem.image}
                        alt={props.selectedItem.name}
                        width={100}
                        height={100}
                    />
                    <div className="ShortDescription">
                        <div>{props.selectedItem.name}</div>
                        <div>{props.selectedItem.species}</div>
                    </div>
                </div>
                <div>
                    <div>{props.selectedItem.description}</div>
                    <Player audio={props.selectedItem.audio}/>
                </div>
                </React.Fragment>
            }
            </div>
        </div>
    )
}

export default Description
