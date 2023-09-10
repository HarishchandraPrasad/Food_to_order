module.exports = app => {
    const restaurants = require("../controllers/restaurants.controller");
    const users = require("../controllers/users.controller")
    const orders = require("../controllers/orders.controller")
    const cart = require("../controllers/cart.controller")
    var router = require("express").Router();
  
    // Create a new Restaurant
    router.get("/restaurants", restaurants.getRestaurants);
    router.post("/restaurants", restaurants.createRestaurant);
    router.get("/restaurants/:id",restaurants.getByIdRestaurant)
    router.put("/restaurants/:id",restaurants.updateRestaurant);
    router.delete("/restaurants/:id",restaurants.deleteRestaurant)

    router.get("/users",users.getUsers)
    router.post("/users",users.createUser)
    router.get("/users/:id",users.getByIduser)
    router.put("/users/:id",users.updateUser)
    router.delete("/users/:id",users.deleteUser)
    router.post('/userscount',users.displayCount)
    //router.post()

    router.get("/orders",orders.getOrders)
    router.post("/orders",orders.createOrder)
    router.get("/orders/:id",orders.getByIdOrder)
    router.put("/orders/:id",orders.updateOrder)
    router.delete("/orders/:id",orders.deleteOrder)
    router.get("/ordersexcel",orders.convertExcel)

    router.get("/carts",cart.getCarts)
    router.post("/carts",cart.createCart)
    router.get("/carts/:id",cart.getByIdCart)
    router.put("/carts/:id",cart.updateCart)
    router.delete("/carts/:id",cart.deleteCart)
    app.use('/',router)
}