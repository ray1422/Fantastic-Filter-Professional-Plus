document.addEventListener('DOMContentLoaded', function() {
    $(".photo_frame").addClass("origin")
    $(".switch, .after").css('transition', '2s');
    setTimeout(_ => {
        $(".switch").css('opacity', 1);
        $(".photo_frame").removeClass("origin");
    }, 1000)
    setTimeout(_ => {
        $(".switch, .after").css('transition', '.3s');
    }, 3000)
    function updateSize() {
        setTimeout(_=>{
        $(".photo_frame .pad").remove()
        $(".photo_frame").each(function () {
            $frame = $(this)
            if($frame.children("img").innerHeight() > 0) {
                $frame.css('height', $frame.children("img").innerHeight())
            }
            else {
                setTimeout(_=>{
                    function updateSize()
                }, 1500)
            }
            
        })}, 1500)
    }
    updateSize();

    $(".switch").click(function () {
        $frame = $(this).parents(".photo_frame")
        if ($frame.hasClass("origin")) {
            $frame.removeClass("origin")
        }
        else {
            $frame.addClass("origin")
        }
    })

    $(window).resize(function () {
        updateSize()
    })
})