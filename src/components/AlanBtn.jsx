import React, { Component } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

export default class AlanBtn extends Component{
    state={}

    constructor(props){
        super(props);
        this.state=props;
        this.alanInstance=null;
        console.log(this.state);
    }

    componentDidMount(){
        var xyz=this;
        this.alanInstance=alanBtn({
            key: "adecced4ddd5c9a53115ab5138af0c1b2e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: function (commandData) {
              if (commandData.command === "addAlarm") {
                  console.log(this);
                 xyz.props.hi(commandData.item);
              }
          },
          
            rootEl: document.getElementById("alan-btn")
            });
          
    }
    
    
    render(){
        
        return(
            <div className="alan-btn"></div>
        )
    }
}

