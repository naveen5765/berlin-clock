# Berlin Clock

![Alt text](https://upload.wikimedia.org/wikipedia/commons/4/4f/Berlin-Uhr-1650-1705.gif "Berlin Clock")

## About this Kata

This is performed using **Test Driven Development** (TDD).

## Rules

The Berlin Clock (Mengenlehreclock or Berlin Uhr) is a clock that tells the time using a series of illuminated coloured blocks, as you can see in the picture for this project.

The top lamp blinks to show seconds- it is illuminated on even seconds and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, and is made up of 11 lamps- every third lamp is red, the rest are yellow. The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.

## Running tests

You can execute all the specs by running **jasmine** from the root of the project

If you want to just run one spec or only those whom file names match a certain glob pattern you can do it like this:

jasmine spec/appSpec.js
jasmine "**/model/**/critical/\**/*Spec.js"

## Get Started

### `npm install`

Install all project dependencies

### `npm start`

Runs the app <br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
In order to run in different port please refer top answer from [stack overflow](https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project)

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Code Commiting Guidelines:

Inspired from [Udacity](https://udacity.github.io/git-styleguide/)

- chore: updating build tasks, package manager configs, initial commit, etc.. no production code change
- docs: changes to documentation (Readme file)
- feat: a new feature with test case
- fix: a bug fix
- tyle: formatting, missing semi colons, etc.. no code change
- refactor: refactoring production code
- test: Refactoring test; no production code change
