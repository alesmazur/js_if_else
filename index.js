//object as funcs argument

// with object mutation

const personA = {
  gender: "male",
  age: 41,
  weight: "72kg",
};

function increasePersonAge(somePerson) {
  somePerson.age += 1;
  return somePerson;
}

increasePersonAge(personA);
console.log(personA);

// without object mutation

function ageIncreaser(somePerson) {
  const splitedPerson = Object.assign({}, somePerson);
  splitedPerson.age += 1;
  return splitedPerson;
}

const splitedPersonA = ageIncreaser(personA);
console.log(personA.age);
console.log(splitedPersonA.age);
