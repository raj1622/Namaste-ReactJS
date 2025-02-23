import {useState} from "react";


const User=(props)=>{
    const[count, setCount]=useState(0);
    const[count2, setCount2]=useState(1);
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h1>Count:= {count}</h1>
            <h1>Count:= {count2}</h1>
            <h3>Location: Dehradoon</h3>
            <h3>Contact: @akshaymarch7</h3>
        </div>
    )
}

export default User;