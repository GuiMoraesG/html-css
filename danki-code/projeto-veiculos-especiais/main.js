class Click {
    constructor() {
        this.nav = document.querySelector('.material-symbols-outlined')
        this.links = document.querySelector('.hamburguer')
        this.iniciar()
    }

    iniciar() {
        this.nav.addEventListener('click', () => {
            this.aparecerNavegador()
        })
    }

    aparecerNavegador() {
        for (let tagA of this.links.querySelectorAll('a')) {
            if (tagA.style.display === 'block') {
                tagA.style.display = 'none'
            } else {
                tagA.style.display = 'block'
            }
        }
    }
}

const clicar = new Click()