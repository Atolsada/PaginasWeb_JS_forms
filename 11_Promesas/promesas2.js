// Mock de una promesa 

function asincP () {
    return new Promise(
        (resolve, reject) =>{
            setTimeout( 
                () => {
                    let number = Math.random() //<--- te da un numero aleatorio entre 0 y 1
                    if (number < 0.7) {
                        // correcto
                        // return true
                        resolve(number)
                    }  else {
                        // incorrecto
                        // return false
                        reject(number)
                    }
                }, 3000)

    }) 
}


asincP()
.then( 
    (response) => { console.log(`Todo bien gracias al ${response}`)},
    (error) => { console.log(`Error debido a ${error}`) }
)
//.catch (
//    (error) => { console.log(`Error debido a ${error}`) }
//)