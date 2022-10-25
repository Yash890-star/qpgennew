import Navbar from "../../components/navbar";
import Link from 'next/link'
import Router, {useRouter} from 'next/router';

export async function getStaticProps() {
  const allPostsData = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await allPostsData.json();
  
  return {
    props: {
      datanew : data
    },
  };
}


const one = ( {datanew} ) => {
    console.log(datanew)
    const router = useRouter();
    let semesters = [1, 2, 3, 4].map((sem) => (
        <Link href={router.pathname+'/'+sem.toString()} ><button className="border-2 rounded border-black w-20" key={sem.toString()}>{sem}</button></Link>
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
 
export default one;