// This Handles the "Check Status" button click on order.html.

var orderInput = document.getElementById("order-number");
var checkButton = document.getElementById("check-order");
var resultBox = document.getElementById("order-result");

checkButton.addEventListener("click", function () {
  var typedValue = orderInput.value;
  var noSpaces = typedValue.trim();
  var orderId = noSpaces.toUpperCase();

  if (orderId == "NS1001"){
    resultBox.textContent = " Order NS1001: Shipped - Your order is on the way.";

  }
  else if (orderId == "NS1002"){
    resultBox.textContent = "Order NS1002: Processing - your order has not been shipped yet" ;
  }
  else if (orderId === "NS1003") {
    resultBox.textContent = "Order NS1003: Delivered - your order has already arrived.";
  }
  else {
    resultBox.textContent = "We could not find an order with that reference ID. Re-check your ID.";
  }
});


