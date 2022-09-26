const QuestionGen = () => {
    let navbar = [
        ['Home', '/dashboard'],
        ['View Questions', '/team'],
        ['Generate Paper', '/projects'],
        ['About', '/reports'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))
    return ( 
        <div>
            <nav className="flex sm:justify-center space-x-4">
                {navbar}
            </nav>
            <h1>
                Generate Question Paper
            </h1>
            <div className="">

            </div>
        </div>
     );
}
 
export default QuestionGen;