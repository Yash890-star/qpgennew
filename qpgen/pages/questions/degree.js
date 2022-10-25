import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
const degree = () => {
    let router = useRouter()
    let a = ['Bachelor of Engineering (BE)sadddddddddddddddddddddddddddddddddddddddddddddd', 'Bachelor of Technology (BTech)']
    return ( 
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3"/>
        <h1 className="logo ml-3">QPGEN</h1>
        </div>
        <div className='flex justify-center items-center mt-14 mb-14 text-white'>
        <div className='flex flex-col justify-center items-start h-full'>
            <h1 className="heading-self">Degree</h1>
            <p className="paragraph-self">Select degree from the list given below</p>
            <Container data={a} route='semester'/>
        </div>
        </div>
        </div>
     );
}
 
export default degree;