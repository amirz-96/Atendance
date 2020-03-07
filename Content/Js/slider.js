$(function () {

    const CURRENT_SLIDE = 'current-slide';
    const $slider = $('[data-slider]');
    const TIMEOUT = 4000;
    let sliderTimeOut;

    $slider.children('div').each((i, item) => {
        if (i == 0) {
            $(item).addClass(CURRENT_SLIDE);
        }
        $(item).attr("data-slide");
    })

    function _slider() {
        const currentSlide = $(`[data-slider]`).children(`.${CURRENT_SLIDE}`);
        let next = currentSlide.next('div');

        if (next.length) {
            next.addClass(CURRENT_SLIDE);
        } else {
            next = $('[data-slider]').children('div').first();
            next.addClass(CURRENT_SLIDE);
        }

        currentSlide.fadeOut(TIMEOUT / 4, () => {
            next.fadeIn(TIMEOUT / 4);
        });

        currentSlide.removeClass(CURRENT_SLIDE)
    }

    function start() {
        sliderTimeOut = setInterval(() => _slider(), TIMEOUT);
    }

    function pause() {
        clearInterval(sliderTimeOut);
    }

    start()

    $slider.hover(() => {
        pause();
    }, () => {
        start()
    })

})