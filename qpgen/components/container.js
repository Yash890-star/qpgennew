import {BsFillCaretRightFill} from 'react-icons/bs';
import Link from 'next/link'
const Container = (props) => {
    let ref = '/questions/'+props.route
    let a = props.data.map((val) => {
        return(
            <div className='flex items-center'>
                <Link href={ref}><button className='pl-3 text-left button-self basis-5/6 self-width my-3'>{val}</button></Link>
                <BsFillCaretRightFill className='basis-auto ml-5'/>
            </div>
        )
    })
    return ( 
                <div className='container-self rounded-md mt-10 divide-y divide-slate-400'>
                {a}
                </div>
     );
}
 
export default Container;