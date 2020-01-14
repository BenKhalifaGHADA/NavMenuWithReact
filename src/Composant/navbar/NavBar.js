import React from "react";
import "./navbar.css";
export default function NavMenu(props) {
  return (
    <div className="navbar">
       <ul className="myNav">
       {props.items.map((el,i)=>(
         
          
       <li key={i} className="sub-menu">
         <a href={el.url}>{el.text}</a>
         {(el.active&&  <ul className="drop-down">
      {el.submenu.map((el,j)=>(
         <div key={j}>
<li>{el.text}</li>
         </div>
       ))}</ul>)}
       
        </li>
           
           
       ))}
</ul>
      
    </div>
  );
}