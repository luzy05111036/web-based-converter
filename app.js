var main = function () { "use strict";
// kg-to -lb
$("#kg-to-lb").on("click", function (event) {

    var kgOutput;
    kgOutput=parseInt($(".kg-input").val());
    kgOutput=kgOutput*2.20462
    $(".lb-output").text(kgOutput+" lb");
}

);

// km-to-mi
$("#km-to-mile").on("click", function (event) {

    var kmOutput;
    kmOutput=parseInt($(".km-input").val());
    kmOutput=kmOutput*0.621371
    $(".mile-output").text(kmOutput+" mi");
}

);

// F-to-C temperature

$("#F-to-C").on("click", function (event) {

    var kgOutput;
    kgOutput=parseInt($(".F-input").val());
    kgOutput=(kgOutput-32)*5/9
    $(".C-output").text(kgOutput+" C");
}

);





}
$(document).ready(main);

