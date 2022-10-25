const Navbar = () => {
    let navbar = [
        ['Route-1', '/dashboard'],
        ['Route-2', '/team'],
        ['Route-3', '/projects'],
        ['Route-4', '/reports'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900" key={title}>{title}</a>
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