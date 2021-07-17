import React from "react"

export default function Meaning(props) {
    console.log(props.meaning)

    return (

        <div className="meaning">

<small>{props.meaning.partOfSpeech}</small>
<p>{props.meaning.definitions[0].definition}</p>
<p>{props.meaning.definitions[0].example}</p>

        </div>
    )


}