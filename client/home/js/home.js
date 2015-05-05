Template.home.events({
    "click button.trigger": function (e) {
        e.preventDefault();
        $('div.container-main').addClass('modify');
    }
});

$(function() {

    document.addEventListener('touchmove', function(e) {e.preventDefault();}
    );

    document.addEventListener('keydown', function(e) {
        var keys = [32, 37, 38, 39, 40];
        var isMainPage = $('.modify').length;
        for(var i = keys.length; i--;) {
            if(e.keyCode === keys[i] && !isMainPage) {
                e.preventDefault();
                return;
            }
        }
    });

    document.addEventListener("scroll", function() {
        $('.container-main').addClass('modify');
    }, false);

});