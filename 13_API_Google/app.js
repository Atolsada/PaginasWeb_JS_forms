export class App{
    constructor(){
        this.URLBase = 'https://www.googleapis.com/books/v1/volumes?q='
        this.nKey = document.querySelector('#key')
        this.nBtnBuscar = document.querySelector('#btnBuscar')
        this.nOuput = document.querySelector('#output')

        this.key = ''

        this.buscar = this.buscar.bind(this)
        this.nBtnBuscar.addEventListener('click', this.buscar)
    }

    buscar(){
        let url
        this.key = this.nKey.value
        if (this.key){
            url = this.URLBase + this.key
            fetch(url, {method:'GET'}).then(
                (response)=>{
                    return response.json()
                }
            ).then(
                (data)=>{ this.mostrar(data)}
            )
        }
    }
    mostrar(data){
        let aLibros
        let html = '<dl>'
        console.log(data.items)
        aLibros = data.items.map(
            item => {
                return{
                    autores: item.volumeInfo.authors,
                    titulo: item.volumeInfo.title} 
            }
        )
        console.log(aLibros)

        /* data.items.forEach(item => {
            console.log(item.volumeInfo.title)
        }); */

        aLibros.forEach(item => {
            let autor = ''
            if (item.autores){
                autor = item.autores.join(', ')
            }
            html += `<dt>${item.titulo}</dt>`
            html += `<dd>${autor}</dd>`
        });
        html+= '</dl>'

        this.nOuput.innerHTML = html
        this.nKey.value = ''

        //console.dir(aLibros)
        
    }
}