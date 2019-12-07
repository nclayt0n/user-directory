import React from 'react';
const uuidv4=require('uuid/v4')

export default function ValidationError(props) {
  if(props.errorMessage) {
    return (
      <div  key={uuidv4()} className="errorContainer" id="error" >
       {props.errorMessage}
      </div>
    );
  }
  return <></>
}