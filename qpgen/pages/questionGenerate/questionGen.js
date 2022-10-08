import Navbar from "../../components/navbar";
import { useState } from 'react';
const QuestionGen = () => {

    let finalObject = {}

    function newSpecAdder(){
        setspecHolder((prevState) => {
            return([...prevState, spec]);
        })
    }

    function markHandler(event){
        let value = event.target.value;
        console.log(value)
        setmark((prevState) => {
            return([...prevState, value])
        })
        console.log(mark)
    }

    function numberHandler(event){
        let value = event.target.value;
        console.log(value)
        setquestions((prevState) => {
            return([...prevState, value])
        })
        console.log(questions)
    }

    function choiceHandler(event){
        let value = event.target.value;
        console.log(value)
        setchoice((prevState) => {
            return([...prevState, value])
        })
        console.log(choice)
    }
    
    function objectHandler(){
        for(let i=0; i<mark.length; i++){
            finalObject[mark[i]] = {'num':questions[i],
                                    'choice':choice[i]}
        }
        console.log(finalObject)
    }

    let key = 0

    const [mark, setmark] = useState([]);
    const [questions, setquestions] = useState([]);
    const [choice, setchoice] = useState([]);

    const spec = <div className="flex flex-row justify-center mt-5">
        <input key={key++}  type='text' className="border-solid border-2 border-black rounded" placeholder="Mark" onChange={markHandler}/>
        <input key={key++} type='text' className='border-solid border-2 border-black rounded ml-3' placeholder='No. Of Questions' onChange={numberHandler}/>
        <select key={key++} className="ml-3 border-solid border-2 border-black rounded" onChange={choiceHandler}>
            <option disabled selected hidden value='choice'>Choice</option>
            <option name='yes' value='1'>Yes</option>
            <option name='No' value='0'>No</option>
        </select>
        
    </div>

    const [specHolder, setspecHolder] = useState([spec]);

    return (
        <div>
            <Navbar />
            <h1 className="text-center text-3xl mt-10">
                Generate Question Paper
            </h1>
            {specHolder}
            <div className="flex justify-center mt-3">
            <button className="border-solid border-2 ml-3 border-black rounded" onClick={newSpecAdder}>
            Add More
        </button>
                <button className="border-solid border-2 ml-3 border-black rounded" onClick={objectHandler}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default QuestionGen;