import React from "react";
import "./Header.scss"
import Categories from "./Categories/Categories";
import Logo from "./Logo/Logo";
import Score from "./Score/Score";

const Header = props => (
    <div className="Header">
       <div className="Header top">
           <Logo/>
           <Score totalScore={props.totalScore}/>
       </div>
       <Categories
           categories={props.categories}
           active={props.active}
       />
    </div>
)

export default Header
