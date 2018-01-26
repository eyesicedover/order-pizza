function Pizza(style, size) {
  this.style = style;
  this.size = size;
  this.toppings = [];
  this.price = 0;
  this.number = 0;
}

Pizza.prototype.cost = function() {
  var price = 0;
  if (this.size === "Personal") {
    price += 8;
  } else if (this.size === "Medium") {
    price += 10;
  } else if (this.size === "Large") {
    price += 12;
  } else {
    price+= 15;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    price += 1;
  }

  this.price = price;
}

$(document).ready(function() {
  var pizzasArray = [];
  var counter = 0;
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var style = $("#style").val();
    var size = $("#size").val();
    var newPizza = new Pizza(style, size);
    counter++;

    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingChoice = $(this).val();
      newPizza.toppings.push(toppingChoice);
    });

    newPizza.cost();
    newPizza.number = counter;
    pizzasArray.push(newPizza);
    $("#pizzaForm")[0].reset();

    if (counter === 1) {
      $(".cart").show();
    }
    counter++;

    $(".cart").append("<li>" + "Pizza " + newPizza.number + ": " + newPizza.size + ", " + newPizza.style + "</li>");


  });
});
