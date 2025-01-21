## Table of Contents
- **[Overview](#overview)**<br>
- **[Used Technology](#used-technology)**<br>
- **[Setup](#setup)**<br>
- **[Authorization](#authorization)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[User Endpoints](#user-endpoints)**<br>
- **[Recipes Endpoints](#recipes-endpoints)**<br>
- **[Mealprep Endpoints](#mealprep-endpoints)**<br>
- **[Shopping List Endpoints](#shopping-list-endpoints)**<br>


## Overview
With this server REST API it is possible to sign and log in users, add data to database made in MongoDB and filter added data. Project is about adding recipes, making mealpreps and, based on them, generating shopping lists.


## Used Technology
- **Node.js** 
- **Express** 
- **MongoDB** 
- **Mongoose** 
- **JSON Web Token (JWT)** 
- **Bcrypt** 
- **Body-parser** 
- **Morgan** 

## Setup

Type `cd projekt-bazy` in console to move to the proper directory and make connection with server by typing `nodemon server.js`.

## Authorization

```js
POST /users/login

Expected Body: 
{
    "email": "adam.nowak@gmail.com",
    "password": "3322"
}

Expected Response:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc4ZmNkODQ3MTBmMjljMWU1NWI1YjdkIiwiZW1haWwiOiJhZGFtMS5ub3dha0BnbWFpbC5jb20iLCJpYXQiOjE3Mzc0Nzg1MjEsImV4cCI6MTczNzU2NDkyMX0._aDut6Vge4sV8pOd1skJ5KM81aDUikFP9sCf2zHQZoc"
```

Genereted JSON Web Token must be copied to the authorization part with Bearer Token type.

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
    "email": "adam.nowak@gmail.com",
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
    "email": "adam.nowak@gmail.com",
    "password": "3322"
}

Expected Response:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc4ZmNkODQ3MTBmMjljMWU1NWI1YjdkIiwiZW1haWwiOiJhZGFtMS5ub3dha0BnbWFpbC5jb20iLCJpYXQiOjE3Mzc0Nzg1MjEsImV4cCI6MTczNzU2NDkyMX0._aDut6Vge4sV8pOd1skJ5KM81aDUikFP9sCf2zHQZoc"
```

## GET All Users
### Authorization required
```js
GET /users

Expected Response:
{
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
### Authorization required
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

# Recipes Endpoints
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
### Authorization required
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
### Authorization required
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
### Authorization required
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
### Authorization required
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
### Authorization required
```js
DELETE /mealprep/:mealprepId

Expected Response:
{
    "wiadomość": "Usunięcie planu posiłków o numerze 678fd902710f29c1e55b5b97"
}
```

## POST Recipe to the Mealprep
### Authorization required
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
### Authorization required
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
### Authorization required
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
### Authorization required
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


