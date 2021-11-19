"use strict";

// Solution - 1
let restList = document.querySelector(".res_lists");
let resCity = document.querySelector(".res_city");

class restaurantManager {
  restaurantList = [
    {
      id: 1,
      restaurantName: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      restaurantName: "Domino",
      address: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      restaurantName: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      restaurantName: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
  ];

  printAllRestaurantNames = () => {
    return this.restaurantList.map((restaurant) => restaurant.restaurantName);
  };

  filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter(
      (restaurant) => restaurant.city == cityName
    );
  };
}

const restaurantObj = new restaurantManager();
let restName = restaurantObj.printAllRestaurantNames();
restName.forEach((val, idx) => {
  restList.insertAdjacentHTML("afterbegin", `<li>${val}</li>`);
});

let filterByCity = restaurantObj.filterRestaurantByCity("Mumbai");
filterByCity.forEach((val, idx) => {
  resCity.insertAdjacentHTML(
    "afterbegin",
    `<li>ID: ${val.id}</li><li>restaurantName: ${val.restaurantName}</li><li>address: ${val.address}</li><li>city: ${val.city}</li>`
  );
});
