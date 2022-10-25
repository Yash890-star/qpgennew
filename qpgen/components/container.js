import {BiChevronRight} from 'react-icons/bi';
import Link from 'next/link'
const Container = (props) => {
    let ref = '/questions/'+props.route
    let a = props.data.map((val) => {
        return(
            <Link href={ref}><button className='py-3 w-5/6 text-left' key={val}>{val}<span className='sampl text-md mt-2'><BiChevronRight className='sampl text-md mt-2'/></span></button></Link>
        )
    })
    return ( 
            <div className='flex flex-col mt-8 container-self grow items-center w-full rounded-md divide-y divide-slate-400'>
                {a}
            </div>
     );
}
 
export default Container;