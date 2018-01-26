# _Order Pizza_

#### _Website using HTML, CSS/Bootstrap, and JavaScript/Jquery for Epicodus, 01.26.2018_

#### _By Stephanie Faber_

## _Description_

Webpage designed to take user input for a pizza. This page has a header for the name of the company, a form for various parts of the pizza, such as toppings and size of pizza, and a submit button which will then reveal the pizza price.

You can also view this project on gh-pages:
https://eyesicedover.github.io/order-pizza/

## _Specifications_

1. User can select a pizza size and style.
* Example input: User uses a select box to choose "Medium" and "Deep Dish"
* Example output: Size: "Medium"
* Example output: Style: "Deep Dish"


2. User can select any amount of checkbox toppings.
* Example input: User clicks on "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: The corresponding checkboxes are checked.

3. User submits their pizza with the Put into Cart button and the fields reset.
* Example input: Size: "Medium", Style: "Deep Dish", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: The form is submitted, the form resets.

4. The program stores the user choices in a Pizza object, using a Pizza constructor.
* Example input: Size: "Medium", Style: "Deep Dish", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: newPizza (style: "Deep Dish", size: "Medium",  toppings: ["Pepperoni", "Black Olives", "Bell Pepper"]);

5. The program calculates the price based on size and number of toppings and stores it in the pizza object.
* Example input: Size: "Medium", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper
* Example output: newPizza.price = 13

6. The pizza in stored in an array of Pizzas.
* Example input: newPizza (style: "Deep Dish", size: "Medium",  toppings: ["Pepperoni", "Black Olives", "Bell Pepper"])
* Example output: newPizzaArray [newPizza];

7. The pizzas are displayed in a Cart on the webpage.
* Example input: Size: "Medium", Style: "Deep Dish", Toppings: "Pepperoni", "Black Olives", and "Bell Pepper"
* Example output: Pizza: Medium, Deep Dish

8. The pizzas can be clicked to reveal topping choices.
* Example input: Click on Pizza: Medium, Deep Dish
* Example output: Pizza: Medium, Deep Dish, Pepperoni, Black Olives, Bell Pepper

9. The Cart updates a cost total based on the Pizzas
* Example input: 2 pizzas in array, each with price = 13
* Example output: The cart total is $26

10. The Cart has a button to Order the pizzas and it asks for address.
* Example input: User clicks Order button
* Example output: Form appears for address.


## _Setup/Installation Requirements_

* Clone this repository.
* Ensure that jquery version 3.2.1 is included, as well as bootstrap.css.
* Open the page in your preferred web browser.


## _Known Bugs_

No currently known bugs.

## _Support and contact details_

If you have any issues or questions please contact me via email.
Email: eyesicedover@gmail.com

## _Technologies Used_

* HTML
* CSS
* Bootstrap
* JavaScript
* Jquery-3.3.1

### _License_

Copyright (c) 2018 Stephanie Faber
This software is licensed under the MIT license.
