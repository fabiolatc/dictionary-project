import Meaning from "./Meaning"
import Synonyms from "./Synonyms"
export default function Results(props){

    if (props.results) {
        return (
          <div className="Results">
            <br></br>
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function (meaning, index) {
              return (
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