import { HeadComponent }  from './componentes/head.component.js'
import { HeaderComponent } from './componentes/header.component.js';
import { FooterComponent } from './componentes/footer.component.js';
import { APPTITLE } from './config.js';
import { MenuComponent } from './componentes/menu.component.js';

export class PageController {
    constructor () {
        this.appTitle = APPTITLE
        this.pageTitle = (page) ? this.appTitle + ' | ' + page : this.appTitle
        this.title =  title || this.appTitle
        this.contentFooter = {
                autor: 'A',
                empresa: 'Tolsada SA',
                lugar: 'Madriz - 2018'
            }
        //document.head.innerHTML += new HeadComponent('Componentes').render()
        //this.head = new HeadComponent(this.appTitle).render()
        this.head = new HeadComponent(this.pageTitle).render()

        this.header = new HeaderComponent(this.title).render()
        this.main = document.createElement('main')
        this.footer = new FooterComponent(this.contentFooter).render()

        document.head.insertAdjacentHTML('afterbegin', this.head)    
        document.body.appendChild(this.header)
        document.body.appendChild(this.main)
        document.body.appendChild(this.footer)

        this.menu = new MenuComponent(this.contentMenu).render()
        document.body.appendChild(this.menu)
    }


}