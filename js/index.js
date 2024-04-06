console.log("Estoy listo!");

//Iteration 1: Names and Input
let hacker1 = "Mario";
let hacker2 = "Antonio";

console.log("El nombre del conductor es", hacker1);
console.log("El nombre del navegante es", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`
  );
} else {
  console.log(
    `¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`
  );
}

// Iteration 3: Loops

//3.1
function printUppercase(hacker1) {
  const uppercaseHacker1 = hacker1.toUpperCase();

  const lettersArray = uppercaseHacker1.split("");

  const spacedHacker1 = lettersArray.join(" ");

  return spacedHacker1;
}

console.log(printUppercase(hacker1));

//3.2

function reversedHacker1(hacker1) {
  const lettersArray = hacker1.split("");

  const reversedArray = lettersArray.reverse();

  const reversedName = reversedArray.join("");

  return reversedName;
}

console.log(reversedHacker1(hacker1));

