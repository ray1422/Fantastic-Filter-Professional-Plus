FALLBACK_LANG = 'zh_TW';
var lang = localStorage["language"] || FALLBACK_LANG;
const langList = ['zh_TW', 'zh_CN', 'en_US',] // 'ja_JP']
if (!langList.includes(lang)) {
    lang = FALLBACK_LANG;
}
// document.registerElement('x-str');

$.ajax({
    url: "assets/lang/" + lang + ".js",
    dataType: 'script',
    success: () => {
        $(".string_token, x-str").each(function () {
            const token = $(this).attr("data-token");
            const replace_str = LANG[token];
            $(this)[0].outerHTML = replace_str;
        })
        window.title = document.title = LANG[$("title").attr("data-token")]
        main($);
    },
    async: true
});


