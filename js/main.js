













$(document).ready(function () {
    $(".singers article:first").css("display", "block");
    $('.singers h3').click(function () {
        $(this).next().slideToggle(500);
        $(".singers article").not($(this).next()).slideUp(500);
    });


})
