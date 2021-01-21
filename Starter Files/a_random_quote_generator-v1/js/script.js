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
  {name: 'Charley',
  quote: "Well you may not know this, but there's things that gnaw at a man worse than dying.",
  source: 'Open Range',
  type: 'Movie',
  year: 2003
  },
  {name: 'Boss Spearman',
  quote: "A woman like that makes a man think about settin' down roots, eh?",
  source: 'Open Range',
  type: 'Movie',
  year: 2003
  },
  {name: 'The Dude',
  quote: "Yeah, well, that’s just, like, your opinion, man.",
  source: 'The Big Lebowski',
  type: 'Movie',
  year: 1998
  },
  {name: 'Boyd Crowder',
  quote: "I’ve been accused of being a lot of things. Inarticulate ain’t one of ‘em.",
  source: 'Justified',
  type: 'TV Show',
  year: 2014
  },
  {name: 'Lucille Bluth',
  quote: "I don’t understand the question and I won’t respond to it.",
  source: 'Arrested Development',
  type: 'TV Show',
  year: 2004
  },
  {name: 'Reginald Rose',
  quote: "Well, it's not easy to stand alone against the ridicule of others. He gambled for support and I gave it to him.",
  source: '12 Angry Men',
  type: 'Movie',
  year: 1957
  },
  {name: 'Cavlin',
  quote: "I find my life is a lot easier the lower I keep everyone’s expectations.",
  source: 'Justified',
  type: 'TV Show',
  year: 2014
}
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length) + 1;
  return arr[randomNumber].quote;
  }








/***
 * `printQuote` function
***/
function printQuote() {



}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);