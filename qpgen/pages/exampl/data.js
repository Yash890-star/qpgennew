const paper = () => {
    let a = {
        "A": [
            [
                [
                    {
                        "number": 1,
                        "option": null,
                        "roman": null,
                        "question": "(STACKS AND QUEUES) = 2 - 2 -- Heart good wall establish charge huge nothing teach court attention point join easy walk benefit occur door both.",
                        "btl": "K4",
                        "co": "IDK.2",
                        "QPRef": [],
                        "MarkAllocated": 2
                    }
                ]
            ],
            [
                [
                    {
                        "number": 2,
                        "option": null,
                        "roman": null,
                        "question": "(STACKS AND QUEUES) = 2 - 2 -- Available paper least believe identify detail list writer glass loss trouble front power laugh fact.",
                        "btl": "K6",
                        "co": "IDK.2",
                        "QPRef": [],
                        "MarkAllocated": 2
                    }
                ]
            ],
            [
                [
                    {
                        "number": 3,
                        "option": null,
                        "roman": null,
                        "question": "(TREES) = 2 - 2 -- Memory its item coach letter pay through thousand hold field a natural bring almost sit threat compare after leader start vote measure hospital.",
                        "btl": "K6",
                        "co": "IDK.3",
                        "QPRef": [],
                        "MarkAllocated": 2
                    }
                ]
            ],
            [
                [
                    {
                        "number": 4,
                        "option": null,
                        "roman": null,
                        "question": "(TREES) = 2 - 2 -- Church senior particularly threat magazine section Democrat fish answer choose those trial serious if deep idea among professor yeah parent.",
                        "btl": "K5",
                        "co": "IDK.3",
                        "QPRef": [],
                        "MarkAllocated": 2
                    }
                ]
            ],
            [
                [
                    {
                        "number": 5,
                        "option": null,
                        "roman": null,
                        "question": "(TREES) = 2 - 2 -- Attack building appear democratic southern bring cultural man agree include seem subject house democratic magazine most they begin wish lead seem from mention first fact argue couple.",
                        "btl": "K3",
                        "co": "IDK.3",
                        "QPRef": [],
                        "MarkAllocated": 2
                    }
                ]
            ]
        ],
        "B": [
            [
                [
                    {
                        "number": 6,
                        "option": "A",
                        "roman": "i",
                        "question": "(STACKS AND QUEUES) = 12 - 13 -- Where avoid develop edge participant boy rise sing piece career Mrs need outside hotel American ready approach weight staff church operation record mention analysis want art.",
                        "btl": "K2",
                        "co": "IDK.2",
                        "QPRef": [],
                        "MarkAllocated": 12
                    }

                ],
                [
                    {
                        "number": 6,
                        "option": "B",
                        "roman": "i",
                        "question": "(STACKS AND QUEUES) = 5 - 7 -- Home shake information even dinner free why maybe parent indeed glass away likely feel hair single give religious with explain civil.",
                        "btl": "K4",
                        "co": "IDK.2",
                        "QPRef": [],
                        "MarkAllocated": 6
                    },
                    {
                        "number": 6,
                        "option": "B",
                        "roman": "ii",
                        "question": "(STACKS AND QUEUES) = 5 - 7 -- Establish friend light suddenly feeling get floor law exactly health free send strong various economy serve.",
                        "btl": "K6",
                        "co": "IDK.2",
                        "QPRef": [],
                        "MarkAllocated": 69
                    }
                ]
            ],
            [
                [
                    {
                        "number": 7,
                        "option": "A",
                        "roman": "i",
                        "question": "(TREES) = 12 - 13 -- Education could voice offer middle provide American face three model throw image clearly buy describe require billion PM goal.",
                        "btl": "K1",
                        "co": "IDK.3",
                        "QPRef": [],
                        "MarkAllocated": 12
                    }
                ],
                [
                    {
                        "number": 7,
                        "option": "B",
                        "roman": "i",
                        "question": "(TREES) = 12 - 13 -- Must ask its help but receive central group significant respond other among if street security.",
                        "btl": "K3",
                        "co": "IDK.3",
                        "QPRef": [],
                        "MarkAllocated": 12
                    }
                ]
            ]
        ],
        "C": [
            [
                [
                    {
                        "number": 8,
                        "option": "A",
                        "roman": "i",
                        "question": "(STACKS AND QUEUES) = 10 - 11 -- Dog quickly character board then place why hospital central morning action there his sell food space accept specific safe mention young student purpose.",
                        "btl": "K3",
                        "co": "IDK.2",
                        "QPRef": [],
                        "MarkAllocated": 10
                    },
                    {
                        "number": 8,
                        "option": "A",
                        "roman": "ii",
                        "question": "(STACKS AND QUEUES) = 5 - 7 -- Plan provide activity first top over arrive itself own people open choose letter huge fish treatment author challenge event audience cold despite same build easy build partner.",
                        "btl": "K5",
                        "co": "IDK.2",
                        "QPRef": [],
                        "MarkAllocated": 6
                    }
                ],
                [
                    {
                        "number": 8,
                        "option": "B",
                        "roman": "i",
                        "question": "(TREES) = 8 - 9 -- Message citizen wonder usually marriage clear better several prevent record today sometimes according development factor hotel.",
                        "btl": "K2",
                        "co": "IDK.3",
                        "QPRef": [],
                        "MarkAllocated": 9
                    },
                    {
                        "number": 8,
                        "option": "B",
                        "roman": "ii",
                        "question": "(TREES) = 5 - 7 -- Cut next term establish wife term late bring despite range me bag create thing hotel thing least think receive put drop indeed summer.",
                        "btl": "K3",
                        "co": "IDK.3",
                        "QPRef": [],
                        "MarkAllocated": 7
                    }
                ]
            ]
        ]
    }
    let roman = {}
    function getRoman(i) {
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
        console.log(roman)
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
    function getArrayLength(i) {
        let arrlen = 0
        for (let j of i) {
            for (let k of j) {
                arrlen++;
            }
        }
        console.log(arrlen)
        return arrlen;
    }
    let b;
    let insrt = []
    let parta = a['A'];
    let partb = a['B'];
    let partc = a['C'];
    for (let i of parta) {
        for (let j of i)
            for (let k of j) {
                b = <tr><td className='style-2 text-center'>{k['number']}</td>
                    <td className='pl-2'>{k['question']}</td>
                    <td className='text-center'>{k['co']}</td>
                    <td className='text-center'>{k['btl']}</td>
                    <td className='text-center'>{k['QPRef']}</td>
                </tr>
            }
        insrt.push(b)
    }
    let store = []
    let storec = []
    for (let i of partb) {
        let option = 'A'
        getRoman(i)
        let arrlen = getArrayLength(i)
        for (let j of i) {
            for (let k of j) {
                if (option === k['option']) {
                    if (k['roman'] === 'i') {
                        b = <tr>
                            <td rowSpan={arrlen}>{k['number']}</td>
                            <td rowSpan={roman[k['option']]}>{k['option']}</td>
                            <td>{k['roman']}</td>
                            <td>{k['question']}</td>
                            <td>{k['co']}</td>
                            <td>{k['btl']}</td>
                            <td>{k['QPRef']}</td>
                            <td>{k['MarkAllocated']}</td>
                        </tr>
                        store.push(b)
                        option = k['option']
                    }
                    else {
                        b = <tr>
                            <td>{k['roman']}</td>
                            <td>{k['question']}</td>
                            <td>{k['co']}</td>
                            <td>{k['btl']}</td>
                            <td>{k['QPRef']}</td>
                            <td>{k['MarkAllocated']}</td>
                        </tr>
                        store.push(b)
                        option = k['option']
                    }
                }
                else {
                    b = <tr>
                        <td rowSpan={roman[k['option']]}>{k['option']}</td>
                        <td>{k['roman']}</td>
                        <td>{k['question']}</td>
                        <td>{k['co']}</td>
                        <td>{k['btl']}</td>
                        <td>{k['QPRef']}</td>
                        <td>{k['MarkAllocated']}</td>
                    </tr>
                    store.push(b)
                    option = k['option']
                }
            }

        }
        roman = {}
    }
    let cout = []
    for(let i in courseOutcomes){
        a = <tr>
        <td className='text-center'>{courseOutcomes[i].cono}</td>
        <td className='pl-2'>
        {courseOutcomes[i].text}</td>
    </tr>
    cout.push(a)
    }
    for (let i of partc) {
        let option = 'A'
        getRoman(i)
        let arrlen = getArrayLength(i)
        for (let j of i) {
            for (let k of j) {
                if (option === k['option']) {
                    if (k['roman'] === 'i') {
                        b = <tr>
                            <td rowSpan={arrlen}>{k['number']}</td>
                            <td rowSpan={roman[k['option']]}>{k['option']}</td>
                            <td>{k['roman']}</td>
                            <td>{k['question']}</td>
                            <td>{k['co']}</td>
                            <td>{k['btl']}</td>
                            <td>{k['QPRef']}</td>
                            <td>{k['MarkAllocated']}</td>
                        </tr>
                        storec.push(b)
                        option = k['option']
                    }
                    else {
                        b = <tr>
                            <td>{k['roman']}</td>
                            <td>{k['question']}</td>
                            <td>{k['co']}</td>
                            <td>{k['btl']}</td>
                            <td>{k['QPRef']}</td>
                            <td>{k['MarkAllocated']}</td>
                        </tr>
                        storec.push(b)
                        option = k['option']
                    }
                }
                else {
                    b = <tr>
                        <td rowSpan={roman[k['option']]}>{k['option']}</td>
                        <td>{k['roman']}</td>
                        <td>{k['question']}</td>
                        <td>{k['co']}</td>
                        <td>{k['btl']}</td>
                        <td>{k['QPRef']}</td>
                        <td>{k['MarkAllocated']}</td>
                    </tr>
                    storec.push(b)
                    option = k['option']
                }
            }

        }
        roman = {}
    }
    let co = []
    for(let i =1;i<=5;i++){
        a = <tr>
        <td className='text-center'>{courseObjective[i].cono}</td>
        <td className='pl-2'>
        {courseObjective[i].text}</td>
    </tr>
    co.push(a)
    }
    return (
        <div className="flex flex-col style-1 mx-auto">
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
            </table>
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
            </table>
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
                    {insrt}
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td className='font-bold text-center' colSpan='4'>
                            Part B-(2x12=24 marks)<br />
                            (Answer all the questions)</td>
                        <td className='font-bold text-center'>CO</td>
                        <td className='font-bold style-2 text-center'>BT</td>
                        <td className='text-center font-bold'>Univ<br />QP<br />reference</td>
                        <td className='text-center font-bold'>Marks<br />Alloted</td>
                    </tr>
                </tbody>
                <tbody>
                    {store}
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td className='font-bold text-center' colSpan='4'>
                            Part C-(1x16=16 marks)<br />
                            (Answer all the questions)</td>
                        <td className='font-bold text-center'>CO</td>
                        <td className='font-bold style-2 text-center'>BT</td>
                        <td className='text-center font-bold'>Univ<br />QP<br />reference</td>
                        <td className='text-center font-bold'>Marks<br />Alloted</td>
                    </tr>
                </tbody>
                <tbody>
                    {storec}
                </tbody>
            </table>
        </div>
    );
}

export default paper;