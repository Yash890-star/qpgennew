import Container from "../../components/container"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router"
import Heading from "../../components/heading";
const unit = () => {
    const router = useRouter()
    let a = ['U1', 'U2', 'U3', 'U4', 'U5']
    return (
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <AiOutlineArrowLeft onClick={() => router.back()} className="logo mt-3"/>
        <h1 className="logo ml-3">QPGEN</h1>
        </div>
        <div className='flex justify-center items-center bgcolor mt-14 mb-14 text-white'>
            <div className='flex flex-col justify-center items-start height'>
                <Heading head='Unit' desc='Select Unit from the list given below'/>
                <Container data={a} route='flexquestion'/>
            </div>
        </div>
        </div>
    );
}

export default unit;