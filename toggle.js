---
---

const sun = '*';
const moon = ')';

const text = $('#toggle');
text.html(moon);

const favicon = $('link[rel="shortcut icon"]');

$('#toggle').on('click', event => {
    const body = $('body');

    if (body.hasClass('--dark')) {
        body.removeClass('--dark');
        body.addClass('--light');

        text.html(moon);

        return favicon.attr('href', 'light.ico');

    } else {
        body.removeClass('--light');
        body.addClass('--dark');

        text.html(sun);

        return favicon.attr('href', 'dark.ico');
    }
});
