const Heading = (props) => {
    return ( 
        <div>
            <h1 className='heading-self'>{props.head}</h1>
            <p  className='paragraph-self'>{props.desc}</p>
        </div>
     );
}
 
export default Heading;