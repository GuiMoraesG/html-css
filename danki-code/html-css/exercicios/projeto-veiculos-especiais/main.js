class Click {
    constructor() {
        this.nav = document.querySelector('.material-symbols-outlined')
        this
        this.iniciar()
    }

    iniciar() {
        this.nav.addEventListener('click', () => {
            this.aparecerNavegador()
        })
    }

    aparecerNavegador() {

    }
}



const clicar = new Click()