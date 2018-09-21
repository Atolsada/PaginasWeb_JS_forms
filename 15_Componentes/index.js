import { HeadComponent} from './componentes/head.component.js'
import { HeaderComponent } from './componentes/header.component.js';

class Index {
    constructor() {
        this.title = 'Componentes'
        //document.head.innerHTML += new HeadComponent('Componentes').render()
        this.head = new HeadComponent(this.title)
        document.head.insertAdjacentHTML('afterbegin', this.head.render()  )    
        this.header = new HeaderComponent(this.title)
        document.body.appendChild(this.header.render())
    }
}


document.addEventListener('DOMContentLoaded', () => { new Index()})