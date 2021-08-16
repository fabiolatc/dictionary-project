import React from "react";
import './App.css';


export default function Synomyms(props) {
if (props.synonyms) { return(
<div className="synonyms">

   <strong>Synonyms:</strong> {props.synonyms.map(function(synonym, index){return <ul className="synonymlist"><li  key={index}>{synonym}</li></ul>})}

</div>
)

 }

else return null

}