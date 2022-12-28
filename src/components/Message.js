import React, { Component } from "react";

class Message extends Component{

    


    constructor(){
        super()
        this.state={
            message:'hey there'
        }
    }
    
    
     change(){
        this.setState({
            message:'You are going great'
        })
    }
    

    render(){
        const {name,heroname}=this.props
        return(
            <>
            <h1>
                {this.state.message}
                wwelcome {name} aka {heroname}
            </h1>
            <button onClick={()=>this.change()}>click me</button>
            
            </>
        )
    }
}

export default Message