
$(window).on('resize', function() {
    if($(window).width() > 600) {
        $('#body').addClass('limit1200');
        $('#body').removeClass('limit400');
    }else{
        $('#body').addClass('limit400');
        $('#body').removeClass('limit1200');
    }
})

