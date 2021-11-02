import logo from './logo.svg';
import './styles/_resetter.css';
import './styles/_header.min.css'
import './styles/_boody.min.css'
import './styles/_rwd.min.css'
import Navbar from './modules/Navbar'
import Boody from './modules/Boody'
import { useState, useEffect } from 'react'
import backgroundImg from './images/PicsArt_07-29-11.43.37MIN.jpg'
import contactImg from './images/PicsArt_07-30-12.16.02MIN.jpg'
import artImg from    './images/o3.jpg'
import kidsImg from   './images/PicsArt_07-30-12.17.17MIN.jpg'
import peopleImg from './images/PicsArt_07-29-11.47.55MIN.jpg'
import socialImg from './images/PicsArt_07-30-12.29.54MIN.jpg'
import thingsImg from './images/PicsArt_08-04-08.13.54.jpg'
import instagramIco from './images/instagramIco.png'
import facebookIco from './images/facebookIco.png'
const facebookLink = "https://m.facebook.com/102838148368310"
const instagramLink = "https://www.instagram.com/michalbonieckiphotography"

const socialLinkz = () => {
  return (
    <div>
      <h5>check me out on social media</h5>
      <div className="social-links">
        <a href={facebookLink} target="_blank" rel="noreferrer" >
          <img className="social-media-ico" src={facebookIco}/>
        </a>
        <a href={facebookLink} target="_blank" rel="noreferrer" >facebook</a>
      </div>
      <div className="social-links">
        <a href={instagramLink} target="_blank" rel="noreferrer" >
          <img className="social-media-ico" src={instagramIco}/>
        </a>
        <a href={instagramLink} target="_blank" rel="noreferrer" >instagram</a>
      </div>
    </div>
  )
}
const contactNFO = () => {
  return(
    <div>
      <h5>are you ready to arrange a session?</h5>
      <div className="social-links">
        <i className="material-icons mIco">phone_iphone</i>
        <span>07916832210</span>
      </div>
      <div className="social-links">
        <i className="material-icons mIco">email</i>
        <a class="email button" href="mailto:bonyeq@gmail.com" target="_blank" rel="noopener noreferrer">
          bonyeq@gmail.com
        </a>
      </div>
    </div>
  )
}

const slides = {
    starter: {
      strater:true,
      header:'starter',
      image: backgroundImg
    },
    people:{
        header:'PEOPLE',
        text:'one on one photoshooting outdoors or indoors , open to ideas, loves creative projects and creative people',
        image: peopleImg
    },
    kids:{
        header:'KIDS',
        text:'a little child himself, sometimes has more fun than the little ones. very creative person which young models admire.',
        image: kidsImg
    },
    art:{
        header:'ART',
        text:'he knows stuff, he thinks stuff, and then make incredebily projects happen that you oculd easily see in commercials ',
        image: artImg
    },
    social:{
      header:'SOCIAL',
      text:socialLinkz(),
      image: socialImg
    },
    contact:{
      header: 'CONTACT',
      text:contactNFO(),
      image: contactImg
    },
    things:{
        header:'THINGS',
        text:'wild nature, cars, stuff, photoshooting outdoors or indoors , open to ideas, loves creative projects and creative people.',
        image: thingsImg
    },
}
function App() {
  const [tiktok, setTikTok] = useState('starter')
  // useEffect(()=>{
  //     const int = setInterval( ()=> {
  //       setTikTok(tiktok+1)
  //       if(tiktok === 3 ) setTikTok(0)
  //       console.log(tiktok)
  //     } ,2000)
  //     return ()=>clearInterval(int)
  // })
  const onClick = (key) => {
    setTikTok(key)
  }
  return (
    <div className="App">
      <Navbar onClick={onClick}/>
      <Boody sliderIndex={tiktok} slides={slides}/>
    </div>
  );
}

export default App;
