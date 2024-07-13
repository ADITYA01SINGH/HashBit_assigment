let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];
  
let countBefore = states.length;

let statesWithoutVowels = states.filter(state => {
let firstLetter = state.trim().charAt(0).toLowerCase();
return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});

let countAfter = statesWithoutVowels.length;

console.log("Number of states before filtering:", countBefore);
console.log("Number of states after filtering:", countAfter);
console.log("States after filtering:", statesWithoutVowels);