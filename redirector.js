+function ($) {
    $.ajax({
        dataType: ($.browser.msie) ? "text" : "json",
        accepts: {
            text: "application/json"
        },
        success: function () {
            alert("a new request");
        }
    });
}($);