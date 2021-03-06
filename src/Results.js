import Meaning from "./Meaning"
import './App.css';
import './Results.css';
import Phonetics from "./Phonetics"

export default function Results(props){

    if (props.results) {
        return (
          <div className="Results">
            <br></br>
            <h2 className="word">{props.results.word}</h2>

            {props.results.phonetics.map(function (phonetic, index) { return (
              
              <div key={index}>
                  <Phonetics phonetics={phonetic} />
               
                </div>
              );
            })}

<hr></hr>

            {props.results.meanings.map(function (meaning, index) { return (
              
              <div key={index}>
                  <Meaning meaning={meaning} />
               
                </div>
              );
            })}
           </div>
        );
      } else {
        return null;
      }
    }