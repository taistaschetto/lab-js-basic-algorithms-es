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

//BONO 1

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dictum odio. In ornare neque eu pharetra maximus. In hac habitasse platea dictumst. Etiam non tempor magna. Ut ultricies tincidunt turpis sed semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin pretium augue quis tempus scelerisque. Ut finibus mattis erat, a tempor orci condimentum ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ut augue laoreet, fermentum arcu at, accumsan dolor. Ut tristique leo quis ligula commodo eleifend. Praesent nec aliquam nulla. Maecenas lacinia metus ac sapien facilisis rutrum. Nam tincidunt, tortor quis facilisis vestibulum, turpis justo sodales sapien, ac mollis urna leo maximus justo. Praesent dui nibh, eleifend eget euismod eget, porta sed mi. Vivamus posuere eros elit, id semper massa consectetur ut. \nSuspendisse potenti. Nullam finibus porta magna, ut blandit lacus efficitur in. Integer venenatis dapibus mauris in suscipit. Nunc interdum dolor in nisi mattis, nec tempus quam molestie. Nulla eleifend consequat ex, at vehicula nibh elementum et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ullamcorper, elit eu pulvinar pharetra, tellus justo hendrerit metus, a pulvinar ex sapien ut felis. In efficitur suscipit libero, id varius sapien interdum quis.\nUt scelerisque dictum ultrices. Proin vitae nulla nec nisi lobortis posuere. Nunc nec venenatis neque. Etiam iaculis neque sem, sagittis interdum odio luctus fermentum. Morbi porta tortor ac dapibus hendrerit. Morbi mauris urna, iaculis sed efficitur ut, efficitur vitae nisi. Ut quis varius tellus. Cras metus metus, condimentum eget pellentesque a, mollis in eros. In accumsan a nisi et tempus. Nunc bibendum, justo vel vulputate convallis, augue nisi semper enim, ac convallis neque augue non augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam cursus odio sit amet sem lacinia vestibulum. Nam placerat iaculis sapien, eget aliquet eros fringilla non. Praesent a mauris mollis, blandit ipsum in, maximus neque. Nullam egestas luctus tincidunt.";

console.log(loremIpsum);

function countLorem(str) {
  const wordsArray = str.split(" ");

  return wordsArray.length;
}
console.log(countLorem(loremIpsum));

function countET(text) {
  const wordsLorem = text.split(/\s+/);

  const count = wordsLorem.filter(
    (word) => word === "et" || word === "Et"
  ).length;

  return count;
}
console.log(countET(loremIpsum));

//BONO 2
let phraseToCheck = "roma é amor";

function palindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }
  return true;
}
console.log(palindrome(phraseToCheck));
