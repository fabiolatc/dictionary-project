import React, {useState} from "react"
import './Dictionary.css';
import Results from "./Results"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Photos from "./Photos"
import { createClient } from 'pexels';





export default function Diciontary() 
{

    let [keyword, updateKeyword] = useState(null)
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

  



    function search(event) {
        event.preventDefault()
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

        let pexelsAPI= "563492ad6f91700001000001c318c45d63124bd1a41f407fbaf6eb9c"
        let pexelsUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`


        axios.get(apiUrl).then(handleResponse)
        axios.get(pexelsUrl, { headers: {"Authorization": `Bearer ${pexelsAPI}`}}).then(handlePexels)
    }

function handlePexels(response) {

    setPhotos(response.data.photos)
}

function handleResponse(response) {
    setResults(response.data[0]);
}




    function saveKeyword(event) {
        updateKeyword(event.target.value)
  
    }

return (
    
<div className="Dictionary">
    <p className="lookup">Which word do you want to look up?</p>
<form onSubmit={search}>
<input type="search" onChange={saveKeyword} className="search-bar"  ></input>
<button type="submit" className="search-button" ><FontAwesomeIcon icon={faSearch} color="#7b83ad" /></button>

</form>

<Results results={results}/>

<Photos photos={photos}/>


</div>

);

}