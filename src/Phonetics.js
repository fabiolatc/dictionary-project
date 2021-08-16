import React from "react";


export default function Phonetics(props) {

    console.log(props.phonetics)

if (props.phonetics) { return(

   
<div className="phonetics">
<a href={props.phonetics.audio} target="_blank">Listen</a><p>{props.phonetics.text}</p>

</div>
)

 }

else return null

}