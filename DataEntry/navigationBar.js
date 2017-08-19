!function () {
    $(document).ready(() => {
        $("#navigationBar").addClass("navbar navbar-inverse navbar-fixed-top");
        $("#mainContainer").addClass("container-fluid");
        $("#moveToRight").addClass("navbar-right");
        $("#form").load("formTemplate.html");
        var template= _.template($("#formTemplate").html());
        $("#form").html(template({name: "Shaantam"}))
        return 200;
    });
}();