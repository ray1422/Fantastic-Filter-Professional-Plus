(function () {
    $(document).ready(function () {
        // https://core.newebpay.com/EPG/ray_another_world/Dq68yk
        $(".custom_price").on('input', function (event) {
            if ($(this).val() == 0) {
                $("#price a").text("下載");
            } else {
                $("#price a").text("購買");
            }
        })
        $("#price a").click(function (event) {
            if ($(".custom_price").val() != 0) {
                window.open('https://core.newebpay.com/EPG/ray_another_world/Dq68yk');
                window.location = 'https://github.com/ray1422/Fantastic-Filter-Desktop/releases'
            } else {
                window.open('https://github.com/ray1422/Fantastic-Filter-Desktop/releases')
            }
            event.preventDefault();
        })
    })
})();