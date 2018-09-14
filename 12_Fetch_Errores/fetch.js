let url = 'datos.json'
let method = 'GET'

// básico
/* fetch(url, {method: method} )
.then( response => response.json() )
.then( data => mostrarDatos(data) ) */


/* function mostrarDatos(data) {
    console.log(data)
    document.querySelector('#output').innerHTML +=
    JSON.stringify(data)
} */



//Con control de errorres


url = 'datosxx.json'
try {
    fetch(url, {method: method} )
.then( response => {
    if (response.ok){
        console.table(response)
        return response.json()
    }else{
        let msg =response.status + ' : ' + response.statusText
        throw new Error(msg)
    }
    //console.log(response)
    //console.dir(response)
    //return response.json() se ve en consola, body - false y el return gestiona el body
    //Hay que meterlo en if para que funcione el return
}).then( data => mostrarDatos(data) )
}catch{
    mostrarError(error)
}

function mostrarError(status, text){
    document.querySelector('#output').innerHTML =
    status + ':' + text
}

function mostrarDatos(data) {
    console.log(data)
    document.querySelector('#output').innerHTML +=
    JSON.stringify(data)
}



function hacerAlgo() {
    if('Hay un erorr') {
        // gestiono el error
       throw'Error'
    } else {
        // TODO codigo de la funcionalidad
        return x
    }
}







try {
    hacerAlgo()
   
} catch (error) {
}
try {
  hacer_otra_cosa()  
} catch (error) {
    
}
 

