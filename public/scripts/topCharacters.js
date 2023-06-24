const axios = require('axios');
const data = require("public/data/topCharacters.json");

function FewFamousChar(){
    let html =[];
    for(let item of data){
        let name = item.name;
        html.push(<div className='famCard' style={{backgroundImage: "url("+item.images[0]+")"}}>
        <p className='famname'>{item.name}</p>
      </div>)
    }
    return html;
}
export default FewFamousChar;