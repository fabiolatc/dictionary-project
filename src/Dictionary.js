import React, {useState} from "react"
import './Dictionary.css';
import Results from "./Results"
import axios from 'axios';

export default function Diciontary() 
{

    let [keyword, updateKeyword] = useState(null)
    let [results, setResults] = useState(null);


    function search(event) {
        event.preventDefault()
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
    }

function handleResponse(response) {
    setResults(response.data[0]);
}




    function saveKeyword(event) {
        updateKeyword(event.target.value)
        console.log(keyword)
    }

return (
    
<div className="Dictionary">
<form onSubmit={search}>
<input type="search" onChange={saveKeyword}></input>

</form>

<Results results={results}/>




</div>

);

}