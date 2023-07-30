const data = require("../public/data/sortedChar.json")
const { writeFile } = require('fs');
// let famous = ["Naruto Uzumaki", "Itachi Uchiha", "Sasuke Uchiha","Kakashi Hatake", "Jiraiya", "Minato Namikaze", "Shikamaru Nara", "Gaara", "Hinata Hyūga", "Madara Uchiha", "Hashirama Senju","Tobirama Senju","Hiruzen Sarutobi", "Nagato", "Obito Uchiha", "Rock Lee", "Neji Hyūga", "Deidara", "Orochimaru", "Might Guy", "Sasori", "Tsunade", "Shisui Uchiha", "Temari", "Konan", "Kushina Uzumaki"]
for(let i =0;i<data.length;i++){
    data[i].id = i
}
writeFile('public/data/sortedIdChar.json', JSON.stringify(data), (err)=>{console.log("done",err)})