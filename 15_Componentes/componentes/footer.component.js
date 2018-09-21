export class FooterComponent {

    constructor (data) {
        //this.autor = data.autor
        this.autor = 'Pepe' 
        //this.empresa = data.empresa
        this.empresa = 'Perez SA'
        //this.lugar = data.lugar
        this.lugar = 'Madriz'

        this.cacahuete = 'con kikos'
    }
    
    render () {
        //let footer = document.createElement('footer')
        const footer = document.createElement('footer')
        footer.innerHTML = `<address>
                <p>${this.autor} - ${this.empresa}</p>
                <p>${this.lugar} - ${this.cacahuete}</p>
            </adddress>
            `
        return footer
    }
}