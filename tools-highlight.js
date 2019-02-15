---
---

$(document).ready(() => {
    var tools_dict = {};
    var tools = $('ul#projects-list').find('ul.tools').children();
    tools.each((index, element) => {
        var tool = $(element).text();
        if (!(tool in tools_dict)) {
            tools_dict[tool] = [];
        }
        tools_dict[tool].push($(element));
    });

    tools.hover((event) => {
        var tool = $(event.currentTarget).text();
        tools_dict[tool].forEach((li) => {
            $(li).toggleClass('hover');
        });
    });
});
