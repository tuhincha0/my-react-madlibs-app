# React MadLibs Game

## Overview

This project is a simple MadLibs game built using React. Users can fill out a form with various parts of speech, and upon submission, their inputs are integrated into a fun, dynamic story. The game includes options for multiple stories (super bonus) and allows users to restart the game after a story is generated.

## Features

- **Dynamic Form Handling**: The form collects user input for nouns, verbs, adjectives, and adverbs.
- **Story Generation**: Based on the user inputs, a story is generated and displayed.
- **Restart Button**: Allows the user to restart the game and input new words.
- **Story Selector (Super Bonus)**: Users can choose between different story templates.

## Project Structure

```plaintext
my-react-madlibs-app/
│
├── src/
│   ├── components/
│   │   ├── Madlib.js
│   │   ├── MadlibForm.js
│   │   ├── MadlibStory.js
│   │   └── StorySelector.js
│   ├── utils/
│   │   └── addCommas.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── test/
│   ├── addCommas.test.js
│   ├── Madlib.test.js
│   └── MadlibForm.test.js
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── conceptual.md
├── package.json
├── README.md
└── .gitignore
