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
        let aTitulos
        let html = '<ul>'
        console.log(data)
        aTitulos = data.items.map(
            item => {return item.volumeInfo.title}
        )

        /* data.items.forEach(item => {
            console.log(item.volumeInfo.title)
        }); */

        aTitulos.forEach(item => {
            html += `<li>${item}</li>`
        })
        html+= '</ul>'

        this.nOuput.innerHTML = html
        this.nKey.value = ''

        //console.dir(aTitulos)
    }
}