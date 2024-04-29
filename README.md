# BigeTron Sewage Decoder

## Overview

This NPM package provides a function to decode SigFox payload data for a sewage logger. The function takes in parameters such as scaled distance, invert level, diameter, slope, and roughness coefficient to calculate the water flow rate.

## Installation

You can install this package via NPM:

```bash
npm i bigetron-sewage-decoder
```

## Usage

```js
const decode = require("bigetron-sewage-decoder");

// Example parameters
const scaledDistance = 100; // Example value
const invertLevel = 200; // Example value
const diameter = 50; // Example value
const slope = 0.02; // Example value
const roughnessCoefficient = 0.013; // Example value

// Decode the data
const decodedValue = decode(scaledDistance, invertLevel, diameter, slope, roughnessCoefficient);

console.log("Value:", decodedValue);
```

## Parameters

- `scaledDistance`: The scaled distance from the water level to the sensor (in millimeters).
- `invertLevel`: The invert level of the sensor (in millimeters).
- `diameter`: The diameter of the pipe (in millimeters).
- `slope`: The slope of the pipe (dimensionless).
- `roughnessCoefficient`: The roughness coefficient of the pipe (dimensionless).

## Return Value

The function returns the calculated water flow rate.
