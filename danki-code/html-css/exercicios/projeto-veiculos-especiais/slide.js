let valorInicial = 0
let qtdIMG = $('.rolled img').length

function slider() { setInterval(() => { rolledIMG() }, 5000) }

function rolledIMG() {
    if (valorInicial == 0) {
        $('.main-img img').attr('src', 'imagens/venda.jpg')
        $('.rolled img').css('background-color', 'white')
        $('.rolled img').eq(valorInicial).css('background-color', 'gray')
        valorInicial++
        return
    }

    if (valorInicial == 1) {
        $('.main-img img').attr('src', 'imagens/carroSpeed.jpg')
        $('.rolled img').css('background-color', 'white')
        $('.rolled img').eq(valorInicial).css('background-color', 'gray')
        valorInicial++
        return
    }

    if (valorInicial == 2) {
        $('.main-img img').attr('src', 'imagens/carro-bground.jpg')
        $('.rolled img').css('background-color', 'white')
        $('.rolled img').eq(valorInicial).css('background-color', 'gray')
        valorInicial++
        return
    }

    if (valorInicial == qtdIMG) valorInicial = 0
}

$('.rolled img').click(function () {
    valorInicial = $(this).index()

    $('.main-img img').attr('src', $(this).attr('src'))
    $('.rolled img').css('background-color', 'white')
    $(this).css('background-color', 'gray')
})


slider()