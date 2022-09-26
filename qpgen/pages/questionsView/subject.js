import Navbar from "../../components/navbar";
const Subjects = () => {
      let subjects = ['DataStructures', 'DiscreteMathematics', 'OOPS'].map((sem) => (
        <button className="border-2 rounded border-black w-40">{sem}</button>
      ))
    return ( 
        <div>
            <Navbar/>
            <h1 className="text-center text-5xl mt-6 ">
                Subjects
            </h1>
            <div className="w-1/3 mx-auto grid grid-cols-3 gap-4 mt-10">
                {subjects}
            </div>
        </div>
     );
}
 
export default Subjects;