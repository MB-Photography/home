const NavButton = (text, onClick) => {
    return (
        <div className={"Navbar-button " + text} onClick={()=>onClick(text)} >{text}</div>
    )
}
export default ({onClick}) => {
    return (
        <div className="Navbar">
            <div className="left Menu">
                {NavButton('people',onClick)}
                {NavButton('things',onClick)}
                {NavButton('kids',onClick)}
            </div>
            <div className="Navbar-middle" onClick={()=>{onClick('starter')}}>MB PHOTOGRAPHY</div>
            <div className="right Menu">
            <a className="Navbar-button" href="https://m.facebook.com/pg/MichalBonieckiPhotography/photos/?tab=album&album_id=102853731700085&ref=bookmarks&mt_nav=1" target="_blank">
                <div className="Navbar-button">gallery</div>
            </a>
                {NavButton('social',onClick)}
                {NavButton('contact',onClick)}
            </div>
        </div>
    )
}