import React from "react";

const Data = (props) => {
    return (
      <>
        <h3>{props.title}</h3>
        <div style={{padding:"20px"}}>{props.text}</div>
      </>
    );
  };
   
  export default Data;