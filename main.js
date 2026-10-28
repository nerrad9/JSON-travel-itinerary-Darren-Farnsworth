const fs = require("fs")

// Originally I tried to type "Elmo Monster", but I had a typo, and now we will both be going down this funny path
let fin = {"Name":"Elmo Mobster", "Nickname":"Don 'Mo", 'Contact':{"Phone":"619-943-ELMO", "Email":"Web.ShowKids@sesame.org"}, "Destinations":{}}


// Top 9 cities by crime
const cities = ["Memphis", "Oakland", "St. Louis", "Detroit", "Alexandria", "New Orleans", "Cleveland", "Monroe", "Baltimore"]
let activities = ["Collect protection payments", "Loan money to police", "Open gambling hall", "Recieve mule shipment", "Fund unions", "Cook books at laundromat"]

for (let i=0; i<cities.length; i++){
    let d = {}
    d["Arrival"] = `2027 0${i+1} ${(~~(Math.random()*4))+10}`//crazy coincidence that i did the top 9 cities instead of 10 so I dont have to worry about double digit months wow crazy
    d["Departure"] = `2027 0${i+1} 28`
    let temp = {}
    // Shuffle it up
    activities = activities.sort(() => Math.random()-0.5)
    for (let a=0; a<3;a++){
        temp[`0${5+(a*2)}00`] = activities[a] //crazy coincidence that elmo is a morning person so I dont have to worry about double digit hours wow crazy
    }
    d["Activities"] = temp
    fin["Destinations"][cities[i]] = d

}
fs.writeFileSync('itinerary.json', JSON.stringify(fin, null, 2), 'utf8');