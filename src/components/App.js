import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: 0,
    top: 0,
  });
  
   
function move(left,top){
  setBallPosition((state)=>{
    // console.log("here we are in setBallPosition",state.left,ballPosition.left);
    ballPosition.left =state.left +left;
    ballPosition.top = state.top +top;
    return ballPosition;
  }
  );


  setX({
    x : x.x + left,
  });

  setY({
    y : y.y + top,
  });

}
useEffect(()=>{
  document.addEventListener("keydown",(event)=>{
      // alert(event.keyCode)
      // console.log(ballPosition,x,y);
      switch(event.keyCode){
        case 37: move(-5,0);
        break;
        case 38: move(0,-5);
        break;
        case 39: move(5,0);
        break;
        case 40: move(0,5);
        break;
      };
      // console.log(ballPosition,x,y);
  });
},[]);


  // const reset = () => {};
  const renderChoice = () => {

    if (renderBall.renderBall === true)
    {
      return <div className = "ball" style ={{
        position:"absolute",
        left: ballPosition.left+"px",
        top:ballPosition.top+"px",
      }}></div>
    }
    else{
      return <button className = "start" onClick = {()=>{
        
        setRenderBall({
          renderBall : true,
        });
      }}>Start</button>
    }
  };


  const reset = ()=>{
    setBallPosition(()=>{
      ballPosition.left = 0;
      ballPosition.top = 0;
      return ballPosition;

    });
    setRenderBall({
      renderBall : false,
    });
    setX({
      x :0,
    });
    setY({
      y :0,
    });

  }

  return (
    <div className="playground">
      {renderChoice()}
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
