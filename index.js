// functions destructurisation

const myStrat = {
  brand: "fender",
  year: 2007,
  color: "3 TBS",
  humbuckers: 1,
  usaMade: true,
};

const stratInfo = ({ brand, humbuckers }) => {
  if (!humbuckers) {
    return `That  ${brand} guitar has no hums`;
  }
  return `That ${brand} guitar has ${humbuckers} hums`;
};

console.log(stratInfo(myStrat));
