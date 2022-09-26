const SignUp = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <h1 className="text-5xl mb-5">Create New account</h1>
            <label htmlFor="name"></label>
            <input placeholder="Name" className="border-2 border-black w-64 rounded-md h-10 mb-2" name="name" type='text'/>
            <label htmlFor="email"></label>
            <input placeholder='Email' className="border-2 border-black w-64 rounded-md h-10 mb-2" name="email" type='email'/>
            <label htmlFor="password"></label>
            <input placeholder='Password' className="border-2 border-black w-64 rounded-md h-10 mb-2" name='password' type='password'/>
            <label htmlFor="confirm-password"></label>
            <input placeholder="Confirm-password" className="border-2 border-black w-64 rounded-md h-10 mb-2" name='confirm-password' type='password'/>
            <button className="border-2 border-black w-64 rounded-md h-8 mb-4">Create new account</button>
            <a className="mb-1">Already have an account?</a>
            <button className="border-2 border-black w-64 rounded-md h-8 mb-2">Sign In</button>
        </div>
     );
}
 
export default SignUp;