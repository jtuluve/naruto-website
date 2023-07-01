const data = require("../public/data/characters.json")
const { writeFile } = require('fs');
let newdata = []
// let famous = ["Naruto Uzumaki", "Itachi Uchiha", "Sasuke Uchiha","Kakashi Hatake", "Jiraiya", "Minato Namikaze", "Shikamaru Nara", "Gaara", "Hinata Hyūga", "Madara Uchiha", "Hashirama Senju","Tobirama Senju","Hiruzen Sarutobi", "Nagato", "Obito Uchiha", "Rock Lee", "Neji Hyūga", "Deidara", "Orochimaru", "Might Guy", "Sasori", "Tsunade", "Shisui Uchiha", "Temari", "Konan", "Kushina Uzumaki"]
data.sort((a,b)=>a.name>b.name?1:-1)
writeFile('public/data/sortedChar.json', JSON.stringify(data), (err)=>{console.log("done",err)})