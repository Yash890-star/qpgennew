const dynamicQP = () => {

    // QUESTION PAPER

    let b = {
        "A":[
           [
              [
                 {
                    "number":1,
                    "option":null,
                    "roman":null,
                    "question":"(Lists) = 2 - 2 -- Quality rise nothing soon black structure wear service lose treatment pull lead we federal together size build soon four where machine account.",
                    "btl":"K6",
                    "co":"IDK.1",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":2
                 }
              ]
           ],
           [
              [
                 {
                    "number":2,
                    "option":null,
                    "roman":null,
                    "question":"(Lists) = 2 - 2 -- Free staff grow prevent close suffer situation century computer join office teacher cell course might those little base visit address yet quality serve animal list account.",
                    "btl":"K2",
                    "co":"IDK.1",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":2
                 }
              ]
           ],
           [
              [
                 {
                    "number":3,
                    "option":null,
                    "roman":null,
                    "question":"(Stacks and Queues) = 2 - 2 -- Research strong rate watch pretty trouble policy visit that wall film position area.",
                    "btl":"K4",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":2
                 }
              ]
           ],
           [
              [
                 {
                    "number":4,
                    "option":null,
                    "roman":null,
                    "question":"(Stacks and Queues) = 2 - 2 -- Far position continue writer letter call recently those image operation performance heart five base step large talk environmental also federal whatever similar summer practice why role.",
                    "btl":"K5",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":2
                 }
              ]
           ],
           [
              [
                 {
                    "number":5,
                    "option":null,
                    "roman":null,
                    "question":"(Stacks and Queues) = 2 - 2 -- Kitchen past kind about heart fund us central something team manager spend fund soldier role happen able dream feeling outside.",
                    "btl":"K1",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":2
                 }
              ]
           ]
        ],
        "B":[
           [
              [
                 {
                    "number":6,
                    "option":null,
                    "roman":"i",
                    "question":"(Lists) = 8 - 9 -- Last exactly deal attack lead bed start series matter high best myself way forget affect.",
                    "btl":"K1",
                    "co":"IDK.1",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":8
                 },
                 {
                    "number":6,
                    "option":null,
                    "roman":"ii",
                    "question":"(Lists) = 3 - 4 -- Far lot general short nor those husband modern Mr usually protect stock catch military material feeling relate plan.",
                    "btl":"K2",
                    "co":"IDK.1",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":4
                 }
              ]
           ],
           [
              [
                 {
                    "number":7,
                    "option":null,
                    "roman":"i",
                    "question":"(Stacks and Queues) = 12 - 13 -- Heavy the right animal modern daughter media building manager always yard by develop indicate herself nearly to positive strategy any business movie in strategy.",
                    "btl":"K2",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":12
                 }
              ]
           ]
        ],
        "C":[
           [
              [
                 {
                    "number":8,
                    "option":null,
                    "roman":"i",
                    "question":" Kitchen past kind about heart fund us central something team manager spend fund soldier role happen able dream feeling outside.",
                    "btl":"K3",
                    "co":"IDK.1",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":11
                 },
                 {
                    "number":8,
                    "option":null,
                    "roman":"ii",
                    "question":"(Lists) = 5 - 7 -- Nice across himself first receive product easy deal not sell than apply.",
                    "btl":"K5",
                    "co":"IDK.1",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":5
                 }
              ]
           ]
        ]
     }

    //------------------------------------

    //------------------------------------COURSE OBJECTIVES

    let courseObjective = {
        1: {
            cono: 1,
            text: "To understand the basics of algorithmic notion"
        },
        2: {
            cono: 2,
            text: "To understand and apply the algorithm analysis techniques."
        },
        3: {
            cono: 3,
            text: "To critically analyze the efficiency of alternative algorithmic solutions for the same"
        },
        4: {
            cono: 4,
            text: "To understand different algorithm design techniques."
        },
        5: {
            cono: 5,
            text: "	To understand the limitations of Algorithmic power."
        },
    }
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

    let courseOutcomes = {
        1: {
            cono: 'C123.1',
            text: "To understand the basics of algorithmic notion"
        },
        2: {
            cono: 'C123.2',
            text: "To understand and apply the algorithm analysis techniques."
        },
        3: {
            cono: 'C123.3',
            text: "To critically analyze the efficiency of alternative algorithmic solutions for the same"
        },
        4: {
            cono: 'C123.4',
            text: "To understand different algorithm design techniques."
        },
        5: {
            cono: 'C123.5',
            text: "	To understand the limitations of Algorithmic power."
        },
    }
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
                                    <td className="style-2 text-center" rowSpan={r[null]}>{l['number']}</td>
                                    <td className="pl-2">{l['question']}</td>
                                    <td className="px-2 text-center">{l['co']}</td>
                                    <td className="px-2 text-center">{l['btl']}</td>
                                    <td className="px-2 text-center" >{l['QPRef']}</td>
                                </tr>
                                store.push(q)
                            }
                            else {
                                q = <tr>
                                    <td className="style-2 text-center" rowSpan={r[null]}>{l['number']}</td>
                                    <td className="style-2 text-center">{l['roman']}</td>
                                    <td className="pl-2">{l['question']}</td>
                                    <td className="px-2 text-center">{l['co']}</td>
                                    <td className="px-2 text-center">{l['btl']}</td>
                                    <td className="px-2 text-center" >{l['QPRef']}</td>
                                    <td className="px-2 text-center" >{l['MarkAllocated']}</td>
                                </tr>
                                store.push(q)
                            }
                        }
                        else if (r[null] > 1) {
                            subdivsel = 1
                            if (l['roman'] === 'i') {
                                q = <tr>
                                    <td className="style-2 text-center" rowSpan={r[null]}>{l['number']}</td>
                                    <td className="style-2 text-center">{l['roman']}</td>
                                    <td className="pl-2">{l['question']}</td>
                                    <td className="px-2 text-center">{l['co']}</td>
                                    <td className="px-2 text-center">{l['btl']}</td>
                                    <td className="px-2 text-center" >{l['QPRef']}</td>
                                    <td className="px-2 text-center" >{l['MarkAllocated']}</td>
                                </tr>
                                store.push(q)
                            }
                            else {
                                q = <tr>
                                    <td className="text-center">{l['roman']}</td>
                                    <td className="pl-2">{l['question']}</td>
                                    <td className="text-center">{l['co']}</td>
                                    <td className="text-center">{l['btl']}</td>
                                    <td className="text-center">{l['QPRef']}</td>
                                    <td className="px-2 text-center" >{l['MarkAllocated']}</td>
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
                                    <td rowSpan={arrlen+1} className="style-2 text-center" >{l['number']}</td>
                                    <td rowSpan={r[l['option']] } className="style-2 text-center">{l['option']}</td>
                                    <td className="style-2 text-center">{l['roman']}</td>
                                    <td className="pl-2">{l['question']}</td>
                                    <td className="style-2 text-center">{l['co']}</td>
                                    <td className="style-2 text-center">{l['btl']}</td>
                                    <td className="text-center">{l['QPRef']}</td>
                                    <td className='text-center'>{l['MarkAllocated']}</td>
                                </tr>
                                store.push(opt)
                                option = l['option']
                            }
                            else {
                                opt = <tr>
                                    <td className="style-2 text-center">{l['roman']}</td>
                                    <td className='pl-2'>{l['question']}</td>
                                    <td className="style-2 text-center">{l['co']}</td>
                                    <td className="style-2 text-center">{l['btl']}</td>
                                    <td className="text-center">{l['QPRef']}</td>
                                    <td className="text-center">{l['MarkAllocated']}</td>
                                </tr>
                                store.push(opt)
                                option = l['option']
                            }
                        }
                        else {
                            opt = <tr>
                                <td rowSpan={r[l['option']]} className='text-center'>{l['option']}</td>
                                <td className="style-2 text-center">{l['roman']}</td>
                                <td className='pl-2'>{l['question']}</td>
                                <td className="style-2 text-center">{l['co']}</td>
                                <td className="style-2 text-center">{l['btl']}</td>
                                <td className="text-center">{l['QPRef']}</td>
                                <td className="text-center">{l['MarkAllocated']}</td>
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
        final = <table>
                <tbody>
                <tr>
                    <td className='text-center font-bold' colSpan={subdivsel+optsel+2}>Part-{i}-(5x2=10 marks)<br />(Answer all the questions)</td>
                    <td className='text-center font-bold px-2'>CO</td>
                    <td className='text-center font-bold px-2'>BT<br />Level</td>
                    <td className='text-center font-bold px-2'>Univ<br />QP</td>
                </tr>
                </tbody>
                <tbody>
                {store}
                </tbody>
                </table>
                
        }
        else{
            console.log(subdivsel,optsel)
            final = <table>
                <tbody>
                <tr>
                    <td className='text-center font-bold' colSpan={subdivsel+optsel+2}>Part-{i}-(5x2=10 marks)<br />(Answer all the questions)</td>
                    <td className='text-center font-bold px-2'>CO</td>
                    <td className='text-center font-bold px-2'>BT<br />Level</td>
                    <td className='text-center font-bold px-2'>Univ<br />QP</td>
                    <td className='text-center font-bold px-2'>Mark<br/>Allocated</td>
                </tr>
                </tbody>
                <tbody>
                {store}
                </tbody>
                </table>

        }
        questions.push(final)
        questions.push(<br/>)
        final = ''
        store = []
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

export default dynamicQP;