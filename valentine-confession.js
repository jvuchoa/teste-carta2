$(document).ready(function () {
    $("#messageState").on("change", function () {
        $(".message").toggleClass("openNor");
        $(".heart").toggleClass("openHer");

        if ($("#messageState").is(":checked")) {
            $(".container").stop().animate({ "backgroundColor": "#f48fb1" }, 2000);
            console.log("Abrindo");
        } else {
            $(".container").stop().animate({ "backgroundColor": "#fce4ec" }, 2000);
            console.log("Fechando");
        }
    });

    $(".message").on('animationend', function () {
        console.log("Animation End");
    });

    $(".heart").on('animationend', function () {
        console.log("Animation End");
    });
});
