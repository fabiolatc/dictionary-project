import React, {useState} from "react"
import './Dictionary.css';

export default function Diciontary() 
{

    let [keyword, updateKeyword] = useState(null)
    function search(event) {
        event.preventDefault()
        alert(`Searching for ${keyword}`)
    }

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