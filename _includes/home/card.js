// Info
var first_name = 'Matthew';
var last_name = 'Barber';
var alias = 'Honno';
var dob = '1998-04-03';
var gender = 'Male';
var occupation = 'Student';

var ethnicity = 'British & Indian';
var residence = 'Southend-on-Sea, UK';
var descriptions = [ // 30 char max
    "Creates useless easter eggs",
    "Opinionated about TV shows",
    "Took too long making this",
    "Spends alot on tea",
    "Uses light IDE themes",
    "Enjoys Taylor Swift post-1989",
    "Reads flavour notes of 99p beer",
    "Plays bad PC games from 2006",
    "Still owns a One Plus One",
    "Spends £30/yr on this domain",
    "Regrets site project structure",
    "Can't think of much to say here",
    "Rarely has such good hair"
];

var www = 'matthewbarber.io';
var email = 'quitesimplymatt@gmail.com';
var github = 'Honno';
var twitter = 'WhoStoleHonno';

// Extrapolate content values

var fancy_dob = new Date(dob);
var today = new Date();
var age_diff = today.getTime() - fancy_dob.getTime();
var age_date = new Date(age_diff);
// 1970 is the 0ms point in Date
var age = Math.abs(age_date.getUTCFullYear() - 1970);

var description = descriptions[Math.floor(Math.random()*descriptions.length)];

var www_href = 'https://' + www;
var email_href = 'mailto:' + email;
var github_tag = '@' + github;
var github_href = 'https://github.com/' + github;
var twitter_tag = '@' + twitter;
var twitter_href = 'https://twitter.com/' + twitter;

// Apply content to card

pad_n_span('first_name', first_name);
pad_n_span('last_name', last_name);
pad_n_span('alias', alias);
pad_n_span('age', age);
pad_n_span('gender', gender);
pad_n_span('occupation', occupation);
pad_n_span('ethnicity', ethnicity);
pad_n_span('residence', residence);
pad_n_span('desc', description);

pad_n_span_link('website', www, www_href);
pad_n_span_link('email', email, email_href);
pad_n_span_link('github', github_tag, github_href);
pad_n_span_link('twitter', twitter_tag, twitter_href);

// Helpers

function pad_n_span(div, content) {
    var span = $('#'+div);

    var max_length = span.text().length;
    var sanitized_content = content.toString().substring(0, max_length).padStart(max_length);

    span.text(sanitized_content);
}

function pad_n_span_link(div, content, href) {
    var span = $('#'+div);
    var a = span.find('a');

    var max_length = span.text().length;
    var sanitized_content = content.substring(0, max_length);
    var pad = ' '.repeat(max_length - sanitized_content.length);
    a.attr('href', href);
    a.text = sanitized_content;

    span.empty();
    span.text(pad);
    span.append(a);
}
