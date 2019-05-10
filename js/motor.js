$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $(".black").css("boxShadow", "0 px - 5 px 13 px - 1 px rgba(214, 214, 214, 1)");
        } else {
            $(".black").css("background", "white");
        }
    });
});