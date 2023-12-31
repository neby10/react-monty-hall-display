# React Monty Hall Display

## Project Overview

This project is meant to give users an interactive visualization of the Monty Hall Problem. This is one of my favorite puzzles out there as it is extremely interesting to me. Make sure to account for variable of change. Is it in your best interest to switch?

## Scope of Functionality

The scope of functionality for our Monty Hall visualization includes:
- user can select a door to represent the user's initial choice
- the program opens one of the other two doors, revealing a goat
- user can choose to switch doors or stay with their original choice.
- displays the results of the game, including whether the user won or lost
- user can reset the game and play again
- statistics are automatically kept track of as long as user remains on the page

## Tech Stack
- React SPA

## Dependencies
- chartjs
- react-chartjs
~~~
npm i react-chartjs-2 chart.js
~~~

## Visit
[Visit Site](https://react-monty-hall-display.netlify.app/)

## Known Bugs

## Potential Improvements

There are other versions of this problem that could be implemented. For example, if Monty always picks the door on the right when given the choice between the two incorrect doors, this would change how you approach the problem in order to best server your interest of winning a BRAND NEW CAR!

Later Features:
- user can change the number of doors in the game.
- **UPDATE FOOTER LINKS**

## Component Structure

- App
    - Game
    - ImageCard
    - Graph
    - StatPanel
    - Footer

## External Links
[React-Chart.js](https://react-chartjs-2.js.org/components/)
[Chart.js](https://github.com/chartjs)
[Convert Files: JPEG to ICO](https://www.zamzar.com/convert/jpg-to-ico/)

## Project Notes
LATER
- Graph component - remove second set of react-chartjs x data labels... Had a tough time trying to figure this out.