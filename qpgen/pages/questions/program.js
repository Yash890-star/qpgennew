import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
import Heading from "../../components/heading";
const program = () => {
    const router = useRouter()
    let a = ['Under Graduate (UG)', 'Post Graduate (PG)']
    return ( 
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3"/>
        <h1 className="logo ml-3">QPGEN</h1>
        </div> 
        <div className="flex justify-center items-center bgcolor mt-14 mb-14 text-white">
        <div className='flex flex-col justify-center items-start height'>
            <Heading head='Program' desc='Select Program from the list given below'/>
            <Container data={a} route='degree'/>
        </div>
        </div>
        </div>
     );
}
 
export default program;