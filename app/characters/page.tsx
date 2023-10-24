import "@css/charactersHome.css"
import "@css/page.css"
import {FamousChars} from "@components/charactersComponents"
export default function Home(){
    return (
        <section style={{ backgroundColor: "black", display: "grid", justifyContent: "center", maxWidth: "1200px", margin: "auto", marginTop: "5vw" }}>
        <h1 style={{ justifySelf: "flex-start", marginLeft: "clamp(20px,3vw,60px)", fontSize: "clamp(25px,3vw,70px)", color: "white", letterSpacing: "2px" }}>Top Characters</h1>
        <div className='topCharactersSection'>
          <FamousChars max={8}/>
        </div>
      </section>
    )
}