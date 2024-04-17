$(function(){

    $('.accor_block .name').on('click', function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    });

	$('.slider_block .inner').each(function(){
	    const slider = $(this).find('.swiper');
	    const sliderId = slider.data('id');
	    const sliderClass = '.' + sliderId;   

	    const newProductsSwiper = new Swiper(sliderClass, {
			loop: false,
			slidesPerView: 3,
			loopedSlides: 1,
            spaceBetween: 28,
			lazy: true,
            breakpoints: {
                0: {
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: "auto"
                },
                768: {
                    slidesPerView: 3
                }
            },
	    });
	})

    $('.slider_work .inner').each(function(){
        const slider = $(this).find('.swiper');
        const sliderId = slider.data('id');
        const sliderClass = '.' + sliderId;   

        const newProductsSwiper = new Swiper(sliderClass, {
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 1,
            spaceBetween: 28,
            centeredSlides: true,
            lazy: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: "auto"
                },
                768: {
                    slidesPerView: 4
                }
            },
        });
    })
	
	var $body = $(document.body),
      	$html = $(document.documentElement);

    function formPopup($btn,$wrap){

    var closeForm = $('.formExtraWrapper .close-form'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
        });
        formBtn.on('click', function(event) {
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
    }

	formPopup('.form_btn','.form_popup');

    

    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });

    $('.menu_top a, .menu_header a, a[href="#callback"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        },500);

        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
        }
    });
});

