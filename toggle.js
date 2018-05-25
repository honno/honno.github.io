$('#toggle').click(() => {
    console.log("Hi");
    var text = $('#toggle');
    var body = $('body');

    if (body.hasClass('--dark')) {
        body.removeClass('--dark');
        body.addClass('--light');
        text.html("too bright?");
    }
    else {
        body.removeClass('--light');
        body.addClass('--dark');
        text.html("too edgy?");
    }
});
