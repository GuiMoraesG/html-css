$('#menu').click(() => {
    $('#navegador').slideToggle()
})

$('nav a').click(() => {
    let href = $(this).attr('href')
    let offSetTop = $(href).offset().top

    $('html, body').animate({ 'scrollTop': offSetTop })
})