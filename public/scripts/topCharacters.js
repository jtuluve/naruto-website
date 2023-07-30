
const data = require("public/data/topCharacters.json");

function FamousChar(obj){
    let html =[];
    let max = obj.max||data.length
    max = max<0?0:max;
    max = max>data.length?data.length:max;
    for(let i in data){
      if(i>=max) break;
      let item = data[i]
        let name = item.name;
        html.push(<div className='famCard' style={{backgroundImage: "url("+item.images[0]+")"}}>
        <p className='famname'>{item.name}</p>
      </div>)
    }
    return html;
}
export default FamousChar;