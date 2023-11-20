const fs = require('fs');

const getUsersSQL = fs.readFileSync("./src/restaurant/sql/users.sql").toString();
const getFoodListSQL = fs.readFileSync("./src/restaurant/sql/foodList.sql").toString();
const getMenuListSQL = fs.readFileSync("./src/restaurant/sql/menuList.sql").toString();
const getReservationsSQL = fs.readFileSync("./src/restaurant/sql/reservations.sql").toString();
const getSchedulesSQL = fs.readFileSync("./src/restaurant/sql/schedules.sql").toString();
const createFoodListSQL = fs.readFileSync("./src/restaurant/sql/createFoodList.sql").toString();
const createMenuListSQL = fs.readFileSync("./src/restaurant/sql/createMenuList.sql").toString();
const createReservationsUserSQL = fs.readFileSync("./src/restaurant/sql/createReservationsUser.sql").toString();
const createReservationsBookingSQL = fs.readFileSync("./src/restaurant/sql/createReservationsBooking.sql").toString();
const deleteFoodSQL = fs.readFileSync("./src/restaurant/sql/deleteFood.sql").toString();
const deleteMenuSQL = fs.readFileSync("./src/restaurant/sql/deleteMenu.sql").toString();
const putFoodSQL = fs.readFileSync("./src/restaurant/sql/putFood.sql").toString();
const putMenuSQL = fs.readFileSync("./src/restaurant/sql/putMenu.sql").toString();
const putSchedulesSQL = fs.readFileSync("./src/restaurant/sql/putSchedules.sql").toString();

module.exports = {
    getUsersSQL,
    getFoodListSQL,
    getMenuListSQL,
    getReservationsSQL,
    getSchedulesSQL,
    createFoodListSQL,
    createMenuListSQL,
    createReservationsUserSQL,
    createReservationsBookingSQL,
    deleteFoodSQL,
    deleteMenuSQL,
    putFoodSQL,
    putMenuSQL,
    putSchedulesSQL
}