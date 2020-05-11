$(document).ready( function(){
    $(".eaten_form").on("submit", function(event){
        event.preventDefault()
        console.log("working", $(this).children(".burger_id").val());
        var id = $(this).children(".burger_id").val();

        $.ajax({
            method: "PUT",
            url: "/api/burgers/update/" + id
        
        }).then(function(){
            location.reload()
        })
    });

    $(".btn-green").on("click", function(event) {
        event.preventDefault();

        var id = $(this).children(".burger_id").val();

        // Send the DELETE request.
        $.ajax({
            method: "DELETE",
            url: "/api/burgers" + id
        }).then(location.reload());
    });
})