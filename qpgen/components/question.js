const Question = (props) => {
    console.log(props.data)
    return ( 
        <td className="pl-2">{props.data}</td>
     );
}
 
export default Question;