var folder = '/assets/home/';

var favicon = $('link[rel="shortcut icon"]');
var body = $('body');
var space = $('#toggle');

space.load(folder+'moon.txt');

$('#toggle').click(() => {
    if (body.hasClass('--dark')) {
        body.removeClass('--dark');
        body.addClass('--light');

        space.load(folder+'moon-hover.txt');

        return favicon.attr('href', folder+'light.ico');

    } else {
        body.removeClass('--light');
        body.addClass('--dark');

        space.load(folder+'sun-hover.txt');

        return favicon.attr('href', folder+'dark.ico');
    }
});

$('#toggle').mouseover(() => {
    if (body.hasClass('--dark')) {
        space.load(folder+'sun-hover.txt');
    } else {
        space.load(folder+'moon-hover.txt');
    }
});

$('#toggle').mouseleave(() => {
    if (body.hasClass('--dark')) {
        space.load(folder+'sun.txt');
    } else {
        space.load(folder+'moon.txt');
    }
});
