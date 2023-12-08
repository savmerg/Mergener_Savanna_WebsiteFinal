$(document).ready(function() {
    $("#fade-in").mouseenter(function() {
        $(this).css("transform", "scale(1.13)");
        $(this).css("transition", "200ms");
    })
    $("#fade-in").mouseleave(function() {
        $(this).css("transform", "scale(1)");
        $(this).css("transition", "200ms");
    })
});