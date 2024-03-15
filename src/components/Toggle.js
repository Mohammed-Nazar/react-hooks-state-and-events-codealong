import React, { useState } from "react";

function Toggle() {
  const [isOn , setIsOn] = useState(false)
  const color = isOn ? "red" : "white";
  return <button style={{
    backgroundColor: color
  }} onClick={()=> setIsOn((prev)=> !prev)}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
