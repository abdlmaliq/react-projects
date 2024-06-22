import { useState } from "react";
import data from "./data";
import "./style.css";


export default function Accordion(){

    const [selected,setSelected] = useState(null);
    const [enableMulti, setEnableMulti] = useState(false);
    const [multi, setMulti] = useState([]);

    function handleSingleSelction(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
        console.log("still single" + getCurrentId + enableMulti)
    }

    function handleMultiSelction(getCurrentId){
//create an array that collects the multi
        let copyMulti = [...multi];
        const findIndexOfCurrentId = copyMulti.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);

//check if the id already exists in the array (it will give -1 when not in), add (push) if not and remove(splice) if it is
        findIndexOfCurrentId === -1 ? copyMulti.push(getCurrentId) : copyMulti.splice(findIndexOfCurrentId,1);

        setMulti(copyMulti);
        console.log(copyMulti);

    }

    return (
        <div className="wrapper">
            <button onClick={()=>!enableMulti ? setEnableMulti(true) : enableMulti}>Enable Multi-Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? //check if there is any data in data.js
                    data.map(dataItem => <div className="item">
                        <div onClick={enableMulti ? 
                            ()=>handleMultiSelction(dataItem.id) : 
                            ()=>handleSingleSelction(dataItem.id)} 
                            className="title">
                            <h3>{dataItem.question}</h3> <span>+</span>
                        </div>
                        { enableMulti? 
                        multi.indexOf(dataItem.id) !== -1 && (<div className="content">
                            {dataItem.answer}
                        </div>) //checks if the data item id click is in the multi array which will give -1 if not and display answer
                        : selected === dataItem.id && (<div className="content">
                                {dataItem.answer}
                            </div>
                            )
                        }
                    </div>)
                    : <div>No Data Found</div>
                }
            </div>
        </div>
    );
}