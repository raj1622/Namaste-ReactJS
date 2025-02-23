import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"DummyName",
                location:"DefaultLocation",
            }
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/raj1622");
        const json=await data.json();

        this.setState({
            userInfo:json,
        })
        console.log(json);
    }

    render(){
        const{name, location, avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: Delhi</h3>
                <h3>Contact: @raj1622</h3>
            </div>
        )
    }
}

export default UserClass;