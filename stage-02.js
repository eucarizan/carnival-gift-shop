const greeting = "WELCOME TO THE CARNIVAL GIFT SHOP!\n" +
  "Hello friend! Thank you for visiting the carnival!";

const gifts = ["Teddy Bear", "Big Red Ball", "Huge Bear", "Candy", "Stuffed Tiger", 
  "Stuffed Dragon", "Skateboard", "Toy Car", "Basketball", "Scary Mask"];

function listGifts() {
  console.log("Here's the list of gifts:\n");
  gifts.forEach(e => console.log(e));
}

(function main() {
  console.log(greeting);
  listGifts();
})();
