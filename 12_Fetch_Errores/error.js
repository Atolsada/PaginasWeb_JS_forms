function main(){
    let msg = location.search
    console.log(msg)
    msg = msg.replace(/\%20/g, ' ')
    msg = msg.substring(3)
    console.log(msg)
    document.querySelector('#error').innerHTML = msg
//console.log('Estoy en error.html')

}



document.addEventListener('DOMContentLoaded', main)

