import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
import Heading from "../../components/heading";
const degree = () => {
    let router = useRouter()
    let a = ['Bachelor of Engineering (BE)', 'Bachelor of Technology (BTech)']
    return ( 
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3"/>
        <h1 className="logo ml-3">QPGEN</h1>
        </div>
        <div className='flex justify-center items-center mt-14 mb-14 text-white'>
        <div className='flex flex-col justify-center items-start h-full'>
            <Heading head='Degree' desc='Select Degree from the list given below'/>
            <Container data={a} route='semester'/>
        </div>
        </div>
        </div>
     );
}
 
export default degree;