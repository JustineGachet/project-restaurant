import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}
  user: { firstname: string | null, lastname: string | null, isAdmin: boolean } = {
    firstname: null,
    lastname: null,
    isAdmin: false
  }

// Fonction pour afficher les menus

isAdmin() {
  return this.user.isAdmin
}

getMenu() {

  // URL de votre API backend
  const apiUrl = 'http://localhost:3000/api/v1/restaurant/menuList';

  // Options de la requête
  const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  };

  // Utilisation de fetch pour effectuer la requête
  return fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        // Gérer la réponse du backend ici
        console.log('Réponse du backend:', data);
        return data
    }) 
    .catch(error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête:', error);
    });
}

  // Fonction pour afficher les plats

getFoodList() {

  // URL de votre API backend
  const apiUrl = 'http://localhost:3000/api/v1/restaurant/foodList';

  // Options de la requête
  const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  };

  // Utilisation de fetch pour effectuer la requête
  return fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        // Gérer la réponse du backend ici
        console.log('Réponse du backend:', data);
        return data
    }) 
    .catch(error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête:', error);
    });
}

  // Fonction pour afficher les horaires

  getSchedules() {

    // URL de votre API backend
    const apiUrl = 'http://localhost:3000/api/v1/restaurant/schedules';
  
    // Options de la requête
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    };
  
    // Utilisation de fetch pour effectuer la requête
    return fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
          // Gérer la réponse du backend ici
          console.log('Réponse du backend:', data);
          return data
      }) 
      .catch(error => {
          // Gérer les erreurs ici
          console.error('Erreur lors de la requête:', error);
      });
  }


  getReservation() {

    // URL de votre API backend
    const apiUrl = 'http://localhost:3000/api/v1/restaurant/reservations';

    // Options de la requête
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    };

    // Utilisation de fetch pour effectuer la requête
    return fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
          // Gérer la réponse du backend ici
          console.log('Réponse du backend:', data);
          return data
      }) 
      .catch(error => {
          // Gérer les erreurs ici
          console.error('Erreur lors de la requête:', error);
      });

  }

  // fonction pour ajouter une réservation en BDD

  createReservation(reservationData: any) {

    // URL de votre API backend
    const apiUrl = 'http://localhost:3000/api/v1/restaurant/reservations';

    // Options de la requête
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
    };

    // Utilisation de fetch pour effectuer la requête
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
          // Gérer la réponse du backend ici
          console.log('Réponse du backend:', data);
      })
      .catch(error => {
          // Gérer les erreurs ici
          console.error('Erreur lors de la requête:', error);
      });

  }

  loginUser(loginData: { email: string, password: string }) {

    // URL API backend
    const apiUrl = 'http://localhost:3000/api/v1/restaurant/userLogin';

    // Options de la requête
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    };

    return fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.is_admin) { this.user.isAdmin = true; }
        this.user.firstname = data.firstname;
        this.user.lastname = data.lastname; 
        return data;
      })
      .catch(error => {
        return error;
      });

  }

  updateSchedule(id: number, day: string, opened_hour_lunch: string, closed_hour_lunch: string, opened_hour_diner: string, closed_hour_diner: string ) {  

    // URL de votre API backend
    const apiUrl = `http://localhost:3000/api/v1/restaurant/schedules/${id}`;

    // Options de la requête
    const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day,
          opened_hour_lunch,
          closed_hour_lunch,
          opened_hour_diner,
          closed_hour_diner
        }),
    };

    // Utilisation de fetch pour effectuer la requête
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
          // Gérer la réponse du backend ici
          console.log('Réponse du backend:', data);
      })
      .catch(error => {
          // Gérer les erreurs ici
          console.error('Erreur lors de la requête:', error);
      });

  }
}