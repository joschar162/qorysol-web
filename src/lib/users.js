// src/lib/users.js
// Este archivo contiene la definición de usuarios para uso compartido (opcional)
// Actualmente los datos están incrustados en index.astro, pero se exporta para posibles extensiones.

export const usersDatabase = {
  12345678: {
    password: "1234",
    fullName: "Ana Gómez",
    creditBalance: 1250.0,
    advisor: "Laura Fernández",
    loans: [
      {
        id: 1,
        amount: 500,
        date: "2023-01-10",
        status: "Pagado",
        remaining: 0,
      },
      {
        id: 2,
        amount: 800,
        date: "2023-06-15",
        status: "Pagado",
        remaining: 0,
      },
      {
        id: 3,
        amount: 1200,
        date: "2024-02-20",
        status: "Activo",
        remaining: 950,
      },
    ],
  },
  87654321: {
    password: "4321",
    fullName: "Carlos Ruiz",
    creditBalance: 3200.0,
    advisor: "Miguel Vargas",
    loans: [
      {
        id: 1,
        amount: 2000,
        date: "2023-11-01",
        status: "Activo",
        remaining: 1500,
      },
      {
        id: 2,
        amount: 500,
        date: "2024-01-20",
        status: "Pagado",
        remaining: 0,
      },
    ],
  },
  11111111: {
    password: "0000",
    fullName: "Rosa Mendoza",
    creditBalance: 500.0,
    advisor: "Laura Fernández",
    loans: [
      {
        id: 1,
        amount: 300,
        date: "2024-03-05",
        status: "Activo",
        remaining: 300,
      },
    ],
  },
};
