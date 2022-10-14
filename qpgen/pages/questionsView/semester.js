import '../../styles/Home.module.css'
import Navbar from '../../components/navbar';
const Semester = () => {
  let semesters = [1, 2, 3, 4].map((sem) => (
    <button className="border-2 rounded border-black w-20" key={sem.toString()}>{sem}</button>
  ))
  return (
    <div>
      <Navbar/>
      <div>
      <h1 className="text-center text-5xl mt-6 ">Semesters</h1>
      <div className="w-96 mx-auto grid grid-cols-4 gap-4 mt-10">
      {semesters}
      </div>
      </div>
    </div>
  );
}
export default Semester;