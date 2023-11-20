const { Router } = require ('express');
const controller = require ('./controller');

const router = Router ();

// Get
router.get("/users", controller.getUsersQuery);
router.get("/foodList", controller.getFoodListQuery);
router.get("/menuList", controller.getMenuListQuery);
router.get("/reservations", controller.getReservationsQuery);
router.get("/schedules", controller.getSchedulesQuery);

// Login
router.post("/userLogin", controller.loginUser);

// Create
router.post("/foodList", controller.createFoodListQuery);
router.post("/menuList", controller.createMenuListQuery);
router.post("/reservations", controller.createReservationsQuery);

// Delete
router.delete('/foodList/:id', controller.deleteFoodQuery);
router.delete('/menuList/:id', controller.deleteMenuQuery);

// Put
router.put('/foodList/:id', controller.putFoodQuery);
router.put('/menuList/:id', controller.putMenuQuery);
router.put('/schedules/:id', controller.putSchedulesQuery);

module.exports = router;