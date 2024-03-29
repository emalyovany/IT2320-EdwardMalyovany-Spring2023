let items = [
  { index: 0, name: "Classic Lemonade", quantity: 0, price: 5.0 },
  { index: 1, name: "Strawberry Lemonade", quantity: 0, price: 6.0 },
  { index: 2, name: "Special Limeade", quantity: 0, price: 8.0 },
];

function addToOrder(itemIndex) {
  const item = items.find((i) => i.index === itemIndex);

  if (!item) {
    console.error("Invalid item index");
    return;
  }

  item.quantity++;

  updateTransactionItems();
}

function removeFromOrder(itemIndex) {
  const item = items.find((i) => i.index === itemIndex);

  if (item) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  updateTransactionItems();
}

function clearAllItems() {
  items.forEach((item) => {
    item.quantity = 0;
  });

  updateTransactionItems();
}

function updateTransactionItems() {
  const itemsList = document.getElementById("itemsList");
  itemsList.innerHTML = "";
  let totalPrice = 0;

  items.forEach((item) => {
    const li = document.createElement("li");
    const quantity = `X${item.quantity}`;
    const itemName = item.name;
    const itemPrice = `$${(item.quantity * item.price).toFixed(2)}`;
    li.appendChild(
      document.createTextNode(`${quantity} ${itemName}: ${itemPrice}`)
    );
    itemsList.appendChild(li);
    totalPrice += item.quantity * item.price;
  });

  const total = document.createElement("li");
  const totalText = document.createTextNode(`Total: $${totalPrice.toFixed(2)}`);
  const totalBold = document.createElement("b");
  totalBold.appendChild(totalText);
  total.appendChild(totalBold);
  itemsList.appendChild(total);
}
