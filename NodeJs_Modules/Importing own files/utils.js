console.log('utlis.js')

//This variable can't be used in app.js directly, 
const name = "Nitesh"

// So we have to use explicitly this by adding this line
// module.exports = name


const add = function(a,b){
    return a + b
}

module.exports = add

