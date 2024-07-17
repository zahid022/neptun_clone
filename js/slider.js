function go() {

    const image = ['slider-image1.webp', 'slider-image2.webp', 'slider-image3.webp']
    const path = '../img/'
    let x = 0
    let timer = null
    const slide = $('.slider-item')

    timer = setInterval(change, 0, 0)

    $('.slider-pagination-item').eq(0).addClass('pag-active')

    function change(dir) {
        clearInterval(timer)
        x += dir
        if (x > image.length - 1) x = 0
        if (x < 0) x = image.length - 1
        slide.fadeOut(function () {
            slide.css({ background: `url('${path + image[x]}')center/cover` })
            slide.fadeIn()
        })
        $('.slider-pagination-item').removeClass('pag-active')
        $('.slider-pagination-item').eq(x).addClass('pag-active')
        timer = setInterval(change, 5000, 1)
    }

    $('.slider-pagination-item').click(function () {
        clearInterval(timer)
        x = $(this).data('slide')

        $('.slider-pagination-item').removeClass('pag-active')
        $(this).addClass('pag-active')
        slide.fadeOut(function () {
            slide.css({ background: `url('${path + image[x]}')center/cover` })
            slide.fadeIn()
        })
        timer = setInterval(change, 5000, 1)
    })

    $('#slider-next-btn')
        .click(function (e) {
            change(1)
        })

    $('#slider-prev-btn')
        .click(function (e) {
            change(-1)
        })

}

export default go