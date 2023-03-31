const numbers = [10,20,30];

let total = 0;

// Dylan used this approach from Mapbox to create dynamic Markers from data
for(const n of numbers) { // iterate through all the numbers
    total += n;
}
total;

// useReducer

numbers.reduce((cv, n) => cv + n, 0);