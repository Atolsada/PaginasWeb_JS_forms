import { HeadComponent} from './componentes/head.component.js'
import { HeaderComponent } from './componentes/header.component.js';
import { FooterComponent} from './componentes/footer.component.js'

class Index {
    constructor() {
        this.title = 'Componentes'
        //document.head.innerHTML += new HeadComponent('Componentes').render()
        this.head = new HeadComponent(this.title)
        document.head.insertAdjacentHTML('afterbegin', this.head.render()  )    
        this.header = new HeaderComponent(this.title)
        //console.dir(this.header)
        document.body.appendChild(this.header.render())

        this.footer = new FooterComponent({}).render()
        document.body.appendChild(this.footer)
    }
}


document.addEventListener('DOMContentLoaded', () => { new Index()})