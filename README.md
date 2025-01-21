# MealPrep
> MealPrep to narzędzie, które pomaga w zarządzaniu posiłkami, planowaniu diety oraz organizacji zakupów spożywczych. Stworzony z myślą o osobach dbających o zdrowe odżywianie oraz oszczędność czasu.

## Table of Contents
- **[Installing](#installing)**<br>
- **[Overview](#overview)**<br>
- **[Used Technology](##used-technology-endpoints)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[User Endpoints](##user-endpoints)**<br>
- **[Recipes Endpoints](##recipes-endpoint)**<br>
- **[Mealprep Endpoints](##mealprep-endpoints)**<br>
- **[Shopping List Endpoints](##shopping-list-endpoints)**<br>





## Overview
MealPrep umożliwia:
- Tworzenie planów posiłków wraz z przypisanymi przepisami.
- Zarządzanie przepisami i ich składnikami.
- Tworzenie list zakupów na podstawie przepisów w planach posiłków.
- Autoryzację i zarządzanie użytkownikami.


## Used Technology
- **Node.js** 
- **Express** 
- **MongoDB** 
- **Mongoose** 
- **JSON Web Token (JWT)** 
- **Bcrypt** 
- **Body-parser** 
- **Morgan** 


## Funkcjonalności
- **Zarządzanie przepisami:**
- Tworzenie, edycja, usuwanie i wyszukiwanie przepisów.
- **Zarządzanie planami posiłków:**
- Tworzenie, usuwanie i wyszukiwanie planów posiłków.
- Dodawanie i usuwanie przepisów w planach posiłków.
- Wyświetlanie wszystkich utworzonych planów posiłków.
- **Zarządzanie listami zakupów:**
- Generowanie list zakupów na podstawie stworzonego planu posiłków.
- Wyszukiwanie i usuwanie listy zakupów.
- **System użytkowników:**
- Rejestracja i logowanie.
- Autoryzacja.



## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.

# API Endpoints

User
| Method | Route                  | Description                                      |
|--------|------------------------|--------------------------------------------------|
| POST   | /users/signup          | registers new users                              |
| POST   | /users/login           | logins into user account                         |
| GET    | /users                 | gets list with all users and their data          |
| DELETE | /users/:userId         | deletes users with choosen userId                |

Recipe
| Method | Route                  | Description                                        |
|--------|------------------------|----------------------------------------------------|
| GET    | /recipes               | gets list of all recipes and their data            |
| POST   | /recipes               | adds new recipes to the database                    |
| GET    | /recipes/:recipesId    | gets recipes with choosen recipeId with their data  |
| PUT    | /recipes/:recipesId    | updates recipes data                                |                      
| DELETE | /recipes/:recipesId    | deletes recipe with choosen recipeId                |
| GET    | /recipes/tags/:tags    | gets recipes with choosen tag with their data       |

Mealprep
| Method | Route                         | Description                                                                     |
|--------|-------------------------------|---------------------------------------------------------------------------------|
| GET    | /mealprep                     | gets list of all mealpreps and their data                                       |
| POST   | /mealprep                     | adds new mealprep to the database                                               |
| GET    | /mealprep/:mealprepId         | gets mealpreps with choosen mealprepId with their data                          |
| DELETE | /mealprep/:mealprepId         | deletes mealpreps with choosen mealprepId                                       |
| POST   | /mealprep/:mealprepId/recipes | adds recipes with choosen recipeId to the mealprep with choosen mealprepId      |
| DELETE | /mealprep/:mealprepId/recipes | deletes recipes with choosen recipeId from the mealprep with choosen mealprepId |

Shopping List
| Method | Route                         | Description                                        |
|--------|-------------------------------|----------------------------------------------------|
| POST   | /shoppingList                 | adds new shopping list to the database             |
| DELETE | /shoppingList/:shoppingListId | deletes shopping list with choosen shoppingListId  |
| GET    | /shoppingList/:shoppingListId | gets shopping list with choosen shoppingListId     |

# User Endpoints
## Registeration
```js
POST /users/signup

Expected Body: 
{
    "mail": "adam.nowak@gmail.com",
    "password": "3322"
}

Expected Response:
{
    "wiadomosc": "dodano użytkownika o id: 678fcd27710f29c1e55b5b7b"
}
```

## Loging
```js
POST /users/login

Expected Body: 
{
    "mail": "adam.nowak@gmail.com",
    "password": "3322"
}

Expected Response:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc4ZmNkODQ3MTBmMjljMWU1NWI1YjdkIiwiZW1haWwiOiJhZGFtMS5ub3dha0BnbWFpbC5jb20iLCJpYXQiOjE3Mzc0Nzg1MjEsImV4cCI6MTczNzU2NDkyMX0._aDut6Vge4sV8pOd1skJ5KM81aDUikFP9sCf2zHQZoc"
```

## GET All Users
```js
GET /users

Expected Response:
"wiadomość": "lista wszystkich użytkowników:",
    "lista": [
        {
            "_id": "6782696083e34b97edc5ddd5",
            "email": "melapomela@gmail.com",
            "password": "$2b$10$60i8Ya.VytzisL0sdV3w7.6cAOIoX95JRXJ6xvnxw2VbyaetMo9s6",
            "__v": 0
        }
    ]
}
```

## DELETE User
```js
DELETE /users/:userId

Expected Body: 
{
    "email": "adam.nowak@gmail.com",
    "password": "3322"
}

Expected Response:
{
    "wiadomość": "Usunięto użytkownika o numerze: ",
    "id": "678fcd27710f29c1e55b5b7b"
}
```

# Recipe Endpoints
## GET All Recipes
```js
GET /recipes

Expected Response:
{
    "wiadomość": "lista wszystkich przepisów",
    "lista": [
        {
            "_id": "678199185b62368e93f52c23",
            "_userId": "6781857067c47534997ba557",
            "name": "tosty",
            "ingredients": [
                "chleb",
                "ser",
                "masło"
            ],
            "tags": [
                "szybkie",
                "wegetariańskie",
                "ulubieniec_studentów",
                "smaczne"
            ],
            "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
            "prepTime": "6",
            "__v": 0
        }
    ]
}
```

## POST Recipe
```js
POST /recipes

Expected Body:
 {
            "_userId": "6782696083e34b97edc5ddd5",
            "name": "tosty z serem",
            "ingredients": [
                "chleb",
                "ser",
                "masło"
            ],
            "tags": [
                "szybkie",
                "wegetariańskie",
                "ulubieniec_studentów",
                "smaczne"
            ],
            "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
            "prepTime": "6"
}

Expected Response:
{
    "wiadomość": "utworzenie nowego przepisu",
    "dane": {
        "_userId": "6782696083e34b97edc5ddd5",
        "name": "tosty z serem",
        "ingredients": [
            "chleb",
            "ser",
            "masło"
        ],
        "tags": [
            "szybkie",
            "wegetariańskie",
            "ulubieniec_studentów",
            "smaczne"
        ],
        "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
        "prepTime": "6",
        "_id": "678fd1c2710f29c1e55b5b87",
        "__v": 0
    }
}
```

## GET Recipe by Id
```js
GET /recipes/:recipesId

Expected Response:
{
    "wiadomość": "Szczegóły przepisu o numerze 678199185b62368e93f52c23",
    "dane": {
        "_id": "678199185b62368e93f52c23",
        "_userId": "6781857067c47534997ba557",
        "name": "tosty",
        "ingredients": [
            "chleb",
            "ser",
            "masło"
        ],
        "tags": [
            "szybkie",
            "wegetariańskie",
            "ulubieniec_studentów",
            "smaczne"
        ],
        "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
        "prepTime": "6",
        "__v": 0
    }
}
```

## PUT Recipe
```js
PUT /recipes/:recipesId

Expected Body:
{
            "_userId": "6781857067c47534997ba557",
            "name": "tosty",
            "ingredients": [
                "chleb",
                "ser",
                "masło"
            ],
            "tags": [
                "szybkie",
                "wegetariańskie",
                "ulubieniec_studentów",
                "smaczne"
            ],
            "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
            "prepTime": "6",
            "__v": 0
        }

Expected Response:
{
    "wiadomość": "Zmiana danych przepisu o numerze 678199185b62368e93f52c23"
}
```

## DELETE Recipe
```js
DELETE /recipe/:recipesId

Expected Response:
{
    "wiadomość": "Usunięcie przepisu o numerze 678fd1c2710f29c1e55b5b87"
}
```

## GET Recipe by Tag
```js
GET /recipes/tags/:tags

Expected Response:
{
    "wiadomość": "Znalezione przepisy z tagiem: smaczne",
    "dane": [
        {
            "_id": "67819e42c4c22d16ce8b6fc2",
            "_userId": "6781857067c47534997ba557",
            "name": "Makaron Carbonara",
            "ingredients": [
                "makaron spaghetti",
                "boczek",
                "jaja",
                "parmezan",
                "czosnek",
                "śmietana"
            ],
            "tags": [
                "włoskie",
                "szybkie",
                "obiad",
                "smaczne"
            ],
            "instruction": "Ugotuj makaron, usmaż boczek, wymieszaj wszystkie składniki z jajkami i śmietaną. Połącz z makaronem.",
            "prepTime": "20 min",
            "__v": 0
        }
    ]
}
```

# Mealprep Endpoints
## GET All Mealpreps
```js
GET /mealprep

Expected Response:
{
    "wiadomość": "lista wszystkich planów posiłków",
    "lista": [
        {
            "_id": "678a5d19e6d83011a307d39a",
            "_userId": "6782696083e34b97edc5ddd5",
            "name": "Środa",
            "date": "17.01.2025",
            "recipes": [
                {
                    "_id": "67819e42c4c22d16ce8b6fc2",
                    "name": "Makaron Carbonara"
                }
            ],
            "__v": 0
        }
    ]
}
```

## POST Mealprep
```js
POST /mealprep

Expected Body:
{
    "_userId": "6782696083e34b97edc5ddd5",
    "name": "wtorek",
    "date": "14-01-2025",
    "recipes": ["6783c111a50dc79abdfbe6a2", "6783c111a50dc79abdfbe6b2"]
}

Expected Response:
{
    "wiadomość": "Utworzono nowy plan posiłków z dodanymi przepisami",
    "dane": {
        "_id": "678fd847710f29c1e55b5b90",
        "_userId": "6782696083e34b97edc5ddd5",
        "name": "wtorek",
        "date": "14-01-2025",
        "recipes": [
            {
                "_id": "6783c111a50dc79abdfbe6a2",
                "_userId": "6782696083e34b97edc5ddd5",
                "name": "tosty z serem",
                "ingredients": [
                    "chleb",
                    "ser",
                    "masło"
                ],
                "tags": [
                    "szybkie",
                    "wegetariańskie",
                    "ulubieniec_studentów",
                    "smaczne"
                ],
                "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
                "prepTime": "6",
                "__v": 0
            }
        ],
        "__v": 0
    }
}
```

## GET Mealprep by Id
```js
GET /mealprep/:mealprepId

Expected Response:
{
    "wiadomość": "Szczegóły planu posiłków o numerze 678fd847710f29c1e55b5b90",
    "dane": {
        "_id": "678fd847710f29c1e55b5b90",
        "_userId": "6782696083e34b97edc5ddd5",
        "name": "wtorek",
        "date": "14-01-2025",
        "recipes": [
            {
                "_id": "6783c111a50dc79abdfbe6a2",
                "_userId": "6782696083e34b97edc5ddd5",
                "name": "tosty z serem",
                "ingredients": [
                    "chleb",
                    "ser",
                    "masło"
                ],
                "tags": [
                    "szybkie",
                    "wegetariańskie",
                    "ulubieniec_studentów",
                    "smaczne"
                ],
                "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
                "prepTime": "6",
                "__v": 0
            }
        ],
        "__v": 0
    }
}
```

## DELETE Mealprep
```js
DELETE /mealprep/:mealprepId

Expected Response:
{
    "wiadomość": "Usunięcie planu posiłków o numerze 678fd902710f29c1e55b5b97"
}
```

##POST Recipe to the Mealprep
```js
POST /mealprep/:mealprepId/recipes

Expected Body:
{
    "recipes": ["6783c111a50dc79abdfbe6a2"]
}

Expected Response:
{
    "message": "Przepis został dodany do planu posiłków",
    "mealprep": {
        "_id": "678fd902710f29c1e55b5b97",
        "_userId": "6782696083e34b97edc5ddd5",
        "name": "wtorek2",
        "date": "14-01-2025",
        "recipes": [
            {
                "_id": "6783c111a50dc79abdfbe6a2",
                "_userId": "6782696083e34b97edc5ddd5",
                "name": "tosty z serem",
                "ingredients": [
                    "chleb",
                    "ser",
                    "masło"
                ],
                "tags": [
                    "szybkie",
                    "wegetariańskie",
                    "ulubieniec_studentów",
                    "smaczne"
                ],
                "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
                "prepTime": "6",
                "__v": 0
            }
        ],
        "__v": 0
    }
}
```

## DELETE Recipe from the Mealprep
```js
DELETE /mealprep/:mealprepId/recipes

Expected Body:
{
    "recipes": ["6783c111a50dc79abdfbe6a2"]
}

Expected Response:
{
    "message": "Przepis został usunięty z planu posiłków",
    "mealprep": {
        "_id": "678fd902710f29c1e55b5b97",
        "_userId": "6782696083e34b97edc5ddd5",
        "name": "wtorek2",
        "date": "14-01-2025",
        "recipes": [
            {
                "_id": "6783c111a50dc79abdfbe6a2",
                "_userId": "6782696083e34b97edc5ddd5",
                "name": "tosty z serem",
                "ingredients": [
                    "chleb",
                    "ser",
                    "masło"
                ],
                "tags": [
                    "szybkie",
                    "wegetariańskie",
                    "ulubieniec_studentów",
                    "smaczne"
                ],
                "instruction": "Nagrzej toster. Posmaruj chleb masłem i połóż ser, zamknij kanapki, włóż do tostera, piecz przez 5 min.",
                "prepTime": "6",
                "__v": 0
            }
        ],
        "__v": 0
    }
}
```

# Shopping List Endpoints
## POST Shopping List
```js
POST /shoppingList

Expected Body:
{
    "_userId": "6782696083e34b97edc5ddd5",
    "_mealprepId": "678fd902710f29c1e55b5b97",
    "name": "lista2"
}

Expected Response:
{
    "message": "Lista zakupów została wygenerowana i zapisana",
    "shoppingList": {
        "_userId": "6782696083e34b97edc5ddd5",
        "_mealprepId": "678fd902710f29c1e55b5b97",
        "name": "lista2",
        "items": [
            [
                "chleb",
                "ser",
                "masło"
            ]
        ],
        "_id": "678fdbf5710f29c1e55b5bad",
        "__v": 0
    }
}
```

## DELETE Shopping List
```js
DELETE /shoppingList/:shoppingListId

Expected Response:
{
    "wiadomość": "Usunięcie listy zakupów o numerze 678fdc52710f29c1e55b5bb1"
}
```

## GET Shopping List by Id
```js
GET /shoppingList/:shoppingListId

Expected Response:
{
    "wiadomość": "Szczegóły listy zakupów o numerze 678fdbf5710f29c1e55b5bad",
    "dane": {
        "_id": "678fdbf5710f29c1e55b5bad",
        "_userId": "6782696083e34b97edc5ddd5",
        "_mealprepId": "678fd902710f29c1e55b5b97",
        "name": "lista2",
        "items": [
            [
                "chleb",
                "ser",
                "masło"
            ]
        ],
        "__v": 0
    }
}
```




## Endpoints
- **Użytkownicy**
- POST localhost:3000/users/signup - Rejestracja użytkownika.
- POST localhost:3000/users/login - Logowanie użytkownika (autoryzacja wymagana).
- GET localhost:3000/users - Wyświetlenie listy użytkowników (autoryzacja wymagana).
- DELETE localhost:3000/users/:userId - Usunięcie użytkownika (autoryzacja wymagana).

-  **Przepisy**
- GET localhost:3000/recipes - Wyświetlenie wszystkich przepisów.
- POST localhost:3000/recipes - Dodanie nowego przepisu (autoryzacja wymagana).
- GET localhost:3000/recipes/:recipesId - Wyświetlenie szczegółów przepisu.
- PUT localhost:3000/recipes/:recipesId - Edycja przepisu (autoryzacja wymagana).
- DELETE localhost:3000/recipes/:recipesId - Usunięcie przepisu (autoryzacja wymagana).
- GET localhost:3000/recipes/tags/:tags - Wyświetlenie przepisów z określonym tagiem.

-  **Plan posiłków**
- GET localhost:3000/mealprep - Wyświetlenie wszystkich planów posiłków.
- POST localhost:3000/mealprep - Dodanie nowego planu posiłków (autoryzacja wymagana).
- GET localhost:3000/mealprep/:mealprepId - Wyświetlenie szczegółów planu posiłków.
- DELETE localhost:3000/mealprep/:mealprepId - Usunięcie planu posiłków (autoryzacja wymagana).
- POST localhost:3000/mealprep/:mealprepId/recipes - Dodanie przepisu do planu posiłków (autoryzacja wymagana).
- DELETE localhost:3000/mealprep/:mealprepId/recipes - Usunięcie przepisu z planu posiłków (autoryzacja wymagana).

-  **Lista zakupów**
- POST localhost:3000/shoppingList - Tworzenie nowej listy zakupów (autoryzacja wymagana).
- GET localhost:3000/shoppingList/:shoppingListId - Wyświetlenie listy zakupów.
- DELETE localhost:3000/shoppingList/:shoppingListId - Usunięcie listy zakupów (autoryzacja wymagana).


