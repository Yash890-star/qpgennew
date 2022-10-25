import Navbar from "../../components/navbar";
const questionAdd = () => {

    let finalObect = {
        'mark': '',
        'bt':[],
        'difficulty':'',
        'prevYear': []
    }

    let markstore = ['2','2-5','3-5','7-10','10-13','13-16'].map((mark) => {
        return(<button name='mark' className="border min-width border-black rounded-full mx-2 px-1" onClick={selected} value={mark}>{mark}</button>)
    })
    let bloomtaxonomy = ['k1','k2','k3','k4','k5'].map((bt) => {
        return(<button className="border min-width border-black rounded-full mx-2 px-1" value={bt}>{bt}</button>)
    })
    let difficulty = ['Easy','Medium','Hard'].map((diff) => {
        return(<button className="border min-width border-black rounded-full mx-2 px-1" value={diff}>{diff}</button>)
    })
    let prevYear = ['2016','2017','2018','2019','2020'].map((year) => {
        return(<button className="border min-width border-black rounded-full mx-2 px-1" value={year}>{year}</button>)
    })
    
    function selected(event){
        event.target.classList.toggle('bg-emerald-500')
        event.target.classList.toggle('border-black')
        console.log(event)
    }

    return ( 
        <div>
        <Navbar/>
        <h1 className="style-1 mx-auto text-xl mt-5">Add Question</h1>
        <div className='flex flex-col align-center mt-4 justify-center style-1 mx-auto'>  
            <div className="question-div my-2">
            <input type="text" className='border w-full rounded border-solid border-black h-14'/>
            <span className='question-span px-1 py-0'>Question</span>
            </div>
            <div className="question-div my-2">
            <input type="text" className='border w-full rounded border-solid border-black h-14'/>
            <span className='question-span px-1'>Answer</span>
            </div>
            <div className='question-div'>
            <div className="border border-solid border-black h-14 my-2 flex rounded flex-row items-center justify-start">
                {markstore}
            </div>
            <span className='mark-span px-1'>Mark</span>
            </div>
            <div className='question-div'>
            <div className=" border border-solid my-2 border-black h-14 flex rounded items-center">
                {bloomtaxonomy}
            </div>
            <span className='mark-span px-1'>Bloom Taxonomy</span>
            </div>
            <div className='question-div'>
            <div className=" border rounded border-solid border-black h-14 my-2 flex items-center">
                {difficulty}
            </div>
            <span className='mark-span px-1'>Difficulty</span>
            </div>
            <div className='question-div'>
            <div className="border rounded border-solid my-2 border-black h-14 flex items-center">
                {prevYear}
            </div>
            <span className='mark-span'>Previous Year</span>
            </div>
            <button className="border rounded border-solid border-black h-10 self-start my-1 w-20">Save</button>
        </div>
        <div>

        </div>
        </div>
     );
}
 
export default questionAdd;