// your Bomb code here!
import React from "react"

class Bomb extends React.Component{
  constructor({initialCount}){
    super()
    this.state={
      secondsLeft:this.initialCount
    }
  }
  
  render(){
    const bombStatus=this.state.secondsLeft===0?"Boom!":`${secondsLeft}seconds left before I go boom!`
    return (
    
     {bombStatus}
      
      )
  }
  
  
  
}
export default Bomb