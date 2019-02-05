var form = $("form");
var submit_burger = $("button#submit_burger");

function takeBurger()   {
    form.on("submit", (event) =>
        event.preventDefault(),
        console.log(submit_burger),
        submit_burger.on("click", (event) =>
            console.log($("input#ca").val())
))};

$(document).ready(() => 
    takeBurger()
);