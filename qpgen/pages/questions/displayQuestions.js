import { AiOutlineArrowLeft } from 'react-icons/ai';

const displayQuestions = () => {

    let data = {
        1: {
            question: "question 1",
            mark: "2-3"
        },
        2: {
            question: 'question 2',
            mark: "3-4"
        },
        3: {
            question: 'question 2',
            mark: "3-4"
        },
        4: {
            question: 'question 2',
            mark: "3-4"
        },
        5: {
            question: 'question 2',
            mark: "3-4"
        },
        6: {
            question: 'question 2',
            mark: "3-4"
        },
        7: {
            question: 'question 2',
            mark: "3-4"
        },
        8: {
            question: 'question 2',
            mark: "3-4"
        },
        9: {
            question: 'question 2',
            mark: "3-4"
        }
    }

    let a = []

    for (let i in data) {
        let b = <div className="table-row border-b ">
        <div className="table-cell">{data[i].question}</div>
        <div className="table-cell">{data[i].mark}</div>
      </div>
        a.push(b)
    }

    return (
        <div className='text-white'>
            <div className="flex ml-10 mt-10 text-white">
                <AiOutlineArrowLeft className="logo mt-3" />
                <h1 className="logo ml-3">QPGEN</h1>
            </div>
            <div className='q-container mx-auto '>
                <h1 className='heading-self mt-5'>Questions</h1>
                <p className='paragraph-self ml-1  mb-10'>Questions are listed below for the selected unit</p>
            </div>
            <div className="table q-container mx-auto">
                <div className="table-header-group">
                    <div className="table-row">
                        <div className="table-cell text-left">Question</div>
                        <div className="table-cell text-left">Mark</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {a}
                </div>
            </div>
            </div>
            );
}

            export default displayQuestions;