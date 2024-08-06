$(window).on('load', function () {
    $('body').removeClass("loading");
    var $preloader = $('#page-preloader'),
        $cat = $preloader.find('.load');

    $cat.delay(600).fadeOut();
    $preloader.delay(600).fadeOut('fast');
});

$(document).ready(function () {
    animateEye();
});

function animateEye() {
    $('header').mousemove(function (event) {
        var eyeContainer = $('.eye-container');
        var eye = $('.eye');
        var iris = $('.iris');
        var pupil = $('.pupil');

        var eyeCenterX = eyeContainer.offset().left + eyeContainer.width() / 2;
        var eyeCenterY = eyeContainer.offset().top + eyeContainer.height() / 2;

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        var eyeContainerWidth = eyeContainer.width();

        var maxRadius = Math.min(eyeContainerWidth / 2, eyeContainerWidth / 2);

        var dx = mouseX - eyeCenterX;
        var dy = mouseY - eyeCenterY;

        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > maxRadius) {
            dx *= maxRadius / distance;
            dy *= maxRadius / distance;
        }

        var irisWidth = eyeContainerWidth / 4; // Adjust the iris width as needed
        var irisHeight = eyeContainerWidth / 3; // Adjust the iris height as needed

        var pupilWidth = eyeContainerWidth / 4.8; // Adjust the pupil width as needed
        var pupilHeight = eyeContainerWidth / 3; // Adjust the pupil height as needed

        var irisX = dx * (maxRadius - irisWidth) / maxRadius;
        var irisY = dy * (maxRadius - irisHeight) / maxRadius;
        var pupilX = dx * (maxRadius - pupilWidth) / maxRadius;
        var pupilY = dy * (maxRadius - pupilHeight) / maxRadius;

        iris.css('transform', 'translate(' + irisX + 'px, ' + irisY + 'px)');
        pupil.css('transform', 'translate(' + pupilX + 'px, ' + pupilY + 'px)');
    });


}