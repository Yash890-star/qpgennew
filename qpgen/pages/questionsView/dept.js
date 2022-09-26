import Navbar from "../../components/navbar";
const Departments = () => {
    let department = ['CSE', 'ECE', 'AIDS', 'EEE', 'MECH', 'CSBS', 'CIVIL', 'MCTR'].map((sem) => (
        <button className="border-2 rounded border-black w-20">{sem}</button>
      ))
    
    return ( 
        <div>
            <Navbar/>
            <h1 className="text-center text-5xl mt-6 ">
                Departments
            </h1>
            <div className="w-96 mx-auto grid grid-cols-4 gap-4 mt-10">
                {department}
            </div>
        </div>
     );
}
 
export default Departments;