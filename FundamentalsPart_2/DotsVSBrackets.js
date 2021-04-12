const kanchan = {
  firstName: "kanchan",
  lastName: "gandhi",
  age: 2021 - 1989,
  job: "SE",
  friends: ["michel", "peter", "steven"],
};
console.log(kanchan);

console.log(kanchan.lastName);
console.log(kanchan["lastName"]);

const nameKey = "Name";
console.log(kanchan["first" + nameKey]);
console.log(kanchan["last" + nameKey]);

const interestedIn = prompt(
  "what do you want to know about kanchan? choose between firstName, lastName, age, job and friends"
);
//console.log(kanchan[interestedIn]);

if (kanchan[interestedIn]) {
  console.log(kanchan[interestedIn]);
} else {
  console.log(
    "wrong request, choose between firstName, lastName, age, job and friends"
  );
}

kanchan.location = "japan";
kanchan["facebook"] = "kanchangandhi20";
console.log(kanchan);

// challenge

console.log(
  `${kanchan.firstName} has ${kanchan.friends.length} friends, and his best friend is called ${kanchan.friends[0]}`
);
