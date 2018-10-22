---
---

const favicon = $('link[rel="shortcut icon"]');
const body = $('body');
const space = $('#toggle');

space.load('moon.txt');

$('#toggle').click(() => {

    if (body.hasClass('--dark')) {
        body.removeClass('--dark');
        body.addClass('--light');

        space.load('moon.txt');

        return favicon.attr('href', 'light.ico');

    } else {
        body.removeClass('--light');
        body.addClass('--dark');

        space.load('sun.txt');

        return favicon.attr('href', 'dark.ico');
    }
});

$('#toggle').mouseover(() => {
    console.log("hi");
    if (body.hasClass('--dark')) {
        space.load('sun-hover.txt');
    } else {
        space.load('moon-hover.txt');
    }
});

$('#toggle').mouseleave(() => {
    console.log("hi");
    if (body.hasClass('--dark')) {
        space.load('sun.txt');
    } else {
        space.load('moon.txt');
    }
});
