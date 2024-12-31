# carnival gift shop

- [carnival gift shop](#carnival-gift-shop)
  - [learning](#learning)
  - [about](#about)
  - [stages](#stages)
    - [1: welcome to the carnival](#1-welcome-to-the-carnival)
    - [2: how much](#2-how-much)
    - [3: what visitor wants](#3-what-visitor-wants)
    - [4: can you repeat](#4-can-you-repeat)

## learning
get familiar with javascript's fundamental syntax and create a simple program that utilizes variables, conditions, loops, and functions.

## about
welcome to the carnival gift shop! you’ve won many tickets at the carnival; it’s time to spend them! in this project, you will write the program to show the list of gifts, the tickets you have, and buy the gift you want. in addition, you will improve your javascript skills and get more comfortable with it!

## stages
### 1: welcome to the carnival
<details>
<summary>use console logs, loops, and arrays to greet users and show the list of gifts they can purchase</summary>

#### 1.1 description
it’s a beautiful day at the carnival! visitors have played many games and now want to spend their tickets. so, let’s welcome them with this message first: `welcome to the carnival gift shop!`

then, let’s greet our visitors with this message: `hello friend! thank you for visiting the carnival!`

next, we will show the list of gifts that the visitors can buy. it is the list of gifts that we will use throughout the project:

```
teddy bear

big red ball

huge bear

candy

stuffed tiger

stuffed dragon

skateboard

toy car

basketball

scary mask
```

before we show the list, output this message: `here's the list of gifts:`

then, output the list of gifts like in the example.

#### 1.2 objectives
in this stage, your program should:
1. print the welcoming and greeting messages.
2. print the list of gifts.

#### 1.3 examples
**example 1**: _where the program starts with the welcome messages and shows the list of gifts_

```
welcome to the carnival gift shop!
hello friend! thank you for visiting the carnival!
here's the list of gifts:

teddy bear
big red ball
huge bear
candy
stuffed tiger
stuffed dragon
skateboard
toy car
basketball
scary mask
```

</details>

### 2: how much
<details>
<summary>practice with objects to store more information about gifts and show them in the console.</summary>

#### 2.1 description
in the previous stage, you've shown the list of gifts in our gift shop. now, we need to show more information about these gifts: the price and id/order.

keep all the previous messages but change how the list of gifts is shown with additional information.

the details about the gifts are below:

name|price|id/order
:-:|:-:|:-:
teddy bear|10|1
big red ball|5|2
huge bear|50|3
candy|8|4
stuffed tiger|15|5
stuffed dragon|30|6
skateboard|100|7
toy car|25|8
basketball|20|9
scary mask|75|10

output the changes like in the example. using objects can be helpful with the details of a gift.

#### 2.2 objectives
in this stage, your program should:
- print welcoming and greeting messages from the previous stage.
- print the list of gifts with the new information.

#### 2.3 examples
example 1: where the program starts with the welcome messages and shows the list of gifts with the new details

```
welcome to the carnival gift shop!
hello friend! thank you for visiting the carnival!
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets
10- scary mask, cost: 75 tickets
```

</details>

### 3: what visitor wants
<details>
<summary>get input from the user to perform various tasks and work with conditionals, switch cases, and numbers to output correct results.</summary>

#### 3.1 description
now that you have the list of gifts with details, the visitors will decide what they want.

first, let’s get this input from the visitor:

```
what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts
```

the visitor will enter the respective number to choose an option. also, the visitor will have `100` tickets in the beginning.

in the first option, we will ask for another input: `enter the number of the gift you want to get:`

the visitor will enter the id/order number of the gift, and we will output the name of the gift: `here you go, one %gift_name%!`

then, we will subtract the ticket amount of the chosen gift from the visitor’s total tickets and show the total tickets: `total tickets: 90`

in the second option, the visitor will enter the number of tickets to add with this input: `enter the ticket amount:`

after that, we will show the total number of tickets again!

in the third option, let's show the total tickets that the visitor has: `total tickets: 90`

and in the last option, show the list of gifts again like in the example!

after any of these cases, output this message before ending the program: `have a nice day!`

#### 3.2 objectives
in this stage, your program should:

1. print the welcoming and greeting messages from the previous stage;
2. print the list of gifts;
3. handle the initial input where the user chooses what to do;
4. handle the option to buy a gift;
5. handle the option to add more tickets;
6. handle the option to see the total tickets;
7. handle the option to see the list of gifts;
8. terminate the program with a new message.

#### 3.3 examples
the greater-than symbol followed by a space (`> `) represents the user input. note that it's not part of the input.

**example 1**: _where the program handles the initial input with the first option_
```
welcome to the carnival gift shop!
hello friend! thank you for visiting the carnival!
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets
10- scary mask, cost: 75 tickets

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts
> 1
enter the number of the gift you want to get: > 1
here you go, one teddy bear!
total tickets: 90
have a nice day!
```

**example 2**: _where the program handles the initial input with the second option_
```
welcome to the carnival gift shop!
hello friend! thank you for visiting the carnival!
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets
10- scary mask, cost: 75 tickets

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts
> 2
enter the ticket amount: > 100
total tickets: 200
have a nice day!
```

**example 3**: _where the program handles the initial input with the third option_
```
welcome to the carnival gift shop!
hello friend! thank you for visiting the carnival!
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets
10- scary mask, cost: 75 tickets

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts
> 3
total tickets: 100
have a nice day!
```

**example 4**: _where the program handles the initial input with the fourth option_
```
welcome to the carnival gift shop!
hello friend! thank you for visiting the carnival!
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets
10- scary mask, cost: 75 tickets

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts
> 4
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets
10- scary mask, cost: 75 tickets
have a nice day!
```

</details>

### 4: can you repeat
<details>
<summary>implement a condition to run your program continuously until users decide to quit</summary>

#### 4.1 description
in the previous stage, you've implemented the operations the visitor can do with our program. now, let's loop our program until visitors decide to quit. add a new prompt to exit the program to the initial input:

```
what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts 5-exit the shop
```

if the visitor enters the exit command, the program will end and show the previous ending message. otherwise, the program will go back to our initial input and ask the visitors what to do again.

additionally, in the case of buying gifts, if everything goes well, remove the gift that the visitor bought from the list of gifts.

don't worry about the user not having enough tickets to buy a gift. you'll handle cases like this in the next stage.

the starting tickets will be `zero` this time. 

#### 4.2 objectives
in this stage, your program should:

1. print the welcoming and greeting messages from the previous stage;
2. print the list of gifts;
3. handle initial input which the user chooses what to do;
4. handle the option to buy a gift and remove the gift from the list;
5. handle the option to add more tickets;
6. handle the option to see the total tickets;
7. handle the option to see the list of gifts;
8. handle a new option to quit the program;
9. run continuously;
10. terminate the program with the message.

#### 4.3 examples
the greater-than symbol followed by a space (`> `) represents the user input. note that it's not part of the input.

**example 1**: _where the program starts and runs continuously until the exit prompt_

```
welcome to the carnival gift shop!
hello friend! thank you for visiting the carnival!
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets
10- scary mask, cost: 75 tickets

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts 5-exit the shop
> 2
enter the ticket amount: > 100
total tickets: 100

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts 5-exit the shop
> 1
enter the number of the gift you want to get: > 10
here you go, one scary mask!
total tickets: 25

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts 5-exit the shop
> 4
here's the list of gifts:

1- teddy bear, cost: 10 tickets
2- big red ball, cost: 5 tickets
3- huge bear, cost: 50 tickets
4- candy, cost: 8 tickets
5- stuffed tiger, cost: 15 tickets
6- stuffed dragon, cost: 30 tickets
7- skateboard, cost: 100 tickets
8- toy car, cost: 25 tickets
9- basketball, cost: 20 tickets

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts 5-exit the shop
> 3
total tickets: 25

what do you want to do?
1-buy a gift 2-add tickets 3-check tickets 4-show gifts 5-exit the shop
> 5
have a nice day!

process finished with exit code 0
```

</details>

[<<](https://github.com/eucarizan/front-end/blob/main/README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
the greater-than symbol followed by a space (`> `) represents the user input. note that it's not part of the input.

### 0: 
<details>
<summary></summary>

#### 0.1 description

#### 0.2 objectives

#### 0.3 examples

</details>
-->

