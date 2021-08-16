import React from "react";


export default function Phonetics(props) {



if (props.phonetics) { return(

   
<div className="phonetics">
<a href={props.phonetics.audio} target="_blank" className="phonetics-audio">Listen</a> 
<p className="phonetics-text">  [{props.phonetics.text}]</p>

</div>
)

 }

else return null

}