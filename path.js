const path = require('path')

//console.log(__filename)// returns whole directory with filename
// console.log(__dirname)// returns wholes directory

//console.log(path.basename(__filename))// returns last element in directory(filename)
// console.log(path.basename(__dirname))// returns last element in directory(current directory)

// console.log(path.parse(__filename))// returns extension name
//console.log(path.format(path.parse(__filename)))// returns directory string
// console.log(path.parse(__dirname))// no extension name no return
// console.log(path.isAbsolute(__dirname))// no extension name no return
console.log(path.join("node","host"));
