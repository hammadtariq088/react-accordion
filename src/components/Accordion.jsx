import React, {useState} from 'react';
import MyAccordion from "./MyAccordion";
import questions from "./AccordionApi";

const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
        <div className="main-div">
        <h1>React JS Interview Questions</h1>
        {
            data.map((val)=>{
                // console.log(val);
                const {id} = val; // Object Destructuring
                return <MyAccordion key={id} {...val}    /> // ID + remaining properties
                
            })
        }
        </div>
        </>
    )
}

export default Accordion;
