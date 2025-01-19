# MealPrep
> MealPrep to narzędzie, które pomaga w zarządzaniu posiłkami, planowaniu diety oraz organizacji zakupów spożywczych. Stworzony z myślą o osobach dbających o zdrowe odżywianie oraz oszczędność czasu.

## Spis treści
* [Informacje ogólne](#informacje-ogólne)
* [Użyte technologie](#użyte-technologie)
* [Funkcjonalności](#funkcjonalności)
* [Setup](#setup)
* [Endpoints](#endpoints)




## Informacje ogólne
MealPrep umożliwia:
- Tworzenie planów posiłków wraz z przypisanymi przepisami.
- Zarządzanie przepisami i ich składnikami.
- Tworzenie list zakupów na podstawie przepisów w planach posiłków.
- Autoryzację i zarządzanie użytkownikami.


## Użyte technologie
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


