class Cabecera extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<header><h1>MW-MAKE UP WAPA</h1></header>`
    }
}
window.customElements.define('mi-cabecera', Cabecera);

class Pie extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<footer>&copy; 2025 - Maria Jesus Bailen Jimenez - @makeupwapa</footer>    
        `
    }
}
window.customElements.define('mi-pie', Pie);

class Menu extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<menu><ul>
                    <li><a href="index.html"> Inicio</a></li>
                    <li><a href="empresa.html"> Empresa</a></li>
                    <li><a href="carrito.html"> Carrito</a></li>
                    <li><a href="contacto.html"> Contacto</a></li>
                    <li><a href="productos.html"> Productos</a></li>
                    <li><a href="ofertas.html"> Ofertas</a></li>
                    <li><a href="usuario.html"> Usuario</a></li>
                    </ul>
                    </menu>     
        `
    }
}
window.customElements.define('mi-menu', Menu);