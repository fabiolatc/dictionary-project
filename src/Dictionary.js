import React, {useState} from "react"
import './Dictionary.css';
import axios from 'axios';

export default function Diciontary() 
{

    let [keyword, updateKeyword] = useState(null)
    function search(event) {
        event.preventDefault()
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
    }

function handleResponse(response) {console.log(response.data)}




    function saveKeyword(event) {
        updateKeyword(event.target.value)
        console.log(keyword)
    }

return (
    
<div className="Dictionary">
<form onSubmit={search}>
<input type="serach" onChange={saveKeyword}></input>

</form>





</div>

);

}