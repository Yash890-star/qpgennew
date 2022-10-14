const questionPaper = () => {
    let parta = {
        1: {
            slno: 1,
            text: "What is data structure?",
            bt: 5,
            CO: "C213.1",
            ref: "2015"
        },
        2: {
            slno: 2,
            text: "What is data structure?",
            bt: 5,
            CO: "C213.1",
            ref: "2015"
        },
        3: {
            slno: 3,
            text: "What is data structure?",
            bt: 5,
            CO: "C213.1",
            ref: "2015"
        },
        4: {
            slno: 4,
            text: "What is data structure?",
            bt: 5,
            CO: "C213.1",
            ref: "2015"
        },
        5: {
            slno: 5,
            text: "What is data structure?",
            bt: 5,
            CO: "C213.1",
            ref: "2015"
        },
    }
    let courseObjective = {
        1:{
            cono:1,
            text:"To understand the basics of algorithmic notion"
        },
        2:{
            cono:2,
            text:"To understand and apply the algorithm analysis techniques."
        },
        3:{
            cono:3,
            text:"To critically analyze the efficiency of alternative algorithmic solutions for the same"
        },
        4:{
            cono:4,
            text:"To understand different algorithm design techniques."
        },
        5:{
            cono:5,
            text:"	To understand the limitations of Algorithmic power."
        },
    }
    let courseOutcomes = {
        1:{
            cono:'C123.1',
            text:"To understand the basics of algorithmic notion"
        },
        2:{
            cono:'C123.2',
            text:"To understand and apply the algorithm analysis techniques."
        },
        3:{
            cono:'C123.3',
            text:"To critically analyze the efficiency of alternative algorithmic solutions for the same"
        },
        4:{
            cono:'C123.4',
            text:"To understand different algorithm design techniques."
        },
        5:{
            cono:'C123.5',
            text:"	To understand the limitations of Algorithmic power."
        },
    }
    let a;
    let b = []
    let c = []
    let d = []
    for (let i = 0; i < 5; i++) {
        a = <tr><td className='text-center'>{parta[1].slno}</td>
            <td className='pl-2'>{parta[1].text}</td>
            <td className='text-center'>{parta[1].CO}</td>
            <td className='text-center'>{parta[1].bt}</td>
            <td className='text-center'>{parta[1].ref}</td></tr>
        b.push(a);
    }
    for(let i =1;i<=5;i++){
        a = <tr>
        <td className='text-center'>{courseObjective[i].cono}</td>
        <td className='pl-2'>
        {courseObjective[i].text}</td>
    </tr>
    c.push(a)
    }
    for(let i in courseOutcomes){
        a = <tr>
        <td className='text-center'>{courseOutcomes[i].cono}</td>
        <td className='pl-2'>
        {courseObjective[i].text}</td>
    </tr>
    d.push(a)
    }
    console.log()
    return (
        <div className="text-sm style-3 flex flex-col style-1 mx-auto">
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
            </table>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>SlNO.</th>
                        <th>Course Objective</th>
                    </tr>
                </thead>
                <tbody>
                    {c}
                </tbody>
            </table>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>CONO.</th>
                        <th>Course Outcomes</th>
                    </tr>
                </thead>
                <tbody>
                    {d}
                </tbody>
            </table>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td className='text-center font-bold' colSpan='5'>BLOOMS TAXONOMY(BT)<br />
                            K1-Remembering , K2-Understanding, K3-Applying, K4-Analyzing, K5-Evaluating ,K6-Creating<br />N/D-November/December A/M-April/June</td>
                    </tr>
                    <tr>
                        <td className='text-center font-bold' colSpan='2'>Part A-(5x2=10 marks)<br />(Answer all the questions)</td>
                        <td className='text-center font-bold'>CO</td>
                        <td className='text-center font-bold'>BT<br />Level</td>
                        <td className='text-center font-bold'>Univ<br />QP</td>
                    </tr>
                </tbody>
                <tbody>
                    {b}
                </tbody>
            </table>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td className='font-bold text-center'colSpan='4'>
                            Part B-(2x12=24 marks)<br />
                            (Answer all the questions)</td>
                        <td  className='font-bold text-center'>CO</td>
                        <td className='font-bold style-2 text-center'>BT</td>
                        <td  className='text-center font-bold'>Univ<br/>QP<br/>reference</td>
                        <td className='text-center font-bold'>Marks<br/>Alloted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td rowSpan="5" className='style-2 text-center'>6</td>
                        <td className='style-2 text-center' rowSpan='2'>a</td>
                        <td className='style-2 text-center'>i</td>
                        <td className='pl-2'>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td className=' text-center'>CO123</td>
                        <td className=' text-center'>k1</td>
                        <td className=' text-center'>2020</td>
                        <td className=' text-center'>5</td>
                    </tr>
                   
                    <tr>
                        <td className=' text-center'>ii</td>
                        <td className='pl-2'>Write operations of circular linked list.</td>
                        <td className=' text-center'>CO123</td>
                        <td className=' text-center'>k1</td>
                        <td className=' text-center'>2020</td>
                        <td className=' text-center'>7</td>
                    </tr>
                    <tr>
                        <td colSpan='6' className='text-center font-bold'>OR</td>
                    </tr>
                    <tr>
                        <td className='style-2 text-center' rowSpan='2'>b</td>
                        <td className='style-2 text-center'>i</td>
                        <td className='pl-2'>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td className=' text-center'>CO123</td>
                        <td className=' text-center'>k1</td>
                        <td className=' text-center'>2020</td>
                        <td className=' text-center'>5</td>
                    </tr>
                    <tr>
                        <td className=' text-center'>ii</td>
                        <td className='pl-2'>Write operations of circular linked list.</td>
                        <td className=' text-center'>CO123</td>
                        <td className=' text-center'>k1</td>
                        <td className=' text-center'>2020</td>
                        <td className=' text-center'>7</td>
                    </tr>
                    <tr>
                        <td rowSpan="6" className='text-center'>7</td>
                    </tr>
                    <tr>
                        <td rowSpan='2' className='text-center'>a</td>
                        <td className='text-center'>i</td>
                        <td className='pl-2'>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td className='text-center'>CO123</td>
                        <td className='text-center'>k1</td>
                        <td className='text-center'>2020</td>
                        <td className='text-center'>5</td>
                    </tr>
                    <tr>
                        <td className='text-center'>ii</td>
                        <td className='pl-2'>Write operations of circular linked list.</td>
                        <td className='text-center'>CO123</td>
                        <td className='text-center'>k1</td>
                        <td className='text-center'>2020</td>
                        <td className='text-center'>7</td>
                    </tr>
                    <tr>
                        <td colSpan='6' className="text-center font-bold">OR</td>
                    </tr>
                    
                    <tr>
                        <td rowSpan='2' className='text-center'>b</td>
                        <td className='text-center'>i</td>
                        <td className='pl-2'>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td className='text-center'>CO123</td>
                        <td className='text-center'>k1</td>
                        <td className='text-center'>2020</td>
                        <td className='text-center'>9</td>
                    </tr>
                    <tr>
                        <td className='text-center'>ii</td>
                        <td className='pl-2'>Write operations of circular linked list.</td>
                        <td className='text-center'>CO123</td>
                        <td className='text-center'>k1</td>
                        <td className='text-center'>2020</td>
                        <td className='text-center'>3</td>
                    </tr>
                </tbody>
            </table><br/>
            <table>
            <tbody>
                    <tr>
                        <td className='font-bold text-center' colSpan='4'>
                            Part C-(1x16=16 marks)<br />
                            (Answer all the questions)</td>
                        <td>CO</td>
                        <td className='style-2'>BT</td>
                        <td>Univ<br/>QP<br/>reference</td>
                        <td>Marks<br/>Alloted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td rowSpan="4"  className='style-2 text-center'>8</td>
                    </tr>
                    <tr>
                        <td  className='style-2 text-center'>a</td>
                        <td  className='style-2 text-center'>i</td>
                        <td className='pl-2'>For all the elements of List A get the square of that each element and store that element<br/>
                         in List B. For instances if List A has 4,5,6,7,8 then List B will be 8,25,36,64</td>
                         <td className='text-center'>C213.1</td>
                         <td className='text-center'>K3</td>
                         <td className='text-center'>2020</td>
                         <td className='text-center'>16</td>
                    </tr>
                    <tr>
                        <th colSpan='7' className='font-bold'>OR</th>
                    </tr>
                    <tr>
                    <td className='text-center'>a</td>
                        <td className='text-center'>i</td>
                        <td className='pl-2'>For all the elements of List A get the square of that each element and store that element<br/>
                         in List B. For instances if List A has 4,5,6,7,8 then List B will be 8,25,36,64</td>
                         <td className='text-center'>C213.1</td>
                         <td className='text-center'>K3</td>
                         <td className='text-center'>2020</td>
                         <td className='text-center'>16</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default questionPaper;