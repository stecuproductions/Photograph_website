

const Navbar = () =>{
        
    const navbarItems = [
        {Name: "O mnie", Link : "/"},
        {Name: "Portfolio", Link : "/portfolio"},
        {Name: "Kontakt", Link : "/kontakt"},
    ]
    return(
        <nav aria-label="Główna nawigacja" className="flex flex-col items-center gap-4 ">
            <div id="logo" className="flex flex-col items-center justify-center gap-2  font-header">
                <h1 className="text-4xl md:text-6xl uppercase">Julia Nowak</h1>
                <h1 className="text-2xl md:text-3xl  uppercase ">Photography</h1>
            </div>
            <div className="flex  flex-row flex-wrap items-center gap-4 justify-between">
                {navbarItems.map((item, index) => (
                    <a key={index}  className="text-xl md:text-2xl text-secondary font-text" href={item.Link}>{item.Name}</a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;