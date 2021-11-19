"use strict";

let totalOrder = document.querySelector(".total_order");
let totalProp = document.querySelector(".total_prop");
let percentageProp = document.querySelector(".percentage_prop");

const orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

// a)
const total = Object.values(orderData).reduce((prev, next) => prev + next); // Calculating the total of all key values
totalOrder.insertAdjacentHTML("afterbegin", `<li>${total}</li>`);

// b)
const headers = Object.keys(orderData); // Computing all keys of the Object
totalProp.insertAdjacentHTML("afterbegin", `<li>${headers.length}</li>`);

//c)
const response = headers.map((item, index) => {
  return {
    id: index + 1,
    restaurant: "Punjabi Tadka",
    order: item,
    orderPercentage: ((orderData[item] / total) * 100).toFixed(2),
  };
});

response.forEach((val, idx) => {
  percentageProp.insertAdjacentHTML(
    "beforeEnd",
    `<li>ID: ${val.id}</li><li>restaurantName: ${val.restaurant}</li><li>order: ${val.order}</li><li>orderPercentage: ${val.orderPercentage}%</li><br/>`
  );
});
