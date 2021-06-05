// Problem 1 - (A)
// Create an object with "hello" method that writes "Hello <name>" in the console

const p = {
  name: "Alonso",
  hello: () => {
    console.log(`Hello ${p.name}`);
  },
};

p.hello();

// Problem 1 - (B)
// How would make the name inmutable
// Can write or just describe

Object.freeze(p);
p.name = "Alf";

p.hello();

// Problem 2
// Write a function that logs 5 cities that occur the most in the array below
// in order form the most number of occurrences to least

const citiesList = [
  "nashville",
  "nashville",
  "los angeles",
  "nashville",
  "memphis",
  "barcelona",
  "los angeles",
  "sevilla",
  "madrid",
  "canary island",
  "barcelona",
  "madrid",
  "nashville",
  "barcelona",
  "london",
  "berlin",
  "madrid",
  "nashville",
  "london",
  "madrid",
];

function showOccurCities() {
  const cities = {};

  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  console.log("Cities", cities);

  return cities;
}

showOccurCities();

function showOccurCitiesTwo() {
  const cities = {};

  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  console.log("Cities Version 2", Object.keys(cities));
  console.log(
    "Cities Version 2 - Map",
    Object.keys(cities).map((city) => ({
      name: city,
      times: cities[city],
    }))
  );
}

showOccurCitiesTwo();

function showOccurCitiesThree() {
  const cities = {};

  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  console.log(
    "Cities version 3",
    Object.keys(cities)
      .map((city) => ({
        name: city,
        times: cities[city],
      }))
      .sort((a, b) => b.times - a.times)
  );
}

showOccurCitiesThree();

function showOccurCitiesFour(num) {
  const cities = {};

  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  console.log(
    "Cities version 4",
    Object.keys(cities)
      .map((city) => ({
        name: city,
        times: cities[city],
      }))
      .sort((a, b) => b.times - a.times)
      .slice(0, num)
  );
}

showOccurCitiesFour(5);
