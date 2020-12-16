# IPL-fetcher - Search the IPL

## Introduction
Discovery page for IPL where users can search & use facet filters to find different
entities – players, teams, owners & venus. Users should be able to filter based on any attributes related to the entity. It as easy, intuitive and as less steps as 
possible for the user to reach a particular entity.

## Getting Started
* Fork and Clone the repo
  `git clone `
* Change the directory
  `cd IPL-fetcher`
* Install node dependencies
  `npm i` or `npm install` or `yarn`
* Start the Server
  `npm start`

## Technology Stack
* React Js
* Material UI
* GitHub Pages
* Netlify

### Sample data you can use:
https://www.kaggle.com/ramjidoolla/ipl-data-set

## Project Structure

├── archive

│   ├── deliveries.csv

│   ├── matches.csv

│   ├── most_runs_average_strikerate.
csv

│   ├── Players.xlsx

│   ├── teams.csv

│   └── teamwise_home_and_away.csv

├── package.json

├── package-lock.json

├── public

│   ├── favicon.ico

│   ├── index.html

│   ├── logo192.png

│   ├── logo512.png

│   ├── manifest.json

│   └── robots.txt

├── README.md

├── src

│   ├── components

│   │   ├── Filter.js

│   │   ├── MatchCard.js

│   │   ├── NavTabs.js

│   │   ├── PlayerCard.js

│   │   └── ResponsiveDrawer.js

│   ├── Context

│   │   └── TabContext.js

│   ├── Data

│   │   ├── matches.json

│   │   ├── mostRuns.json

│   │   ├── teams.json

│   │   └── years.json

│   ├── index.js

│   ├── Pages

│   │   ├── a.js

│   │   └── App.js

│   └── utils

│       ├── City.js

│       ├── Matches.js

│       └── Player.js

└── yarn.lock

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
