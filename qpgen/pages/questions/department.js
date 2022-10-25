import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
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
            <h1 className="heading-self">Department</h1>
            <p className="paragraph-self">Select department from the list given below</p>
            <Container data={a} route='subject'/>
        </div>
        </div>
        </div>
     );
}
 
export default department;