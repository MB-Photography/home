
const slider = slide => {
    if(slide.strater){
        return (
            <div className="slide starter" style={{'backgroundImage':`url(${slide.image})`}}>
                <div className="mich-name"><h1>MICHAL BONIECKI</h1><h4>A Photographer.</h4></div>
            </div>
            )
    } else if(slide.header && slide.text && slide.image){
        const {header, text, image} = slide
        return(
            <div className={"slide people " + header } style={{'backgroundImage':`url(${image})`}}>
                <div className={"nfo " + (header==='PEOPLE'?" correction":"")}>
                    <h3>{header}</h3>
                    <p>{text}</p>
                    <a href="https://m.facebook.com/pg/MichalBonieckiPhotography/photos/?tab=album&album_id=102853731700085&ref=bookmarks&mt_nav=1" target="_blank"><div className="button" >GALLERY</div></a>
                </div>
            </div>
        )
    }
}

export default (props) => {
    const {sliderIndex, slides} = props
    return (
        <div className="body">
            {
                slider(slides[sliderIndex])
            }
        </div>
    )
}