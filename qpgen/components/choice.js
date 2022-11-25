const Choice = (props) => {
    return ( 
        <table>
                <tbody>
                <tr>
                    <td className='text-center font-bold' colSpan={props.subdivsel+props.optsel+2}>Part-{props.part}-(5x2=10 marks)<br />(Answer all the questions)</td>
                    <td className='text-center font-bold px-2'>CO</td>
                    <td className='text-center font-bold px-2'>BT<br />Level</td>
                    <td className='text-center font-bold px-2'>Univ<br />QP</td>
                    <td className='text-center font-bold px-2'>Mark<br/>Allocated</td>
                </tr>
                </tbody>
                <tbody>
                {props.store}
                </tbody>
                </table>
     );
}
 
export default Choice;