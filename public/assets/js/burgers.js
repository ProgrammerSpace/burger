// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Devoured " + id);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bgr").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/newburger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("added new burger");
                location.reload();
            }
        );
    });
});
