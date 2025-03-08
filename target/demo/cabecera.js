class Cabecera extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<header><h1>MAKE UP WAPA</h1></header>`
    }
}
window.customElements.define('mi-cabecera', Cabecera);