const greeting = `WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`;

const gifts = {
 "Teddy Bear": 10,
 "Big Red Ball": 5,
 "Huge Bear": 50,
 "Candy": 8,
 "Stuffed Tiger": 15,
 "Stuffed Dragon": 30,
 "Skateboard": 100,
 "Toy Car": 25,
 "Basketball": 20,
 "Scary Mask": 75
};

function displayGreeting() {
  console.log(greeting);
}

function listGifts() {
  console.log("Here's the list of gifts:\n");
  /*
  let i = 1;
  for (let toy in gifts) {
    console.log(`${i}- ${toy}, Cost: ${gifts[toy]} tickets`);
    i++;
  }
  */
  Object.entries(gifts).forEach(([gift, cost], index) => {
    console.log(`${index + 1}- ${gift}, Cost: ${cost} tickets`);
  });
}

(function main() {
  displayGreeting();
  listGifts();
})();
