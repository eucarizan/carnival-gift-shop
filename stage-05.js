const input = require('sync-input');
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
  if (gifts.length === 0) {
    console.log("Wow! There are no gifts to buy.");
  } else {
    gifts.forEach((gift) => {
      console.log(`${gift.id}- ${gift.name}, Cost: ${gift.cost} tickets`);
    });
  }
  console.log();
}

function showMenu() {
  const query = `What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
`;

  let choice = Number(input(query));
  while (choice != 5) {
    switch (choice) {
      case 1:
        buyGift();
        break;
      case 2:
        addTickets();
        break;
      case 3:
        checkTickets();
        console.log();
        break;
      case 4:
        listGifts();
        break;
      default:
        console.log("Please enter a valid number!\n");
        break;
    }
    choice = Number(input(query));
  }
}

function buyGift() {
  if (gifts.length !== 0) {
    const choice = input('Enter the number of the gift you want to get: ');
    if (Number.isNaN(Number(choice)) {
      console.log("Please enter a valid number!");
    } else {
      const index = Number(choice);
      let gift = getGiftById(index);
      if (gift) {
        const { name, cost } = gift;
        console.log(`Here you go, one ${name}!`);
        tickets -= cost;
        removeGiftById(index);
        checkTickets();
      } else {
        console.log("There is no gift with that number!");
      }
    }
  } else {
    console.log("Wow! There are no gifts with that number!");
  }
  console.log();
}

function getGiftById(id) {
  return gifts.find(gift => gift.id == id) || null;
}

function removeGiftById(id) {
  const index = gifts.findIndex(gift => gift.id === id);
  if (index !== -1) {
    gifts.splice(index, 1);
  }
}

function checkTickets() {
  console.log(`Total tickets: ${tickets}`);
}

function addTickets() {
  let choice = input("Enter the ticket amount: ");
  if (Number.isNaN(choice)) {
    console.log("Please enter a valid number between 0 and 1000.");
  } else {
    let ticketToAdd = Number(choice);
    if (ticketToAdd > -1 && ticketToAdd < 1001) {
      tickets += ticketToAdd;
      checkTickets();
    } else {
      console.log("Please enter a valid number between 0 and 1000.");
    }
  }
}

(function main() {
  displayGreeting();
  listGifts();
  showMenu();
  console.log("Have a nice day!");
})();

