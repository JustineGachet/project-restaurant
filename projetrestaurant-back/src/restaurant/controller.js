const { query } = require('../../db');
const bcrypt = require('bcrypt');

const { 
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
} = require ('./queries');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Recherche de l'utilisateur par e-mail
        const userQuery = 'SELECT * FROM users WHERE mail = ?';
        const userRows = await query(userQuery, [email]);
        
        if (userRows.length === 0) {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
            return;
        }

        const user = userRows[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Erreur d'identification" });
                return;
            }

            if (result) {
                const userData = {
                    id: user.id,
                    lastname: user.lastname,
                    firstname: user.firstname,
                    mail: user.mail,
                    phone_number: user.phone_number,
                    allergie: user.allergie,
                    is_registered: user.is_registered,
                    is_admin: user.is_admin
                };
                res.status(200).json(userData);
            } else {
                res.status(401).json({ error: 'Mot de passe incorrect' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'authentification" });
    }
};


// Controller pour voir la liste des utilisateurs
const getUsersQuery = async (req, res) => {
    try {
        const rows = await query(getUsersSQL);
        res.status(200).json(rows);
    } catch ( error ) {
        if (error) throw error;
    }
};


const getFoodListQuery = async (req, res) => {
    try {
        const rows = await query(getFoodListSQL);
        res.status(200).json(rows);
    } catch ( error ) {
        if (error) throw error;
    }
};

const getMenuListQuery = async (req, res) => {
    try {
        const rows = await query(getMenuListSQL);
        res.status(200).json(rows);
    } catch ( error ) {
        if (error) throw error;
    }
};

const getReservationsQuery = async (req, res) => {
    try {
        const rows = await query(getReservationsSQL);
        res.status(200).json(rows);
    } catch ( error ) {
        if (error) throw error;
    }
};

const getSchedulesQuery = async (req, res) => {
    try {
        const rows = await query(getSchedulesSQL);
        res.status(200).json(rows);
    } catch ( error ) {
        if (error) throw error;
    }
};

// Controller pour POST ajouter un plat
const createFoodListQuery = async (req, res) => {
    const foodData = req.body;
    const params = [
        foodData.food_type,
        foodData.title,
        foodData.description,
        foodData.price,
        foodData.currency,
        foodData.image_url,
        foodData.is_exposed
    ]

    try {
        const rows = await query(createFoodListSQL, params);
        res.status(201).json({ message: 'Plat créée avec succès', foodId: rows.insertId });
    } catch ( error ) {
        res.status(500).json({ error: 'Erreur lors de la création du plat' });
        if (error) throw error;
    }
};

// Controller pour POST ajouter un plat
const createMenuListQuery = async (req, res) => {
    const menuData = req.body;
    const params = [
        menuData.title,
        menuData.description,
        menuData.price,
        menuData.currency,
        menuData.image_url,
    ]
    try {
        const rows = await query(createMenuListSQL, params);
        res.status(201).json({ message: 'Menu créée avec succès', menuId: rows.insertId });
    } catch ( error ) {
        res.status(500).json({ error: 'Erreur lors de la création du menu' });
        if (error) throw error;
    }
};

// Controller pour POST ajouter une reservation
const createReservationsQuery = async (req, res) => {
    const createReservationsData = req.body;
    console.log(createReservationsData)
    const paramsUser = [
        createReservationsData.lastnameField,
        createReservationsData.firstnameField,
        createReservationsData.mailField,
        createReservationsData.phoneField,
        createReservationsData.allergieField
    ];

    try {
        const resultUser = await query(createReservationsUserSQL, paramsUser);
        const paramsBooking = [
            createReservationsData.dateField,
            createReservationsData.hourField,
            createReservationsData.seatField,
            resultUser.insertId
        ];
        const resultBooking = await query(createReservationsBookingSQL, paramsBooking);

        if (resultBooking.affectedRows === 1) {
            res.status(201).json({ message: 'Réservation créée avec succès', reservationsId: resultBooking.insertId });
        } else {
            res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
        console.error(error);
    }
};

// Controller pour DELETE supprimer un plat
const deleteFoodQuery = async (req, res) => {
    const foodId = req.params.id; // Identifiant du plat à supprimer
    try {
        // Exécute la requête DELETE pour supprimer le plat avec foodId
        await query(deleteFoodSQL, [foodId])
        res.status(204).send(); // Répond avec un code 204 en cas de succès
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du plat' });
        if (error) throw error;
    }
};

// Controller pour DELETE supprimer un plat
const deleteMenuQuery = async (req, res) => {
    const menuId = req.params.id; // Identifiant du menu à supprimer
    try {
        await query(deleteMenuSQL, [menuId])
        res.status(204).send(); // Répond avec un code 204 en cas de succès
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du menu' });
        if (error) throw error;
    }
};

// Controller pour modifier un plat 
const putFoodQuery = async (req, res) => {
    const foodId = req.params.id;
    const updatedFoodData = req.body; // Récupérez les nouvelles données du plat depuis le corps de la requête
  
    try {
      // Vérifiez d'abord si le plat existe
      const existingFood = await query(getFoodListSQL, [foodId]);
  
      if (existingFood.length === 0) {
        return res.status(404).json({ error: 'Plat non trouvé' });
      }
  
      // Mettez à jour les propriétés du plat avec les nouvelles données
      await query(putFoodSQL, [updatedFoodData.food_type, updatedFoodData.title, updatedFoodData.description, updatedFoodData.price, updatedFoodData.currency, updatedFoodData.image_url, updatedFoodData.is_exposed, foodId]);
  
      res.json({ message: 'Plat mis à jour avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour du plat' });
    }
  };

// Controller pour modifier un menu 
const putMenuQuery = async (req, res) => {
    const menuId = req.params.id;
    const updatedMenuData = req.body; // Récupérez les nouvelles données du menu depuis le corps de la requête
  
    try {
      // Vérifiez d'abord si le menu existe
      const existingMenu = await query(getMenuListSQL, [menuId]);
  
      if (existingMenu.length === 0) {
        return res.status(404).json({ error: 'Menu non trouvé' });
      }
  
      // Mettez à jour les propriétés du menu avec les nouvelles données
      await query(putMenuSQL, [updatedMenuData.title, updatedMenuData.description, updatedMenuData.price, updatedMenuData.currency, updatedMenuData.image_url, menuId]);
  
      res.json({ message: 'Menu mis à jour avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour du menu' });
    }
};

// Controller pour modifier un horaire
const putSchedulesQuery = async (req, res) => {
    const schedulesId = req.params.id;
    const updatedSchedulesData = req.body; // Récupérez les nouvelles données du menu depuis le corps de la requête
  
    try {
      // Vérifiez d'abord si le menu existe
      const existingSchedules = await query(getSchedulesSQL, [schedulesId]);
  
      if (existingSchedules.length === 0) {
        return res.status(404).json({ error: 'Horaire non trouvé' });
      }
  
      // Mettez à jour les propriétés du menu avec les nouvelles données
      await query(putSchedulesSQL, [updatedSchedulesData.day, updatedSchedulesData.opened_hour_lunch, updatedSchedulesData.closed_hour_lunch, updatedSchedulesData.opened_hour_diner, updatedSchedulesData.closed_hour_diner, schedulesId]);
  
      res.json({ message: 'Horaires mis à jour avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour des horaires' });
    }
};
  

module.exports = {
    getUsersQuery,
    getFoodListQuery,
    getMenuListQuery,
    getReservationsQuery,
    getSchedulesQuery,
    createFoodListQuery,
    createMenuListQuery,
    createReservationsQuery,
    deleteFoodQuery,
    deleteMenuQuery,
    putFoodQuery,
    putMenuQuery,
    putSchedulesQuery,
    loginUser,
};