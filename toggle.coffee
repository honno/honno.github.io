---
---

base = "Things too "
light = base + "bright?"
dark = base + "edgy?"

text = $('#toggle')
text.html(light)

favicon = $('link[rel="shortcut icon"]')

$('#toggle').on 'click', (event) =>
  body = $('body')

  if body.hasClass('--dark')
    body.removeClass('--dark')
    body.addClass('--light')

    text.html(light)

    favicon.attr('href', 'light.ico')

  else
    body.removeClass('--light')
    body.addClass('--dark')

    text.html(dark)

    favicon.attr('href', 'dark.ico')
