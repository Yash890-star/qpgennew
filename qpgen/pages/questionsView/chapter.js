import Navbar from "../../components/navbar";
const Chapter = () => {
      let chapter = ['1','2','3','4','5'].map((chap) => (
        <button className="border-2 rounded border-black w-20">{chap}</button>
      ))
    return ( 
        <div>
            <Navbar/>
            <h1 className="text-center text-5xl mt-6 ">
                Chapter
            </h1>
            <div className="w-96 mx-auto grid grid-cols-4 gap-4 mt-10">
                {chapter}
            </div>
        </div>
     );
}
 
export default Chapter;