$('#toggle').click(() => {
    console.log("Hi");
    var text = $('#toggle');
    var body = $('body');

    if (body.hasClass('--dark')) {
        body.removeClass('--dark');
        body.addClass('--light');
        text.html("Too bright?");
    }
    else {
        body.removeClass('--light');
        body.addClass('--dark');
        text.html("Too edgy?");
    }
});
