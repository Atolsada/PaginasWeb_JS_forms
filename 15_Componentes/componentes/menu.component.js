export class MenuComponent {

    constructor (baseURL, aItems) {
        this.items = aItems.links
        this.items.forEach( item => {
            item[1] = baseURL + item[1]
        })
        console.log(this.items)
    }

    render () {
        const menu = document.createElement('nav')
        return menu
    }


}