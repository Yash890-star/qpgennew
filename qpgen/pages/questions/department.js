import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
import Heading from "../../components/heading";
const department = () => {
    const router = useRouter()
    let a = ['Computer Science', 'Mechanical', 'Electrical and Electronics', 'Bio Medical', 'Electrical and Communications']
    return ( 
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3"/>
        <h1 className="logo ml-3">QPGEN</h1>
        </div>
        <div className='flex justify-center items-center bgcolor mt-14 mb-14 text-white'>
        <div className='flex flex-col justify-center items-start height'>
            <Heading head='Department' desc='Select Department from the list given below'/>
            <Container data={a} route='subject'/>
        </div>
        </div>
        </div>
     );
}
 
export default department;