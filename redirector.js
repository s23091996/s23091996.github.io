+function($){
    $.ajax({
        type: "POST",
        success:
        function(){
            alert("a new request");
        }
    });
}($);