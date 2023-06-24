const data = require("../public/data/characters.json")
// const { writeFile } = require('fs');
let newdata = []
// let famous = ["Naruto Uzumaki", "Itachi Uchiha", "Sasuke Uchiha","Kakashi Hatake", "Jiraiya", "Minato Namikaze", "Shikamaru Nara", "Gaara", "Hinata Hyūga", "Madara Uchiha", "Hashirama Senju","Tobirama Senju","Hiruzen Sarutobi", "Nagato", "Obito Uchiha", "Rock Lee", "Neji Hyūga", "Deidara", "Orochimaru", "Might Guy", "Sasori", "Tsunade", "Shisui Uchiha", "Temari", "Konan", "Kushina Uzumaki"]
for(let item of data){
    if(item.name!=encodeURIComponent(item.name).replace(/%20/g," "))
        console.log(item.name)
}
// writeFile('public/data/topCharacters.json', JSON.stringify(data), (err)=>{console.log("done",err)})