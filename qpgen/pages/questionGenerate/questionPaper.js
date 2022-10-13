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
    let a;
    let b = []
    for (let i = 0; i < 5; i++) {
        a = <tr><td>{parta[1].slno}</td>
            <td>{parta[1].text}</td>
            <td>{parta[1].CO}</td>
            <td>{parta[1].bt}</td>
            <td>{parta[1].ref}</td></tr>
        b.push(a);
    }
    return (
        <div className="flex flex-col style-1 mx-auto">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">RegNO.</td>
                        <td colSpan="2"></td>
                    </tr>
                    <tr>
                        <td>Logo</td>
                        <td colSpan="3">CHENNAI INSTITUTE OF TECHNOLOGY<br />
                            Sarathy Nagar, Pudupedu, Chennai 600 069.<br />
                            Internal Assessment -1 April 2022</td>
                    </tr>
                    <tr>
                        <td>Date/Time</td>
                        <td>Date/Time</td>
                        <td>Max Marks</td>
                        <td>50 Marks</td>

                    </tr>
                    <tr>
                        <td>Subject With Code</td>
                        <td>CS 8451 Design and Analysis of Algorithm</td>
                        <td>Time</td>
                        <td>1.30 Hours</td>
                    </tr>
                    <tr>
                        <td>Branch</td>
                        <td>CSE Set A</td>
                        <td>Year/Semester</td>
                        <td>II/IV</td>
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
                    <tr>
                        <td>1</td>
                        <td>
                            To understand the basics of algorithmic notion</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>

                            To understand and apply the algorithm analysis techniques.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            To critically analyze the efficiency of alternative algorithmic solutions for the same </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>

                            To understand different algorithm design techniques.</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            To understand the limitations of Algorithmic power.</td>
                    </tr>
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
                    <tr>
                        <td>C213.1</td>
                        <td>
                            To understand the basics of algorithmic notion</td>
                    </tr>
                    <tr>
                        <td>C213.2</td>
                        <td>

                            To understand and apply the algorithm analysis techniques.</td>
                    </tr>
                    <tr>
                        <td>C213.3</td>
                        <td>
                            To critically analyze the efficiency of alternative algorithmic solutions for the same </td>
                    </tr>
                    <tr>
                        <td>C213.4</td>
                        <td>

                            To understand different algorithm design techniques.</td>
                    </tr>
                    <tr>
                        <td>C213.5</td>
                        <td>
                            To understand the limitations of Algorithmic power.</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table>
                <thead>
                    <tr>
                        <th colSpan='5'>BLOOMS TAXONOMY(BT)<br />
                            K1-Remembering , K2-Understanding, K3-Applying, K4-Analyzing, K5-Evaluating ,K6-Creating<br />N/D-November/December A/M-April/June</th>
                    </tr>
                    <tr>
                        <th colSpan='2'>Part A-(5x2=10 marks)<br />(Answer all the questions)</th>
                        <th>CO</th>
                        <th>BT<br />Level</th>
                        <th>Univ<br />QP</th>
                    </tr>
                </thead>
                <tbody>
                    {b}
                </tbody>
            </table>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td className='bold text-center'colSpan='4'>
                            Part B-(2x12=24 marks)<br />
                            (Answer all the questions)</td>
                        <td>CO</td>
                        <td>BT</td>
                        <td>Univ<br/>QP</td>
                        <td>Marks<br/>Alloted</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td rowSpan="10" className='style-2'>6</td>
                    </tr>
                    <tr>
                        <td className='style-2' rowSpan='2'>a</td>
                        <td className='style-2'>i</td>
                        <td>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>Write operations of circular linked list.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td rowSpan='2'>b</td>
                        <td>i</td>
                        <td>	
With the help of pseudocode explain few operations of array implementation.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td colSpan='6' className="text-center">or</td>
                    </tr>
                    <tr>
                        <td rowSpan='2'>a</td>
                        <td>i</td>
                        <td>Write operations of circular linked list.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>With the help of pseudocode explain few operations of array implementation.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td rowSpan='2'>b</td>
                        <td>i</td>
                        <td>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>Write operations of circular linked list.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td rowSpan="10">7</td>
                    </tr>
                    <tr>
                        <td rowSpan='2'>a</td>
                        <td>i</td>
                        <td>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>Write operations of circular linked list.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td rowSpan='2'>b</td>
                        <td>i</td>
                        <td>	
With the help of pseudocode explain few operations of array implementation.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td colSpan='6' className="text-center">or</td>
                    </tr>
                    <tr>
                        <td rowSpan='2'>a</td>
                        <td>i</td>
                        <td>Write operations of circular linked list.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>With the help of pseudocode explain few operations of array implementation.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td rowSpan='2'>b</td>
                        <td>i</td>
                        <td>Illustrate the different ways of deletion in linked list in pseudocode.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>ii</td>
                        <td>Write operations of circular linked list.</td>
                        <td>CO123</td>
                        <td>k1</td>
                        <td>2020</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table><br/>
            <table>
            <thead>
                    <tr>
                        <th colSpan='4'>
                            Part C-(1x16=16 marks)<br />
                            (Answer all the questions)</th>
                        <th>CO</th>
                        <th>BT</th>
                        <th>Univ<br/>QP</th>
                        <th>Marks<br/>Alloted</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="4"  className='style-2'>8</td>
                    </tr>
                    <tr>
                        <td  className='style-2'>a</td>
                        <td  className='style-2'>i</td>
                        <td>For all the elements of List A get the square of that each element and store that element<br/>
                         in List B. For instances if List A has 4,5,6,7,8 then List B will be 8,25,36,64</td>
                         <td>C213.1</td>
                         <td>K3</td>
                         <td>2020</td>
                         <td>16</td>
                    </tr>
                    <tr>
                        <th colSpan='7'>or</th>
                    </tr>
                    <tr>
                    <td>a</td>
                        <td>i</td>
                        <td>For all the elements of List A get the square of that each element and store that element<br/>
                         in List B. For instances if List A has 4,5,6,7,8 then List B will be 8,25,36,64</td>
                         <td>C213.1</td>
                         <td>K3</td>
                         <td>2020</td>
                         <td>16</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default questionPaper;