const fruits = ["Godwin", "Hannah", "Winner", "Ejiro", "Daniel"];

const itemsList = document.getElementById("items-list");

fruits.forEach((fruit) => {
  const listItem = document.createElement("li");

  listItem.textContent = fruit;

  itemsList.appendChild(listItem);
});
