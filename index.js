require('dotenv').config();
const server = require('./app/server')

const port = process.env.PORT;


// const spells = require('./data/json/allSpells1.json')

// console.log(Object.keys(spells))
// var count=0
// var allKeys = Object.keys(spells[0])
// console.log(allKeys[3])
// for (let prop in spells) {
// var i = 0
// for (i = 0 ; i < spells.length; i++) {
    // for (i = 0 ; i < 10; i++) {

    // if (spells[i]['casting_time'] ) {
    //     console.log(spells[i]["casting_time"])
    // }

    // for (x=0; x<allKeys.length; x++) {

        // var test123 = allKeys[x]
        // console.log(spells[i][test123])
        

    // }
    
}
// console.log(i)
// console.log(prop.allKeys[3])

    //     // allKeys = Object.keys(prop)
//     // allKeys = prop
//     console.log(prop.keys())

//     count++
// }


// console.log(allKeys)






server.listen(port, () => {
    console.log(`server is running on: http://localhost:${port}`)
})