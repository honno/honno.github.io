var tools = $('ul#projects-list').find('ul.tools').children();
var tools_dict = generate_words_map(tools);

var langs = $('ul#projects-list').find('ul.langs').children();
var langs_dict = generate_words_map(langs);

apply_uniform_hover(tools, tools_dict);
apply_uniform_hover(langs, langs_dict);

// Helpers
function generate_words_map(selector) {
    let dict = {}
    selector.each((index, element) => {
        var word = $(element).text();
        if (!(word in dict)) {
            dict[word] = [];
        }
        dict[word].push($(element));
    });
    return dict;
}
function apply_uniform_hover(selector, words_map) {
    selector.hover((event) => {
        var word = $(event.currentTarget).text();
        words_map[word].forEach((li) => {
            $(li).toggleClass('hover');
        });
    });
}