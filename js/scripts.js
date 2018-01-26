function Pizza(style, size) {
  this.style = style;
  this.size = size;
  this.toppings = [];
  this.price = 0;
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
  var total = 0;
  $(".cartTotal").text(total);

  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var style = $("#style").val();
    var size = $("#size").val();
    var newPizza = new Pizza(style, size);

    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingChoice = $(this).val();
      newPizza.toppings.push(toppingChoice);
    });

    newPizza.cost();
    total += newPizza.price;
    $(".cartTotal").text(total);
    $(".cartWell").show();;
    $("#cartHeader").show();

    $("ul#cart").append("<li><span class='cartItem'>" + newPizza.size + " " + newPizza.style + " Pizza" + "</span></li>");

    $(".cartItem").last().click(function() {
      $("#show-pizza").show();
      $("#show-pizza h3").text(newPizza.size + " " + newPizza.style + " Pizza");
      $(".size").text(newPizza.size);
      $(".style").text(newPizza.style);
      $(".toppings").text(newPizza.toppings);
      $(".cost").text(newPizza.price);
    });

    $("#pizzaForm")[0].reset();
  });
});
