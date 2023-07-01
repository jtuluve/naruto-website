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
        <h1 className="headerLogo">NARUTOVERSE</h1>
        <h4 className="headerSlogan">The encyclopedia of anime/manga series "Naruto"</h4>
      </header>
      <section className="mcWrapper">
        <div className="mcRedBox"></div>
        <h1 className="mcNameBehind"><span className="mcspan1">NARUTO</span> <span className="mcspan2">UZUMAKI</span></h1>
        <img alt="Naruto" className="mcImg" src="/media/narutoSageMode.png"/>
        <h1 className="mcNameFront">NARUTO UZUMAKI</h1>
        <h1 className="mcHeading">The protagonist</h1>
        <p className="mcPara"><span style={{ fontSize: "150%" }}>Naruto Uzumaki</span>, a resilient ninja, overcame a lonely past and the immense suffering he endured, to become a symbol of determination. With the Nine-Tailed Fox's power within him, he inspired others, forged strong bonds, and showed the strength of hope. Naruto's unwavering spirit made him a legendary hero in anime.</p>
      </section>
      <hr style={{ rotate: "-1deg", margin: "1vw 0", border: "1px solid #808080a6" }} />
      <section style={{ backgroundColor: "black", display: "grid", justifyContent: "center", maxWidth: "1200px", margin: "auto", marginTop: "5vw" }}>
        <h1 style={{ justifySelf: "flex-start", marginLeft: "clamp(20px,3vw,60px)", fontSize: "clamp(25px,3vw,70px)", color: "white", letterSpacing: "2px" }}>Top Characters</h1>
        <div className='topCharactersSection'>
          <FewFamousChar />
        </div>
      </section>
      <Script src='scripts/hoverCircle.js' />
    </>
  )
}
