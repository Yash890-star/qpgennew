import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
import Heading from "../../components/heading";
const semester = () => {
    const router = useRouter()
    let a = ['Semester-1','Semester-2','Semester-3','Semester-4','Semester-5','Semester-6','Semester-7','Semester-8','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9','Semester-9']
    return ( 
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3"/>
        <h1 className="logo ml-3">QPGEN</h1>
        </div>
        <div className="flex justify-center items-center bgcolor mt-14 mb-14 text-white">
        <div className='flex flex-col justify-center items-start'>
            <Heading head='Semester' desc='Select Semester from the list given below'/>
            <Container data={a} route='department'/>
        </div>
        </div>
        </div>
     );
}
 
export default semester;