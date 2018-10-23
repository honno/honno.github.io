const description_length = 31;

const descriptions = [
    "Creates useless easter eggs",
    "Opinionated about TV shows",
    "Took ages making this site",
    "Really into tea",
    "Uses light IDE themes",
    "Enjoys Taylor Swift post-1989",
    "Reads flavour notes of 99p beer",
    "Plays crappy PC games from 2006",
    "Still owns a One Plus One",
    "Spends £30/yr on this domain",
    "Regrets site project structure",
    "Can't think of much to say here",
    "Apparently knows some jQuery",
    "Rarely has such good hair"
];

let description = descriptions[Math.floor(Math.random()*descriptions.length)];

while (description.length < 31) {
      description = " " + description;
}

console.log(description);
$('#desc').text(description);
