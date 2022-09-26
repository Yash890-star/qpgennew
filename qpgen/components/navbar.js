const Navbar = () => {
    let navbar = [
        ['Home', '/dashboard'],
        ['View Questions', '/team'],
        ['Generate Paper', '/projects'],
        ['About', '/reports'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 text-slate-100 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))
    return ( 
        <div>
            <nav className="flex sm:justify-center h-20 space-x-4 items-center bg-slate-700">
                {navbar}   
            </nav>            
        </div>
     );
}
export default Navbar;