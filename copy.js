const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const greeting = `WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`;

const gifts = [
  { id: 1, name: "Teddy Bear", cost: 10 },
  { id: 2, name: "Big Red Ball", cost: 5 },
  { id: 3, name: "Huge Bear", cost: 50 },
  { id: 4, name: "Candy", cost: 8 },
  { id: 5, name: "Stuffed Tiger", cost: 15 },
  { id: 6, name: "Stuffed Dragon", cost: 30 },
  { id: 7, name: "Skateboard", cost: 100 },
  { id: 8, name: "Toy Car", cost: 25 },
  { id: 9, name: "Basketball", cost: 20 },
  { id: 10, name: "Scary Mask", cost: 75 }
];

let tickets = 0;

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
  Object.entries(gifts).forEach(([gift, cost], index) => {
    console.log(`${index + 1}- ${gift}, Cost: ${cost} tickets`);
  });
  */
  gifts.forEach((gift) => {
    console.log(`${gift.id}- ${gift.name}, Cost: ${gift.cost} tickets`);
  });
  console.log();
}

async function showMenu() {
  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  let choice = Number(await question("What do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts\n"));
  switch (choice) {
    case 1:
      await buyGift();
      break;
    case 2:
      await addTickets();
      break;
    case 3:
      checkTickets();
      break;
    case 4:
      listGifts();
      break;
  }
}

async function buyGift() {
  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  let id = Number(await question("\nEnter the number of gift you want to get:\n"));
  let gift = getGiftById(id);
  if (gift) {
    const { name, cost } = gift;
    console.log(`Here you go, one ${name}!`);
    tickets -= cost;
  }
  checkTickets();
}

function getGiftById(id) {
  return gifts.find(gift => gift.id == id) || null;
}

function checkTickets() {
  console.log(`Total tickets: ${tickets}\nHave a nice day!`);
}

async function addTickets() {
  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  let ticketToAdd = Number(await question("Enter the ticket amount: "));
  tickets += ticketToAdd;
  checkTickets();
}

(async function main() {
  tickets = 100;
  displayGreeting();
  listGifts();
  await showMenu();
  rl.close();
})();