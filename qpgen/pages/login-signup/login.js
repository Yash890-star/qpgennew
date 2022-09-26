const Login = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <h1 className="text-7xl mb-5">Sign In</h1>
            <label htmlFor='college-mail'></label>
            <input placeholder="Mail" className="border-2 h-10 border-black w-64 mb-2 rounded-md"  name='college-mail' type='mail'/>
            <label htmlFor="password"></label>
            <input placeholder='Password' className='border-2 border-black w-64 mb-2 rounded-md h-10' name="password" type='password'/>
            <button className="border-2 border-black w-64 rounded-lg h-8 " >Continue</button>
            <a className="mt-3">Dont Have an account?</a>
            <button className="border-2 border-black w-64 rounded-lg h-8">Create an account</button>
        </div>
     );
}
 
export default Login;