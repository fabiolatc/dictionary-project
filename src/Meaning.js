import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
    console.log(props)

    return (

        <div className="meaning">

<small><i>{props.meaning.partOfSpeech}</i></small>
<p><strong>Definition:</strong> {props.meaning.definitions[0].definition}</p>
<p><strong>Example:</strong> {props.meaning.definitions[0].example}</p>

<Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </div>
    )


}