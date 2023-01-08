$(".products-details-page [id^=carousel-thumbs]").carousel({
    interval: false
});

/** Pause/Play Button **/
$(".products-details-page .carousel-pause").click(function () {
    var id = $(this).attr("href");
    if ($(this).hasClass("pause")) {
        $(this).removeClass("pause").toggleClass("play");
        $(this).children(".sr-only").text("Play");
        $(id).carousel("pause");
    } else {
        $(this).removeClass("play").toggleClass("pause");
        $(this).children(".sr-only").text("Pause");
        $(id).carousel("cycle");
    }
    $(id).carousel;
});

/** Fullscreen Buttun **/
$(".products-details-page .carousel-fullscreen").click(function () {
    var id = $(this).attr("href");
    $(id).find(".active").ekkoLightbox({
        type: "image"
    });
});

if ($(".products-details-page [id^=carousel-thumbs] .carousel-item").length < 2) {
    $("#carousel-thumbs [class^=carousel-control-]").remove();
    $("#carousel-thumbs").css("padding", "0 5px");
}

$(".products-details-page #carousel").on("slide.bs.carousel", function (e) {
    var id = parseInt($(e.relatedTarget).attr("data-slide-number"));
    var thumbNum = parseInt(
        $("[id=carousel-selector-" + id + "]")
            .parent()
            .parent()
            .attr("data-slide-number")
    );
    $(".products-details-page [id^=carousel-selector-]").removeClass("selected");
    $(".products-details-page [id=carousel-selector-" + id + "]").addClass("selected");
    $(".products-details-page #carousel-thumbs").carousel(thumbNum);
});
