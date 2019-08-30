

$(window).on('load resize', function(){


	// перемещение поиск под заголовок
	if ($(window).width() <= 700) {
		$('#section-search').insertAfter('#section-title-page');
	}
	// перемещение каталога под 
	if ($(window).width() <= 1020) {
		// $('.section-sidebar-catalog.section-sidebar-catalog_catalogPage').insertAfter('#section-menu-mob');
		$('.section-sidebar-catalog.section-sidebar-catalog_catalogPage').attr('id', 'catalog-mob');
		// $('.section-sidebar-catalog.section-sidebar-catalog_mob').css('min-height', '100vh');
	}
	// уменьшение размера канвас

	if ($(window).width() > 1400) {
		$('#c1').attr('width', '1200px');
		$('#c1').css('width', '1200px');
		$('.modal-box-wrap').css('width', '1200px');
	}

	if ($(window).width() <= 1400) {
		$('#c1').attr('width', '900px');
		$('#c1').css('width', '900px');
		$('.modal-box-wrap').css('width', '900px');
	}
});


function openCatalogProduct(elem) {
	
	var tab = $(elem).siblings(".wrap-catalog-product");


	if(!($(tab).hasClass('wrap-catalog-product_close'))){
		$(tab).slideUp(300);
		$(tab).addClass('wrap-catalog-product_close');
		$(elem).find(".wrap-name-type__arrow").toggleClass('wrap-name-type__arrow_transform');
		$(elem).find(".wrap-name-type__title h2").toggleClass('blue-title');
		$(elem).toggleClass('wrap-name-type__title_open');
		return;
	}

	$('.wrap-type-product').each(function() {
		
		if(!($(this).find(".wrap-catalog-product").hasClass('wrap-catalog-product_close'))) {
			$(this).find(".wrap-catalog-product").slideUp(300);
			$(this).find(".wrap-catalog-product").addClass('wrap-catalog-product_close');
			$(this).find(".wrap-name-type__arrow").toggleClass('wrap-name-type__arrow_transform');
			$(this).find(".wrap-name-type__title h2").toggleClass('blue-title');
			$(this).find('.wrap-name-type').toggleClass('wrap-name-type__title_open');
		}
	});

	if($(tab).hasClass('wrap-catalog-product_close')){
		$(tab).slideDown(300);
		$(tab).removeClass('wrap-catalog-product_close');
		$(elem).find(".wrap-name-type__arrow").toggleClass('wrap-name-type__arrow_transform');
		$(elem).find(".wrap-name-type__title h2").toggleClass('blue-title');
		$(elem).toggleClass('wrap-name-type__title_open');
	}
	
}


function openVideoMaterials(elem) {
	
	var tab = $(elem).siblings("#video-block");

	if($(tab).hasClass('video-block_close')){
		$(tab).slideDown(300);
		$(tab).removeClass('video-block_close');
	}
	else {
		$(tab).slideUp(300);
		$(tab).addClass('video-block_close');
	}
	$(elem).find(".title-section-arrow").toggleClass('title-section-arrow_transform');
}


// сайдбар каталог

function openSidebarTitle(elem) {

	var tab = $(elem).siblings(".list-catGroup");

	if(!($(tab).hasClass('list-catGroup_close'))){ 
		$(tab).slideUp(300);
		$(tab).addClass('list-catGroup_close');
		$(elem).find(".group-title-arrow").toggleClass('group-title-arrow_transform');
		return;
	}
	

	$('.group-title').each(function() {
		
		if(!($(this).find(".list-catGroup").hasClass('list-catGroup_close'))) {
			// alert( $(this).attr('class') );
			$(this).find(".list-catGroup").slideUp(300);
			$(this).find(".list-catGroup").addClass('list-catGroup_close');
			$(this).find(".group-title-arrow").toggleClass('group-title-arrow_transform');
		}
	});
	
	if($(tab).hasClass('list-catGroup_close')){
		$(tab).slideDown(300);
		$(tab).removeClass('list-catGroup_close');
		$(elem).find(".group-title-arrow").toggleClass('group-title-arrow_transform');
	}
	
}

function openTab(elem) {
	var tab = $(elem).siblings(".list-catGroup-content");

	if(!($(tab).hasClass('list-catGroup-content_close'))){	
		$(tab).slideUp(300);
		$(tab).addClass('list-catGroup-content_close');
		$(elem).find(".list-catGroup-arrow").toggleClass('list-catGroup-arrow_transform');
		return;
	}

	$('.list-catGroup-item').each(function() {
		
		if(!($(this).find(".list-catGroup-content").hasClass("list-catGroup-content_close"))) {
			// alert( $(this).attr('class') );
			$(this).find(".list-catGroup-content").slideUp(300);
			$(this).find(".list-catGroup-content").addClass('list-catGroup-content_close');
			$(this).find(".list-catGroup-arrow").toggleClass('list-catGroup-arrow_transform');
		}
	});

	
	if($(tab).hasClass('list-catGroup-content_close')){
		$(tab).slideDown(300);
		$(tab).removeClass('list-catGroup-content_close');
		$(elem).find(".list-catGroup-arrow").toggleClass('list-catGroup-arrow_transform');
	}
	// else {
	// 	$(tab).slideUp(300);
	// 	$(tab).addClass('list-catGroup-content_close');
	// }
	// $(elem).find(".list-catGroup-arrow").toggleClass('list-catGroup-arrow_transform');
}


$(function () {

	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	});

	$('[data-fancybox="modal-box"]').fancybox({
		arrows: false,
		infobar: false, 
		scrolling: false,
		'scrolling': 'no',
	});

	
    	$('#exampleModal').arcticmodal();



	// когда выбран селект 

	if($('.panelCat-product__select option:selected').val() == '4') {
		if(!($('#list-product-8').hasClass('d-none'))) {
			$('#list-product-8').addClass('d-none');
		}
		if(!($('#list-product-12').hasClass('d-none'))) {
			$('#list-product-12').addClass('d-none');
		}
	} else if ($('#panelCat-product__select option:selected').val() == '8') {
		if($('#list-product-8').hasClass('d-none')) {
			$('#list-product-8').removeClass('d-none');
		}
		if(!($('#list-product-12').hasClass('d-none'))) {
			$('#list-product-12').addClass('d-none');
		}
	} else {
		if($('#list-product-8').hasClass('d-none')) {
			$('#list-product-8').removeClass('d-none');
		}
		if($('#list-product-12').hasClass('d-none')) {
			$('#list-product-12').removeClass('d-none');
		}
	}

	$('.panelCat-product__select').change(function(){

		var listProduct8 = $(this).closest(".panelCat-product").siblings('#list-product-8');
		var listProduct12 = $(this).closest(".panelCat-product").siblings('#list-product-12');
		if($(this).val() == '4') {
			if(!($(listProduct8).hasClass('d-none'))) {
				$(listProduct8).addClass('d-none');
			}
			if(!($(listProduct12).hasClass('d-none'))) {
				$(listProduct12).addClass('d-none');
			}
		} else if ($(this).val() == '8') {
			if($(listProduct8).hasClass('d-none')) {
				$(listProduct8).removeClass('d-none');
			}
			if(!($(listProduct12).hasClass('d-none'))) {
				$(listProduct12).addClass('d-none');
			}
		} else {
			if($(listProduct8).hasClass('d-none')) {
				$(listProduct8).removeClass('d-none');
			}
			if($(listProduct12).hasClass('d-none')) {
				$(listProduct12).removeClass('d-none');
			}
		}
	});


	// откртие строки поиска

	$('#search-tab').click(function() {
		$('#section-search').toggleClass('fadeInLeft');
		$('#section-search').toggleClass('d-none');

		$('#search-tab i').toggleClass('header-search__icon_close');
	});

	$('#search-tab-mob').click(function() {
		$('#section-search').toggleClass('fadeInLeft');
		$('#section-search').toggleClass('d-none');

		$('#search-tab-mob i').toggleClass('header-search__icon_close');
	});

	// открытие меню

	$('#burger-menu-header').click(function() {
		if($('#section-menu-mob').hasClass('section-menu-mob_close')){
			$("#section-menu-mob").slideDown(300);
			$('#section-menu-mob').removeClass('section-menu-mob_close');
		}
		else {
			$("#section-menu-mob").slideUp(300);
			$('#section-menu-mob').addClass('section-menu-mob_close');
		}
	});

	$('#menu-mob-close__btn').click(function() {
		$("#section-menu-mob").slideUp(300);
		$('#section-menu-mob').addClass('section-menu-mob_close');
	});


	// добавить в корзину

	$('.list-product__btn').click(function() {
		var product = $(this).closest(".list-product__wrap");
		if(!($(product).hasClass('addBusket'))) {
			$(product).addClass("addBusket");
			$(product).find(".list-product__advertising_addBusket").removeClass('d-none');
		}
	});

	// удалить с корзины

	$('.list-product__addBusket-close').click(function() {
		var product = $(this).closest(".list-product__wrap");
		if($(product).hasClass('addBusket')) {
			$(product).removeClass("addBusket");
			if(!($(product).find(".list-product__advertising_addBusket").hasClass('d-none'))) {
				$(product).find(".list-product__advertising_addBusket").addClass('d-none');
			}
		}
	});


	// запуск видео

	$('.video-panel__play').click(function() {
		var vid = $(".video");
	    var vidB = $(".video-panel__play");
	    //var textContent = vidB.text();
	    
	            
        switch ($(vidB).attr("prop"))
        {
            case "pause-video":
            	$(vidB).attr('prop',"play-video");
                $(vid).trigger('pause');

                ;
                break;
            case "play-video":
                $(vid).trigger('play');
                $(vidB).attr('prop',"pause-video");	            
                break;
            default:
                break;
        }
	

	});

	// открытие каталога

	$('#catalogH-burger').click(function() {
		$('#catalog-mob').toggleClass('active');
		$(window).scrollTop(0);
	});

	// Открытие правой части на странице каталог

	$('[pro-y = mult]').click(function() {
		$(this).siblings('button').removeClass('active');
		$(this).toggleClass('active');
		$('#mult-block').trigger('click');
	});

	$('[pro-y = spring]').click(function() {
		$(this).siblings('button').removeClass('active');
		$(this).toggleClass('active');
		$('#spring-block').trigger('click');
	});

	$('[pro-y = forest]').click(function() {
		$(this).siblings('button').removeClass('active');
		$(this).toggleClass('active');
		$('#forest-block').trigger('click');
	});

	// $('#catalogH-burger').click(function() {
	// 	$('#catalog-mob').toggleClass('active');
	// });

	// $('#tabs-product').click(function() {
	// 	$("#tabs-product").lightTabs();


	// $('#tabs-info').click(function() {
	// 	$("#tabs-info").lightTabs();
	// });

	$('#slider-catalog').slick({
		dots: true,
		arrows : false,
  		infinite: true,
  		speed: 500,
	});



	// $('.slider-main-elite').slick({
	// 	dots: false,
	// 	arrows : true,
 //  		infinite: true,
 //  		speed: 500,
	// });

	// $('.slider-main-premium').slick({
	// 	dots: false,
	// 	arrows : true,
 //  		infinite: true,
 //  		speed: 500,
	// });


	// if($('#base-tab').hasClass('active')){
	// 	$('#product-galery-base').siblings().addClass('d-none');
	// }
	// if($('#premium-tab').hasClass('active')){
	// 	$('#product-galery-premium').siblings().addClass('d-none');
	// }
	// if($('#elite-tab').hasClass('active')){
	// 	$('#product-galery-elite').siblings().addClass('d-none');
	// }

	// $('#base-tab').click(function() {
	// 	if($('#product-galery-base').hasClass('d-none')){
	// 		$('#product-galery-base').removeClass('d-none');
	// 		$('#product-galery-base').siblings().addClass('d-none');
	// 		$('.slider-main-base').slick("refresh");
	// 	}
	// });

	// $('#premium-tab').click(function() {
	// 	if($('#product-galery-premium').hasClass('d-none')){
	// 		$('#product-galery-premium').removeClass('d-none');
	// 		$('#product-galery-premium').siblings().addClass('d-none');
	// 		$('.slider-main-premium').slick("refresh");
	// 	}
	// });

	// $('#elite-tab').click(function() {
	// 	if($('#product-galery-elite').hasClass('d-none')){
	// 		$('#product-galery-elite').removeClass('d-none');
	// 		$('#product-galery-elite').siblings().addClass('d-none');
	// 		$('.slider-main-elite').slick("refresh");
	// 	}
	// });


	// $(function() {
	//     $("ul.tabs__caption").on("click", "li:not(.active)", function() {
	//       $(this)
	//         .addClass("active")
	//         .siblings()
	//         .removeClass("active")
	//         .closest("div.tabs")
	//         .find("div.tabs__content")
	//         .removeClass("active")
	//         .eq($(this).index())
	//         .addClass("active");
	//     });
 //  	});
	
});

