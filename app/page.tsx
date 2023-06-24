import Image from 'next/image'
import '../css/page.css'
import { Courgette } from 'next/font/google'
import Script from 'next/script';
import FewFamousChar from "../public/scripts/topCharacters"
const courgette = Courgette({
  weight: '400',
  subsets: ["latin"]
}
);
export default function Home() {
  
  return (
    <>
      <header className="header">
        {/* <div className="hoverWrapper">
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
          <div className="hoverCircle"><Image className="hoverRasengan" src="/media/rasengan.gif" height={1200} width={1200} alt=""/></div>
        </div> */}
        <h1 className="hoverLogo">NARUTOVERSE</h1>
        <h4 className="hoverSlogan">The encyclopedia of anime/manga series "Naruto"</h4>
      </header>
      <hr style={{rotate:"-1deg",margin:"1vw 0"}}/>
      <hr style={{rotate:"5deg",margin:"0 0 6vw"}}/>
      <div style={{backgroundColor:"black",display:"grid",justifyContent:"center"}}>
        <h1 style={{justifySelf:"flex-start",marginLeft:"clamp(20px,3vw,60px)",fontSize:"clamp(35px,3vw,70px)",color:"white",letterSpacing:"2px"}}>Top Characters</h1>
      <section className='topCharactersSection'>
        <FewFamousChar/>
      </section>
      </div>
      <Script src='scripts/hoverCircle.js'/>
  </>
  )
}
