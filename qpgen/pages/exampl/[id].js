

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  console.log(paths)
    return {
      paths,
      fallback: false
    }
  }
  export async function getStaticProps(context) {
    const a = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+a)
    const data = await res.json()
    return {
        props: {
            ninja: data
        }
    }
  }

const Details = ({ninja}) => {
    return (
      <div>
        <h1>Details Page</h1>
        <h1>{ninja.name}</h1>
      </div>
    );
  }
  
  export default Details;

  