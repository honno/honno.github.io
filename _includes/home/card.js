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
    "Took too long making this",
    "Uses light IDE themes",
    "Reads flavour notes of 99p beer",
    "Still owns a One Plus One",
    "Spends £30 yearly on domain",
    "Regrets site project structure",
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

pad_n_span('age', age);
pad_n_span('desc', description);

pad_n_span('mobile-age', age);

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
