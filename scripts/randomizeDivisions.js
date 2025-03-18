const divisions = {
  1: [],
  2: [],
  3: [],
};

let owners = [
  "Norment",
  "Manz",
  "DanJW",
  "Alex",
  "Stephen",
  "Conman",
  "Levy",
  "Scott",
  "Tumin",
  "Marc",
  "Andrew",
  "Wayne",
  "Anna",
  "Nate B",
];

// function getDivisionIndex(divisionObject) {
//   const index = Math.floor(Math.random() * 3) + 1;
//   if (divisionObject[index].length <= 5) {
//     return index;
//   } else {
//     getDivisionIndex(divisionObject);
//   }
// }

// while (owners.length > 0) {
//   for (const owner of owners) {
//     const divisionIndex = getDivisionIndex(divisions);
//     divisions[divisionIndex] = [...divisions[divisionIndex], owner];
//     owners = owners.filter((name) => name != owner);
//   }
// }

// copilot

function getDivisionIndex() {
  return Math.floor(Math.random() * 3) + 1;
}

owners.forEach((owner) => {
  let divisionIndex;
  do {
    divisionIndex = getDivisionIndex();
  } while (divisions[divisionIndex].length >= 5);
  divisions[divisionIndex].push(owner);
});

console.log(divisions);
