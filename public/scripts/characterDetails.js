const data = require("../data/sortedIdChar.json")
const CharacterDetails = function({name}){
  let gender = {
    "Male":"♂",
    "Female": "♀",
    "male": "♂",
    "female": "♀"
  }
    let char = data.find(c => c.name === name)
    if(!char) return <h1 style={{color:"white"}}>Character Not Found!! Please check link again.</h1>

    let count = 0;//to  make first li active maybe
    let anotherCount = 0;
    return <>
<div className="characterMainDiv">
  <h1 className="charName" data-sex={gender[char.personal?.sex]||'?'}>{char.name}</h1>
  <ul className="charList">
    {
    Object.keys(char).map((c,i) => {
      if(["name","images","id"].includes(c)) return <></>
      count++;
      return <li key={c} data-for={c} className={count==1?'active':''}>{titleCase(c)}</li>
    })
    }
    {/* <li data-for="Debut" className="active">Debut</li>
    <li data-for="Personal">Personal</li>
    <li data-for="Family">Family</li>
    <li>Rank</li>
    <li>Debut</li>
    <li>Personal</li>
    <li>Family</li>
    <li>Rank</li> */}
  </ul>
  <div className="charImg" style={{backgroundImage:`url(${char.images[0]})`||'url(/no-image.png)'}}></div>
  {
    Object.keys(char).map((c,i) => {
      if(["name","images","id"].includes(c)) return<></>
      anotherCount++
      return <div className={`charDetails ${anotherCount==1?'visible':''}`} id={c}>
        
          <p className="characterDetailsP">{Obj2Html(char[c])}</p>
        
      </div>
  })}
  {/* <div className="charDetails visible" id="Debut">
    <h2>Debut</h2>
    <p><span><b>manga: </b></span><span>Naruto Chapter #648</span></p>
    <p><span><b>anime: </b></span><span>Naruto episode #648</span></p>
    <p><span><b>manga: </b></span><span>Naruto Chapter #648</span></p>
    <p><span><b>anime: </b></span><span>Naruto episode #648</span></p>
    <p><span><b>manga: </b></span><span>Naruto Chapter #648</span></p>
    <p><span><b>anime: </b></span><span>Naruto episode #648</span></p>
  </div>
  <div className="charDetails" id="Personal">
    <h2>Personal</h2>
    <p><span><b>manga: </b></span><span>Naruto Chapter #648</span></p>
    <p><span><b>anime: </b></span><span>Naruto episode #648</span></p>
  </div> */}
</div>
</>
}

function Obj2Html(obj){
  if(!obj) return <></>
  if(Array.isArray(obj)&&!isObject(obj[0])) return <><b>{obj.map((e)=> <>{e}<br/></>)}</b></>

  return Object.keys(obj).map(key=>{
    if(isObject(obj[key])) return <><span className="spanh3"><b><u>{titleCase(key)}: </u></b></span><>{Obj2Html(obj[key])}</></>
    if(Array.isArray(obj[key]))  return <><span><b>{titleCase(key)}: </b></span><span>{obj[key].join(",  ")}</span><br/></>
    return <><span><b>{titleCase(key)}: </b></span><span>{obj[key]}</span><br/></>
  })
}

function titleCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/^./, function(firstChar) {
                return firstChar.toUpperCase();
            });
}

function isObject(value) {
  return (
      typeof value === 'object' &&    
      value !== null &&                
      value.constructor === Object/*  &&  
      !Array.isArray(value)    */         
  );
}

export default CharacterDetails;