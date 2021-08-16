import React from "react";
import Synonyms from "./Synonyms"
import './App.css';

export default function Meaning(props) {
    console.log(props)

    return (

        <div className="meaning">

<small><i>{props.meaning.partOfSpeech}</i></small>
<p ><strong>Definition:</strong><span className="definition"> {props.meaning.definitions[0].definition}</span></p>
<p classNam="example"><strong>Example:</strong> {props.meaning.definitions[0].example}</p>

<Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </div>
    )


}