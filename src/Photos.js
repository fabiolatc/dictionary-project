import React from "react"
import './Photos.css';

export default function Photos(props) {
    console.log(props)
    if (props.photos) { 
        
        
        return (
        
        <div className="container">
<div className="row">
        <div className="photos">
            {props.photos.map(function(photo, index) {return (
            
            
            <img src={photo.src.landscape} className="img-fluid" ></img>
            
            
            
            )})}

        </div>
        </div>
        </div>
        )} 
    
    
    
    else {
        return null
    }
    
}