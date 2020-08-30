import React from "react";
import "./Picture.scss"

const Picture = props => {
    return (
        <div className="Picture">
            <img
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}/>
        </div>
    )
}

export default Picture
