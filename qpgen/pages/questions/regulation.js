import Container from "../../components/container"
import Heading from "../../components/heading"
import Link from 'next/link'
const regulations = () => {
    let a = ['R-2007', 'R-2013', 'R-2017', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021', 'R-2021']
    return ( 
        <div className="bgcolor text-white">
        <div className="flex ml-10 mt-10">
        <h1 className="logo ml-3">QPGEN</h1>
        </div>
        <div className='flex justify-center items-center bgcolor mt-14 mb-14 text-white'>
        <div className='flex flex-col justify-center items-start height'>
            <Heading head='Regulation' desc='Select regulation from the list given below'/>
            <Container data={a} route='program'/>
        </div>
        </div>
        </div>
     );
}
 
export default regulations;