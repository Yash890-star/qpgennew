import  QuestionComp  from '/components/questioncomp'

const Dqp = () => {

    let data = {
        "A":[
           [
              [
                 {
                    "number":1,
                    "option":null,
                    "roman":null,
                    "question":"(STACKS AND QUEUES) = 2 - 2 -- Heart good wall establish charge huge nothing teach court attention point join easy walk benefit occur door both.",
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
                    "number":2,
                    "option":null,
                    "roman":null,
                    "question":"(STACKS AND QUEUES) = 2 - 2 -- Available paper least believe identify detail list writer glass loss trouble front power laugh fact.",
                    "btl":"K6",
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
                    "number":3,
                    "option":null,
                    "roman":null,
                    "question":"(TREES) = 2 - 2 -- Memory its item coach letter pay through thousand hold field a natural bring almost sit threat compare after leader start vote measure hospital.",
                    "btl":"K6",
                    "co":"IDK.3",
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
                    "question":"(TREES) = 2 - 2 -- Church senior particularly threat magazine section Democrat fish answer choose those trial serious if deep idea among professor yeah parent.",
                    "btl":"K5",
                    "co":"IDK.3",
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
                    "question":"(TREES) = 2 - 2 -- Attack building appear democratic southern bring cultural man agree include seem subject house democratic magazine most they begin wish lead seem from mention first fact argue couple.",
                    "btl":"K3",
                    "co":"IDK.3",
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
                    "option":"A",
                    "roman":"i",
                    "question":"(STACKS AND QUEUES) = 12 - 13 -- Where avoid develop edge participant boy rise sing piece career Mrs need outside hotel American ready approach weight staff church operation record mention analysis want art.",
                    "btl":"K2",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":12
                 }
              ],
              [
                 {
                    "number":6,
                    "option":"B",
                    "roman":"i",
                    "question":"(STACKS AND QUEUES) = 5 - 7 -- Home shake information even dinner free why maybe parent indeed glass away likely feel hair single give religious with explain civil.",
                    "btl":"K4",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":6
                 },
                 {
                    "number":6,
                    "option":"B",
                    "roman":"ii",
                    "question":"(STACKS AND QUEUES) = 5 - 7 -- Establish friend light suddenly feeling get floor law exactly health free send strong various economy serve.",
                    "btl":"K6",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":6
                 }
              ]
           ],
           [
              [
                 {
                    "number":7,
                    "option":"A",
                    "roman":"i",
                    "question":"(TREES) = 12 - 13 -- Education could voice offer middle provide American face three model throw image clearly buy describe require billion PM goal.",
                    "btl":"K1",
                    "co":"IDK.3",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":12
                 }
              ],
              [
                 {
                    "number":7,
                    "option":"B",
                    "roman":"i",
                    "question":"(TREES) = 12 - 13 -- Must ask its help but receive central group significant respond other among if street security.",
                    "btl":"K3",
                    "co":"IDK.3",
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
                    "roman":null,
                    "question":"(STACKS AND QUEUES) = 10 - 11 -- Dog quickly character board then place why hospital central morning action there his sell food space accept specific safe mention young student purpose.",
                    "btl":"K3",
                    "co":"IDK.2",
                    "QPRef":[
                       
                    ],
                    "MarkAllocated":10
                 }
              ]
           ]
        ]
     }
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
     
    return ( 
        <QuestionComp data = {data} cObj = {courseObjective} cOut = {courseOutcomes}/>
    );
}
 
export default Dqp;
