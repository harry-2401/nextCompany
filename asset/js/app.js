var $ = document.querySelector.bind(document);

const headerActionAccountDropDown = $('.header__action-account-dropdown');
const headerActionSearchDropDown = $('.header__action-search-dropdown');
const headerActionAccount = $('.header__action-account');
const headerActionSearch = $('.header__action-search');
const html = $('html');

const app = {
    handlerEvent: function() {
        
    },
    handlerEventHeader: function() {
        //when user click to icon user
        headerActionAccount.addEventListener("click", (e) => {
            e.stopPropagation();
            headerActionAccountDropDown.classList.toggle('active');
            headerActionSearchDropDown.classList.remove('active');
        });

        headerActionSearch.addEventListener(('click'), (e) => {
            e.stopPropagation()
            headerActionSearchDropDown.classList.toggle('active');
            headerActionAccountDropDown.classList.remove('active');
        });

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
    start: function() {
        this.handlerEvent();
        this.handlerEventHeader();
    }
}

app.start();
