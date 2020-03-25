(function () {
    $(document).ready(function () {
        // https://core.newebpay.com/EPG/ray_another_world/Dq68yk
        $(".custom_price").on('input', function (event) {
            if ($(this).val() == 0) {
                $(this).parents(".price").children(".price a").text(LANG['download']);
            } else {
                $(this).parents(".price").children(".price a").text(LANG['buy']);
            }
        })
        $(".price a").click(function (event) {
            if ($(this).parents(".price").children(".custom_price").val() != 0) {
                window.open($(this).attr("data-payment"));
                window.location = $(this).attr("data-download");
            } else {
                window.open($(this).attr("data-download"));
            }
            event.preventDefault();
        })
    })
})();