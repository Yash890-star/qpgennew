import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
const displayQuestions = () => {
    const router = useRouter()
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
        },
        10: {
            question: 'question 2',
            mark: "3-4"
        },
        11: {
            question: 'question 2',
            mark: "3-4"
        },
        12: {
            question: 'question 2',
            mark: "3-4"
        },
        13: {
            question: 'question 2',
            mark: "3-4"
        },
        14: {
            question: 'question 2',
            mark: "3-4"
        },
        15: {
            question: 'question 2',
            mark: "3-4"
        }
    }

    let a = []

    for (let i in data) {
        let b = <div className='flex py-3 border-b border-slate-500'>
            <p className='basis-11/12'>{data[i].question}</p>
            <h1 className='basis-auto pl-5 text-right mark'>{data[i].mark}</h1>
        </div>
        a.push(b)
    }

    return (
        <div className='text-white'>
            <div className="flex ml-10 mt-10 text-white">
                <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3" />
                <h1 className="logo ml-3">QPGEN</h1>
            </div>
            <div className='q-container mx-auto '>
                <h1 className='heading-self mt-5'>Questions</h1>
                <p className='paragraph-self ml-1 mb-10'>Questions are listed below for the selected unit</p>
            </div>
                <div className='q-container mx-auto'>
                    {a}
                </div>
            </div>
            );
}

export default displayQuestions;