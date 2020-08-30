import React from "react";
import "./Categories.scss"

const Categories = props => (
    <div className="Categories">
        {props.categories.map((category, index) => {
            const cls = ["Categories", "item"]
            if(props.active === index) {
                cls.push("active")
            }
            return (
                <div key={index} className={cls.join(" ")}>
                    {category}
                </div>
            )
        })}
    </div>
)

export default Categories
