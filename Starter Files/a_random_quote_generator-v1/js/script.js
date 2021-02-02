/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {source: 'Charley',
  quote: "Well you may not know this, but there's things that gnaw at a man worse than dying.",
  citation: 'Open Range',
  year: 2003,
  image: "images/charley.jpg"
  },
  {source: 'Boss Spearman',
  quote: "A woman like that makes a man think about settin' down roots, eh?",
  citation: 'Open Range',
  year: 2003,
  image: "images/bossspearman.jpg"
  },
  {source: 'The Dude',
  quote: "Yeah, well, that’s just, like, your opinion, man.",
  citation: 'The Big Lebowski',
  year: 1998,
  image: "images/thedude.jpg"
  },
  {source: 'Sam Spade',
  quote: "That’s good, because if you actually were as innocent as you pretend to be, we’d never get anywhere.",
  citation: 'The Maltese Falcon',
  year: 1941,
  image: "images/samspade.jpg"
  },
  {source: 'Juror #9',
  quote: "Well, it's not easy to stand alone against the ridicule of others. He gambled for support and I gave it to him.",
  citation: '12 Angry Men',
  year: 1957,
  image: "images/juror9.jpg"
  },
  {source: 'Boyd Crowder',
  quote: "I’ve been accused of being a lot of things. Inarticulate ain’t one of ‘em.",
  citation: 'Justified',
  year: 2014,
  image: "images/boydcrowder.jpg"
  },
  {source: 'Raylan Givens',
  quote: "What's next is entirely based on the next choice you make.",
  citation: 'Justified',
  year: 2015,
  image: "images/raylangivens.jpg"
  },
  {source: 'Lucille Bluth',
  quote: "I don’t understand the question and I won’t respond to it.",
  citation: 'Arrested Development',
  year: 2004,
  image: "images/lucillebluth.jpg"
  },
  {source: 'Calvin',
  quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
  citation: 'Calvin and Hobbes',
  year: 1994,
  image: "images/calvin.gif"
  },
  {source: 'Calvin',
  quote: "I find my life is a lot easier the lower I keep everyone’s expectations.",
  citation: 'Calvin and Hobbes',
  year: 1988,
  image: "images/calvin.gif",
  },
  {source: 'Me',
  quote: "When you have zero coding experience learning JavaScript can make your brain feel like a bowl of bland oatmeal. But the satisfaction of struggling through various challenges and figuring them out is like adding brown sugar, apples and pecans on top.  Suddenly, every bite becomes delicious.",
  citation: 'My Own Brain',
  year: 'Right Now',
  image: "images/me.jpg"
  }
]

/***
 * `getRandomQuote` function
***/
// To prevent some quotes from being displayed more than once the randomly generated numbers are stored in an array
// The getRandomQuote function checks the usedQuotes array for numbers already used and generates a new number if it has.
// Once the usedQuotes array has been filled to equal the length of the quotes array it is erased and the cycle starts over.

var usedQuotes = [];

function getRandomQuote(arr) {
  let randomNumber = Math.ceil(Math.random() * arr.length) - 1;
  if (usedQuotes.includes(randomNumber)) {
    randomNumber = Math.ceil(Math.random() * arr.length) - 1;
  } else (!usedQuotes.includes(randomNumber))
    usedQuotes.push(randomNumber);
  
  if (usedQuotes.length >= arr.length) {
    usedQuotes = [];
  }
  return arr[randomNumber];
}

/***
 * `printQuote` function
 * Creates variable 'quote' which calls the 'getRandomQuote' function and passes the 'quotes' array as an argument
 * Uses the value of 'quote' to create an interpolated message, and then returns that message 
***/

function printQuote() {
  const quote = getRandomQuote(quotes)
  let message = '';
  if (quote.image, quote.source) {
    message += `<img src="${quote.image}" alt="${quote.source}">`;
  }
  if (quote.quote) {
    message += `<p class="quote">${quote.quote}</p>`;
  }
  if (quote.source) {
    message += `<p class="source">${quote.source}`;
  }
  if (quote.citation) {
    message += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    message += `<span class="year">${quote.year}</span>`;
  }
  message += `</p>`;
  return document.querySelector('div').innerHTML = message; 
}

/***
 * 'autoRefresh' function
 * Clears the interval using the clearInterval method
 * Calls the 'printQuote' function at an inteveral of 7 seconds
 * Credit: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
 * Source was linked in the Project study guide.
 */

 var autoRefresh;

function autoRefresh() {
  autoRefresh = clearInterval(autoRefresh);
  autoRefresh = setInterval(printQuote, 7000);
  return [
    document.querySelector('div').innerHTML = autoRefresh,
    printQuote()
  ]
}

/***
 * 'pauseRefresh' function
 * Uses the clearInterval() method to stop the setInterval() method in the 'autoRefresh' function
 * Credit: https://www.geeksforgeeks.org/javascript-cleartimeout-clearinterval-method/
 * Found during basic web search for ideas
 */

 function pauseRefresh() {
  autoRefresh = clearInterval(autoRefresh);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!...Changed the code to call the 'autoRefresh' function rather than the 'printQuote' function
***/

document.getElementById('load-quote').addEventListener("click", autoRefresh, false);
document.getElementById('slideshow-pause').addEventListener("click", pauseRefresh, false);