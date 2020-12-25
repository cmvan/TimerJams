$("#set").click(function(){
    var $url = $("#URL").val().split("=", 2);

    if ($("#music").val() == "YTS") {
        var $sFinal = "https://www.youtube.com/embed/" + $url[1];
        $("iframe").attr("src", $sFinal);
    }

    else if ($("#music").val() == "YTP") {
        var $pFinal = "https://www.youtube.com/embed/videoseries?list=" + $url[1];
        $("iframe").attr("src", $pFinal);
    }
});

$("#work").TimeCircles({
    start: false,
    animation: "smooth",
    count_past_zero: "false",
    "bg_width": 1,
    "fg_width": 0.13333333333333333,
    time: {
        "Days": {"show": false},
        "Hours": {"show": false},
        "Minutes": {"show": true},
        "Seconds": {"show": true}
    }})
    .addListener(function(unit, value, total){
        if (total == 0) {
            $("#alarm")[0].currentTime = 0;
            $("#alarm")[0].play();
            $("#work").TimeCircles().stop();
            $("#to-break").attr("disabled", false);
            $("#to-work").attr("disabled", true);
        }
    });

$("#start").click(function(){ $("#work").TimeCircles().start(); });
$("#stop").click(function(){ $("#work").TimeCircles().stop(); });
$("#restart").click(function(){
    $("#work").TimeCircles().restart().stop();
    $("#alarm")[0].pause();
});
$("#to-break").click(function(){
    $("#work").TimeCircles().restart().stop();
    $("#alarm")[0].pause();
})

$("#break").TimeCircles({
    start: false,
    animation: "smooth",
    count_past_zero: "false",
    "bg_width": 1,
    "fg_width": 0.13333333333333333,
    time: {
        "Days": {"show": false},
        "Hours": {"show": false},
        "Minutes": {"show": true},
        "Seconds": {"show": true}
    }})
    .addListener(function(unit, value, total){
        if (total == 0) {
            $("#alarm")[0].currentTime = 0;
            $("#alarm")[0].play();
            $("#break").TimeCircles().stop();
            $("#to-break").attr("disabled", true);
            $("#to-work").attr("disabled", false);
        }
    });

$("#start2").click(function(){ $("#break").TimeCircles().start(); });
$("#stop2").click(function(){ $("#break").TimeCircles().stop(); });
$("#restart2").click(function(){
    $("#break").TimeCircles().restart().stop();
    $("#alarm")[0].pause();
});
$("#to-work").click(function(){
    $("#break").TimeCircles().restart().stop();
    $("#alarm")[0].pause();
})