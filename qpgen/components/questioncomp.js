import Question from "./question"
import QuestionAttributes from "./questionAttributes"
import Roman from "./roman"
import Number from "./number"
import Option from "./option"
import NoChoice from "./noChoice"
import Choice from "./choice"

const QuestionComp = (props) => {

    // QUESTION PAPER
    console.log(props.data)
    let b = props.data
    let courseObjective = props.cObj
    let courseOutcomes = props.cOut
    //------------------------------------

    //------------------------------------COURSE OBJECTIVES

    let co = []
    let a
    for (let i = 1; i <= 5; i++) {
        a = <tr>
            <td className='text-center'>{courseObjective[i].cono}</td>
            <td className='pl-2'>
                {courseObjective[i].text}</td>
        </tr>
        co.push(a)
    }

    //------------------------------------
    //------------------------------------COURSE OUTCOMES

    
    let cout = []
    for (let i in courseOutcomes) {
        a = <tr>
            <td className='text-center'>{courseOutcomes[i].cono}</td>
            <td className='pl-2'>
                {courseOutcomes[i].text}</td>
        </tr>
        cout.push(a)
    }

    //------------------------------------
    //------------------------------------LOGIC FOR CHOICE CALCULATOR

    function getRoman(i) {
        let roman = {}
        for (let j of i) {
            for (let k of j) {
                if (roman.hasOwnProperty(k['option'])) {
                    roman[k['option']] += 1
                }
                else {
                    roman[k['option']] = 1
                }
            }
        }
        return roman
    }
    function getArrayLength(i) {
        let arrlen = 0
        for (let j of i) {
            for (let k of j) {
                arrlen++;
            }
        }
        return arrlen;
    }
    //------------------------------------
    //------------------------------------LOGIC FOR DYNAMIC QUESTION PAPER
    let store = []
    let q
    let final = ''
    let questions = []
    let opt 
    let optsel = 0, subdivsel = 0
    for (let i in b) {
        for (let j of b[i]) {
            let r = getRoman(j)
            let option = 'A'
            let arrlen = getArrayLength(j)
            for (let k of j) {
                for (let l of k) {
                    if (Object.keys(r).length == 1) {
                        if (r[null] == 1) {
                            if (l['roman'] === null) {
                                q = <tr>
                                    <Number rs={r[null]} data={l['number']}/>
                                    <Question data={l['question']}/>
                                    <QuestionAttributes data = {l['co']}/>
                                    <QuestionAttributes data = {l['btl']}/>
                                    <QuestionAttributes data = {l['QPRef']}/>
                                    </tr>
                                store.push(q)
                            }
                            else {
                                q = <tr>
                                    <Number rs={r[null]} data={l['number']}/>
                                    <Roman data={l['roman']}/>
                                    <Question data={l['question']}/>
                                    <QuestionAttributes data = {l['co']}/>
                                    <QuestionAttributes data = {l['btl']}/>
                                    <QuestionAttributes data = {l['QPRef']}/>
                                    <QuestionAttributes data = {l['MarkAllocated']}/>
                                </tr>
                                store.push(q)
                            }
                        }
                        else if (r[null] > 1) {
                            subdivsel = 1
                            if (l['roman'] === 'i') {
                                q = <tr>
                                    <Number rs={r[null]} data={l['number']}/>
                                    <Roman data={l['roman']}/>
                                    <Question data={l['question']}/>
                                    <QuestionAttributes data = {l['co']}/>
                                    <QuestionAttributes data = {l['btl']}/>
                                    <QuestionAttributes data = {l['QPRef']}/>
                                    <QuestionAttributes data = {l['MarkAllocated']}/>
                                </tr>
                                store.push(q)
                            }
                            else {
                                q = <tr>
                                    <Roman data={l['roman']}/>
                                    <Question data={l['question']}/>
                                    <QuestionAttributes data = {l['co']}/>
                                    <QuestionAttributes data = {l['btl']}/>
                                    <QuestionAttributes data = {l['QPRef']}/>
                                    <QuestionAttributes data = {l['MarkAllocated']}/>
                                </tr>
                                store.push(q)
                            }
                        }
                    }
                    else{
                        optsel = 1
                        if (option === l['option']) {
                            if (l['roman'] === 'i') {
                                subdivsel = 1
                                opt = <tr>
                                    <Number rs={arrlen+1} data={l['number']}/>
                                    <Option rs={r[l['option']]} data={l['option']}/>
                                    <Roman data={l['roman']}/>
                                    <Question data={l['question']}/>
                                    <QuestionAttributes data = {l['co']}/>
                                    <QuestionAttributes data = {l['btl']}/>
                                    <QuestionAttributes data = {l['QPRef']}/>
                                    <QuestionAttributes data = {l['MarkAllocated']}/>
                                </tr>
                                store.push(opt)
                                option = l['option']
                            }
                            else {
                                opt = <tr>
                                    <Roman data={l['roman']}/>
                                    <Question data={l['question']}/>
                                    <QuestionAttributes data = {l['co']}/>
                                    <QuestionAttributes data = {l['btl']}/>
                                    <QuestionAttributes data = {l['QPRef']}/>
                                    <QuestionAttributes data = {l['MarkAllocated']}/>
                                </tr>
                                store.push(opt)
                                option = l['option']
                            }
                        }
                        else {
                            opt = <tr>
                                <td rowSpan={r[l['option']]} className='style-2 text-center'>{l['option']}</td>
                                <Roman data={l['roman']}/>
                                <Question data={l['question']}/>
                                <QuestionAttributes data = {l['co']}/>
                                <QuestionAttributes data = {l['btl']}/>
                                <QuestionAttributes data = {l['QPRef']}/>
                                <QuestionAttributes data = {l['MarkAllocated']}/>
                            </tr>
                            let brl = <tr><td colSpan='9' className="font-bold text-center">OR</td></tr>
                            store.push(brl)
                            store.push(opt)
                            option = l['option']
                        }

                    }
                }
            }
        }
        if (b[i][0][0][0]['roman'] === null){
            console.log(subdivsel,optsel)
         final = <NoChoice part = {i} subdivsel = {subdivsel} optsel = {optsel} store = {store}/>
                
        }
        else{
            console.log(subdivsel,optsel)
            final = <Choice part = {i} subdivsel = {subdivsel} optsel = {optsel} store = {store}/>

        }
        questions.push(final)
        questions.push(<br/>)
        final = ''
        store = []
        optsel = 0
        subdivsel = 0
    }


    return (
        <div className="flex flex-col bg-white style-1 mx-auto text-sm style-3 mt-10">
            {/*TABLE FOR PAPER HEADER */}
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2" className='text-right pr-4'>RegNO.</td>
                        <td colSpan="2"></td>
                    </tr>
                    <tr>
                        <td className='text-center'>Logo</td>
                        <td colSpan="3" className='text-center'>CHENNAI INSTITUTE OF TECHNOLOGY<br />
                            Sarathy Nagar, Pudupedu, Chennai 600 069.<br />
                            Internal Assessment -1 April 2022</td>
                    </tr>
                    <tr>
                        <td className='pl-2'>Date/Time</td>
                        <td className='pl-2'>Date/Time</td>
                        <td className='pl-2'>Max Marks</td>
                        <td className='pl-2'>50 Marks</td>

                    </tr>
                    <tr>
                        <td className='pl-2'>Subject With Code</td>
                        <td className='pl-2'>CS 8451 Design and Analysis of Algorithm</td>
                        <td className='pl-2'>Time</td>
                        <td className='pl-2'>1.30 Hours</td>
                    </tr>
                    <tr>
                        <td className='pl-2'>Branch</td>
                        <td className='pl-2'>CSE Set A</td>
                        <td className='pl-2'>Year/Semester</td>
                        <td className='pl-2'>II/IV</td>
                    </tr>
                </tbody>
            </table><br />
            {/*TABLE FOR COURSE OBJECTIVES*/}
            <table>
                <thead>
                    <tr>
                        <th>SlNO.</th>
                        <th>Course Objective</th>
                    </tr>
                </thead>
                <tbody>
                    {co}
                </tbody>
            </table><br />
            {/*TABLE FOR COURSE OUTCOMES*/}
            <table>
                <thead>
                    <tr>
                        <th>SlNO.</th>
                        <th>Course Outcomes</th>
                    </tr>
                </thead>
                <tbody>
                    {cout}
                </tbody>
            </table><br />
            {questions}
        </div>);
}

export default QuestionComp