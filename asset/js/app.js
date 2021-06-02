var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const headerActionAccountDropDown = $('.header__action-account-dropdown');
const headerActionSearchDropDown = $('.header__action-search-dropdown');
const headerActionAccount = $('.header__action-account');
const headerActionSearch = $('.header__action-search');
const html = $('html');
const sliderContentWrap = $$('.slider__content-wrap');
const buttonSliderNext = $('.slider__button-next');
const buttonSliderPre = $('.slider__button-pre');
const buttonDotSlider = $$('.slider__dot-item');
const headerIconMenuMobile = $('.header__navbar-mobile-icon-wrap');
const headerNavbarList = $('.header__navbar-list');
const slideImg = $$('.slider__img');
const app = {
    currentIndexImgSlider: 1,
    handlerEvent: function() {
        

    },
    handlerWidthHeightImg: function() {
        //when changle width screen
        if(screen.width < 768) {
            const height = screen.height;
            Array.from(slideImg).forEach((value) => {
            value.style.height = height * 0.7 + 'px';
            });
        }
    },
    handlerCounter: function() {
        
    },
    handlerEventHeader: function() {
        //when user click to mobile menu
        headerIconMenuMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            headerNavbarList.classList.toggle('active');
            headerActionAccountDropDown.classList.remove('active');
            headerActionSearchDropDown.classList.remove('active');
        });

        //when user click to icon user
        headerActionAccount.addEventListener("click", (e) => {
            e.stopPropagation();
            headerActionAccountDropDown.classList.toggle('active');
            headerActionSearchDropDown.classList.remove('active');
            headerNavbarList.classList.remove('active');
        });

        headerActionSearch.addEventListener(('click'), (e) => {
            e.stopPropagation()
            headerActionSearchDropDown.classList.toggle('active');
            headerActionAccountDropDown.classList.remove('active');
            headerNavbarList.classList.remove('active');
        });

        headerNavbarList.onclick = function(e) {
            e.stopPropagation();
        };

        headerActionAccountDropDown.onclick = function(e) {
            e.stopPropagation();
        };

        headerActionSearchDropDown.onclick = function(e) {
            e.stopPropagation();
        };

        //when user click to tag body then remove class active
        html.onclick = function() {
            headerActionAccountDropDown.classList.remove('active');
            headerActionSearchDropDown.classList.remove('active');
        };
    },
    handlerEventSlider: function() {
        const _this = this;
        //when user click to button dot
        Array.from(buttonDotSlider).forEach((value, index) => {
            value.onclick = function() {
                _this.removeSlider();
                _this.removeBoxShadowButtonSlider();
                _this.currentIndexImgSlider = index + 1;
                _this.loadSlider();
                _this.loadBoxShadowButtonSlider();
            }
        });

        //when user click to button previous
        buttonSliderPre.onclick = function() {
            _this.removeSlider();
            _this.removeBoxShadowButtonSlider();
            if(_this.currentIndexImgSlider === 1) {
                _this.currentIndexImgSlider = 3;
            }
            else _this.currentIndexImgSlider--;
            _this.loadSlider();
            _this.loadBoxShadowButtonSlider();
        }

        
        //when user click to button next
        buttonSliderNext.onclick = function() {
            _this.removeSlider();
            _this.removeBoxShadowButtonSlider();
            if(_this.currentIndexImgSlider === 3) {
                _this.currentIndexImgSlider = 1;
            }
            else _this.currentIndexImgSlider++;
            _this.loadSlider();
            _this.loadBoxShadowButtonSlider();
        }
    },
    //this is function to do load slider
    loadSlider: function() {
        const _this = this;
        Array.from(sliderContentWrap).forEach((value, index) => {
            if(_this.currentIndexImgSlider === index + 1) {
                value.classList.add('active');
            }
        });
    },
    removeSlider: function() {
        const _this = this;
        Array.from(sliderContentWrap).forEach((value, index) => {
            if(_this.currentIndexImgSlider === index + 1) {
                value.classList.remove('active');
            }
        });
    },
    loadBoxShadowButtonSlider: function() {
        const _this = this;
        Array.from(buttonDotSlider).forEach((value, index) => {
            if(_this.currentIndexImgSlider === index + 1) {
                value.classList.add('active');
            }
        });
    },
    removeBoxShadowButtonSlider: function() {
        const _this = this;
        Array.from(buttonDotSlider).forEach((value, index) => {
            if(_this.currentIndexImgSlider === index + 1) {
                value.classList.remove('active');
            }
        });
    },
    start: function() {
        this.handlerEvent();
        this.handlerEventHeader();
        this.handlerEventSlider();
        this.handlerWidthHeightImg();
    }
}

app.start();
