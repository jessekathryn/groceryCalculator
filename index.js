"use strict";
var items = [];
function getItems() {
  let article = document.getElementById("description").value;
  let amount = document.getElementById("amount").value;
  let banner = document.getElementById("banner");
  let line = document.getElementById("line");

  banner.style.visibility = "visible";
  line.style.visibility = "visible";

  let newItems = function (article, amount) {
    return {
      article: article,
      amount: amount,
    };
  };

  items.push(newItems(article, amount));

  let sum = 0;
  const ul = document.getElementById("ticket");
  const li = document.createElement("li");
  items.forEach((item) => {
    li.innerHTML = `${item.article} $${item.amount}`;
    li.classList.add("list-item")
    ul.appendChild(li),
    sum += Number(item.amount);
  });

  document.getElementById("total").innerText = `TOTAL $${sum}`;
}
