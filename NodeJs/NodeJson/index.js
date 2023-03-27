const bioData = {
    name : "Adnan",
    age : 27,
    Company : "Imtiaz Super Market"
}

const jsonData = JSON.stringify(bioData)
const orignalData = JSON.parse(jsonData)
console.log(orignalData)