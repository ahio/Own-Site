Template.home.events({
    "click button.trigger": function (e) {
        e.preventDefault();
        $('div.container-main').toggleClass('modify');
    }
});

    document.addEventListener('keydown', function(e) {
        var keys = [32, 37, 38, 39, 40];

        for(var i = keys.length; i--;) {
            var isMainPage = $('.modify').length;
            if(e.keyCode === keys[i] && !isMainPage) {
                e.preventDefault();
                return;
            }
        }
    });

    document.addEventListener("mousewheel", function (e) {
        $('div.container-main').addClass('modify');
    }, false);

    document.addEventListener('DOMMouseScroll', function (e) {
        $('div.container-main').addClass('modify');
    }, false);

