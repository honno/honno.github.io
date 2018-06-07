---
---

base = "Things too "
light = base + "bright?"
dark = base + "edgy?"

text = $('#toggle')
text.html(light)

$('#toggle').on 'click', (event) =>
  body = $('body')

  if body.hasClass('--dark')
    body.removeClass('--dark')

    body.addClass('--light')
    text.html(light)

  else
    body.removeClass('--light')

    body.addClass('--dark')
    text.html(dark)
