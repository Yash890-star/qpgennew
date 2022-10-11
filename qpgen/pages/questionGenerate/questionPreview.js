import Navbar from "../../components/navbar";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

require('katex/contrib/mhchem');
const QuestionPreview = () => {

    let questions = {
        partA: {
            1: {
                slno: '1',
                text: 'what is data structures',
                choice: 0,
                CO: 'AB123',
                BT: 'k1,k2,k3',
                year: '2020'
            },
            2: {
                slno: '2',
                text: 'question 1',
                choice: 0,
                CO: 'AB123',
                BT: 'k1,k2,k3',
                year: '2020'
            },
            3: {
                slno: '3',
                text: 'question 1',
                choice: 0,
                CO: 'AB123',
                BT: 'k1,k2,k3',
                year: '2020'
            },
            4: {
                slno: '4',
                text: 'question 1',
                choice: 0,
                CO: 'AB123',
                BT: 'k1,k2,k3',
                year: '2020'
            },
            5: {
                slno: '5',
                text: 'question 1',
                choice: 0,
                CO: 'AB123',
                BT: 'k1,k2,k3',
                year: '2020'
            }
        }
    }
    let courseOutcomes = {
        1: {
            no: "AB123",
            text: "course Outcome 1"
        },
        2: {
            no: "AB123",
            text: "course Outcome 1"
        },
        3: {
            no: "AB123",
            text: "course Outcome 1"
        },
        4: {
            no: "AB123",
            text: "course Outcome 1"
        },
        5: {
            no: "AB123",
            text: "course Outcome 1"
        }
    }
    let courseObjectives = {
        1: {
            no: "AB123",
            text: "course Outcome 1"
        },
        2: {
            no: "AB123",
            text: "course Outcome 1"
        },
        3: {
            no: "AB123",
            text: "course Outcome 1"
        },
        4: {
            no: "AB123",
            text: "course Outcome 1"
        },
        5: {
            no: "AB123",
            text: "course Outcome 1"
        }
    }
    let parta = [];
    for (let i = 1; i <= 5; i++) {
        let a = <tr className="border-solid border-black border-2 text-left">
            <td className="pr-8 break-all border-r-2 border-black">{questions.partA[i].slno}</td>
            <td className="pr-8 break-all border-r-2 border-black">{questions.partA[i].text}</td>
            <td className="pr-8 break-all border-r-2 border-black">{questions.partA[i].CO}</td>
            <td className="pr-8 break-all border-r-2 border-black">{questions.partA[i].BT}</td>
            <td className="pr-8">{questions.partA[i].year}</td>
        </tr>;
        parta.push(a);
    }
    let course = []
    for (let i = 1; i <= 5; i++) {
        let b = <tr className="border-solid border-black border-2 text-left">
            <td className="pr-6 width2-own border-r-2 border-black">{courseOutcomes[i].no}</td>
            <td className="pr-6 border-r-2 border-black">{courseOutcomes[i].text}</td>
        </tr>;
        course.push(b)
    }
    let obj = []
    for (let i = 1; i <= 5; i++) {
        let b = <tr className="border-solid border-black border-2 text-left">
            <td className="pr-6 width2-own border-r-2 border-black">{courseObjectives[i].no}</td>
            <td className="pr-6 text-left border-r-2 border-black">{courseObjectives[i].text}</td>
        </tr>;
        obj.push(b)
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <div className="flex flex-col justify-center items-center">
                <table className="table-auto border-solid border-2 border-black width-own text-left">
                    <tbody>
                        <tr>
                            <td className="width3-own text-center border-r-2 border-black">LOGO</td>
                            <td className="text-center">CHENNAI INSTITUTE OF TECHNOLOGY<br/>
                                Sarathy Nagar, Pudupedu, Chennai– 600 069.<br/>
                                Internal Assessment -1 April 2022
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-auto border-solid border-2 border-black width-own text-left">
                    <tbody>
                        <tr className="border-solid border-2 border-black">
                            <td className="border-r-2 border-black width2-own">Date/Time</td>
                            <td className="border-r-2 border-black width4-own"></td>
                            <td className="border-r-2 border-black width4-own">Max-Marks</td>
                            <td></td>
                        </tr>
                        <tr className="border-solid border-2 border-black">
                            <td className="border-r-2 border-black">Subject with Code</td>
                            <td className="border-r-2 border-black"></td>
                            <td className="border-r-2 border-black">Time</td>
                            <td className="border-r-2 border-black"></td>
                        </tr>
                        <tr className="border-solid border-2 border-black">
                            <td className="border-r-2 border-black">Branch</td>
                            <td className="border-r-2 border-black"></td>
                            <td className="border-r-2 border-black">Year/Semester</td>
                            <td className="border-r-2 border-black"></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table className="table-auto border-solid border-black border-2 width-own text-left">
                    <thead>
                        <tr>
                            <th>S NO.</th>
                            <th>Course Objective</th>
                        </tr>
                    </thead>
                    <tbody>
                        {obj}
                    </tbody>
                </table><br />
                <table className="table-auto border-solid border-black border-2 width-own text-left">
                    <thead>
                        <tr>
                            <th>CO NO.</th>
                            <th>Course Outcome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {course}
                    </tbody>
                </table>
                <br />
                <table className="table-fixed border-solid border-black border-2 margin-auto width-own">
                    <thead className="border-solid border-black border-2">
                        <tr className="">
                            <th className="width2-own">SL.NO</th>
                            <th className="">Questions</th>
                            <th className="width2-own">CO</th>
                            <th className="width2-own">BT</th>
                            <th className="width2-own">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parta}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default QuestionPreview;