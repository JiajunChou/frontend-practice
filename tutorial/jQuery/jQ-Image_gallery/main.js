$("document").ready(function() {
    var thumber = $(".thumb-bar");

    btn = $("button");

    var overlay = $(".overlay");

    var imgAddress = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
    inputImage();

    function inputImage() {
        for (var i = 0; i < 5; i++) {
            var newImage = $("<img>", {
                src: imgAddress[i],
                alt: imgAddress[i],
            })
            newImage.click(function(event) {
                var target = $(event.target);
                $(".displayed-img").attr("src", target.attr("src"));
            });

            thumber.append(newImage);
        }
    };

    btn.click(function() {
        if (btn.attr("class") == 'dark') {
            btn.attr('class', 'light');
            btn.text("Lighten");
            overlay.css("backgroundColor", "rgba(0,0,0,0.5)");
        } else {
            btn.attr("class", "dark");
            btn.text("Darken");
            overlay.css("backgroundColor", "rgba(0,0,0,0)");
        };
    });
});