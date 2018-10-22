---
---

const text = $('#toggle');
text.load('moon.txt');

const favicon = $('link[rel="shortcut icon"]');

$('#toggle').on('click', event => {
    const body = $('body');

    if (body.hasClass('--dark')) {
        body.removeClass('--dark');
        body.addClass('--light');

        text.load('moon.txt');

        return favicon.attr('href', 'light.ico');

    } else {
        body.removeClass('--light');
        body.addClass('--dark');

        text.load('sun.txt');

        return favicon.attr('href', 'dark.ico');
    }
});
