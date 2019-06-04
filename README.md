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
