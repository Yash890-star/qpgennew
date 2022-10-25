import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
const subject = () => {
    const router = useRouter()
    let a = ['Data Science', 'Fundamentals of Data Science', 'Digital Processing', 'Object Oriented Programming', 'Discrete Mathematics']
    return ( 
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3"/>
        <h1 className="logo ml-3">QPGEN</h1>
        </div>
        <div className="flex justify-center items-center bgcolor mt-14 mb-14 text-white">
        <div className='flex flex-col justify-center items-start height'>
            <h1 className="heading-self">Subject</h1>
            <p className="paragraph-self">Select subject from the list given below</p>
            <Container data={a} route='unit'/>
        </div>
        </div>
        </div>
     );
}
 
export default subject;