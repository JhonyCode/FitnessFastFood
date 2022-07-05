# Fitness Fast Food #
The perfect website to prepare your healthy meals!
I used : ReactJS, Mysql and symfony.

## Presentation ##

Hello everyone, im Jonathan Mulero and this is my final project for CodeSpace Academy, i maked an webapp for healthy recipes where you can add or comment,valorate,etc.

## Getting started ##

### 1. Requirements ### 

Please check if you have everything installed, like apache2 and NPM.

### 1. Installing ### 

## Backend ##

### How to run symfony app ###

```
composer install
````
[Or check here](https://symfony.com/doc/current/setup.html) for more information

then, you will need modify the .env file to your user and your password from MYSQL.

### Import SQL file to your DB, then run: ### 

```
symfony server:start --port=8080
````

## For install frontend you will need: ##

```
npm install
```

### then in the backend folder you will need to run : ###

```
symfony start:server --port=8080
````

### and then, in the frontend folder you will need to run: ###

```
npm start
````
### And also: ### 
```
npm run build
````
### You are ready to start! ### 

# Some endpoints from the project #

| URL | TYPE | DESCRIPTION | ROLE |
| :-------: | :------: | :------: | :-------: |
| 127.0.0.1:8080/api/login_check | POST | Just login with user and password and generate token |  user |
| 127.0.0.1:8080/admin/usuarios | GET | Get all users from database in Json string |  Admin |
| 127.0.0.1:8080/admin/usuario/new | POST | Register a new user |  public access |
| 127.0.0.1:8080/admin/usuario/{id} | GET | Complete info of an user |  Admin |
| 127.0.0.1:8080/admin/categoria | GET | Complete info of categories |  Admin |
| 127.0.0.1:8080/contacto/new | POST | Send a contact message |  public |
| 127.0.0.1:8080/admin/publicaciones | GET | Complete info of all posts|  public |
| 127.0.0.1:8080/admin/publicacion/{id} | GET | Complete info of one post |  public |

