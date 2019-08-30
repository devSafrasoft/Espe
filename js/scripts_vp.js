$(document).ready(function () {
    /* slider */
    // $('.slider-container').slick({
    //     arrows: true,
    // });

    $('.slider-container').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.additional_pictures',
      responsive: [
        {
          breakpoint: 750,
          settings: {
            arrows: false,
          }
        }
      ]
    });
    $('.additional_pictures').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-container',
      arrows: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
    /* end slider */

    /* show and hide blocks */
    $('.card-svg, .product_rectangle').click(function(){

        let parent = $(this).closest('.container_hide');
        let container = parent.find('.container-info-common');

        if($(this).hasClass('active')){
            $(".container-info-common").addClass('active');
            $(this).removeClass('active');
            container.show(400);

        }else{
            container.hide(400);
            $(this).addClass('active');
        }
    });
    /* end show and hide blocks */

    /* delete blocks */
    $('i.fas.fa-times').click(function(){
       $(this).closest('.order-mob_card').hide(400);
    });
    $('.order_close-img').click(function(){
        $(this).closest('.order_item-big').hide(400);
    });
    $('.order_img-close').click(function(){
        $('.order_content').hide(400);
    });
    /* end delete blocks */

    /* toggle identical btns */
    $('.additional_button').mouseover(function(){
        $(this).toggleClass('active');
    });
    /* end toggle */

    /* change eur/rub */
    $('.description-mob_prices-button').click(function(){
        let del = $('.description-mob_prices-button.active');
        let eurRub = $('._eurRub')

        $(this).toggleClass('active');
        del.removeClass('active');
        eurRub.toggleClass('active');
    });
    /* end change eur/rub */

    /* hover for info-block index card */
    $('.additional-info_img').mouseover(function(){
        $('.additional_info-text').addClass('active');
    });
    $('.additional-info_img').mouseleave(function(){
        $('.additional_info-text').removeClass('active');
    })
    /* end */

    /* show/hide additional block */
    $('.description_a').click(function(){
        $('.description_a').toggleClass('main');
        $('.description_a.description_a__hidden').toggleClass('active');
        $('.description_p.description_p__hidden').toggleClass('active');
    });
    /* end */
});

/* change img in slider - index card */
document.querySelector('ul').addEventListener('click', onClick);

function onClick() {
    const TARGET = event.target;

    switch (true) {
        case TARGET.hasAttribute('src'):
            changeImage(TARGET);
            return;
    }
}

function changeImage(ul) {
    let newSrc = ul.getAttribute('src');
    document.querySelector('.main-picture.slick-slide.slick-current.slick-active img').setAttribute('src', newSrc);
}
/* end change img in slider - index card */

