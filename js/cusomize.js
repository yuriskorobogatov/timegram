function goToByScroll(id) {

    docSlider.jumpPage(id);
}


$(document).ready(function () {


    var arr = [];

    for (var i = 0; i < countrys.length; i++) {

        arr.push({id: i, text: countrys[i].name});
    }


    $("#country").select2({
        data: arr
    });


});

$(window).on('load', function () {

    if (window.matchMedia('(max-width: 1250px)').matches) {
        $('#first_doc').remove();
        $('#second_doc').show();
        scrollCue.init({docSlider: true, pageChangeReset: true});
        docSlider.init({
            scrollReset: true,
            speed: 700,
            scrollReset: false,
            easing: 'ease-in-out'
        });

    } else {
        $('#second_doc').remove();
        $('#first_doc').show();
        scrollCue.init({docSlider: true, pageChangeReset: true});
        docSlider.init({
            scrollReset: true,
            speed: 700,
            scrollReset: false,
            easing: 'ease-in-out'

        });
    }
});

