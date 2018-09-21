export class Sample{
    constructor(){

    }

    render(){ // Mod A
        return '<header><h1>Hola</h1></header>'
    }

    renderNodo(){ // Mod B
        //let nodo = document.createElement('header')
        //nodo.innerHTML = '<h1>Hola</h1>'
        //return nodo

        // Mod B-1
        return document.createElement('header').innerHTML = '<h1>Hola</h1>'
    }

}

//////////////

document.body.inerHtml = new Sample().render()
document.body.appendChild()