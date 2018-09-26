//import { HeadComponent} from './componentes/head.component.js'
//import { HeaderComponent } from './componentes/header.component.js';
//import { FooterComponent} from './componentes/footer.component.js'

//class Index {
//    constructor() {
//        this.title = 'Componentes'
        //document.head.innerHTML += new HeadComponent('Componentes').render()
//        this.head = new HeadComponent(this.title)
//        this.header = new HeaderComponent(this.title)
//        document.head.insertAdjacentHTML('afterbegin', this.head.render()  )    
        //console.dir(this.header)
//        document.body.appendChild(this.header.render())

//        this.footer = new FooterComponent({}).render()
//        document.body.appendChild(this.footer)

        /* Otro modo
        this.footer = new FooterComponent({
            autor: 'Antonio Tolsada',
            empresa: 'CFTIC',
            lugar: 'Getafe - 2018'
        }).render() 
        */

//        this.main = document.createElement('main')
//        document.body.appendChild(this.main)
//    }
//}


//document.addEventListener('DOMContentLoaded', () => { new Index()})


/////////////////


import { PageController } from './page.controller.js';
import { InicioComponent } from './componentes/inicio.component.js';


class Index extends PageController {
    constructor() {
        super()
        this.nodeMain = document.querySelector('main')
        this.renderMain()
    }

    renderMain() {
        this.articulo = new InicioComponent('Inicio').render()
        this.nodeMain.appendChild(this.articulo)
    }
}

document.addEventListener('DOMContentLoaded', () => { new Index()})


