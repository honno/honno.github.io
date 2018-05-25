$('#toggle').click(() => {
    console.log("Hi");
    var text = $('#toggle');
    var body = $('body');

    if (body.hasClass('--light')) {
        body.removeClass('--light');
        body.addClass('--dark');
        text.html("Too edgy?");
    }
    else {
        body.removeClass('--dark');
        body.addClass('--light');
        text.html("Too bright?");
    }
});
