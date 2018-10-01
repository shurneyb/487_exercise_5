/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];

var html;
var i;
var j;
var tableDiv = document.getElementById('table-content');
var allStateDiv = document.getElementById('all-state-team');


//Write your function here

function buildTable(){
  console.log('building table...');
  html = '';

  // initialize first table row
  html += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';

  for (i = 0; i < players.length; i++){

    // set up variables for player attributes so they can be manipulated
    var playerFirst = players[i].first;
    var playerLast = players[i].last;
    var playerPosition = players[i].position;
    var playerYear = players[i].year;

    // check if senior. if so, make content bold
    if (playerYear == 'Senior'){
      console.log('senior checker working');

      playerFirst = '<b>' + playerFirst + '</b>';
      playerLast = '<b>' + playerLast + '</b>';
      playerPosition = '<b>' + playerPosition + '</b>';
      playerYear = '<b>' + playerYear + '</b>';
    }

    // contruct row
    html += '<tr>' + '<th>' + playerFirst + '</th>';
    html += '<th>' + playerLast + '</th>';
    html += '<th>' + playerPosition + '</th>';
    html += '<th>' + playerYear + '</th>' + '</tr>';

  }

  // put table into table div
  tableDiv.innerHTML = html;

}

buildTable();

/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];

function findAllStars(){
  console.log('finding all-stars...');

  html = "Congratulations to Springfield's 2018 North Carolina All-State honorees:";

  // loop through players, comparing them to each person on the all-star list to find any matches.
  for (i = 0; i < allStars.length; i++){
    for (j = 0; j < players.length; j++){
      if (players[i].first == allStars[i].first){
        html += ' ' + players[i].first + ' ' + players[i].last;
        break;
      }
    }
  }

  html += '.';

  // put html product into div
  allStateDiv.innerHTML = html;
}

findAllStars();
