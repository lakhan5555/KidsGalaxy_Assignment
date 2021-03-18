# KidsGalaxy_Assignment

#About

It's a single-page application (SPA) which is built using React for frontend and Django REST Framework for API.

It supports full CRUD Functionality. It uses React-router for Dynamic routing.

I created a REST API via Django REST Framework. Used axios for GET, POST, PUT and DELETE methods on REST Api.

In this app, you can create a Task. View, edit and delete it.
When Admin click on Solved checkbox on the specific task, the task will appear in Solved section on Dashboard.


#Setup

Use Vscode for below activities.

-> For Django

Make sure you have Python installed.

Create Virtual Environment using
pip install virtualenv
virtualenv give_name_of_virtaulenv

Install Django using 
pip install django

create project using
django-admin startproject KidsGalaxy_Assignment
here KidsGalaxy_Assignment is my project name

Go into created project folder using
cd KidsGalaxy_Assignment

create an app using
python manage.py startapp API
here API is my app name

Install Django REST Framework using
pip install djangorestframework

Now our Django part is almost ready

Go in settings.py of KidsGalaxy_Assignment
in INSTALLED_APPS, add in last
'API.apps.ApiConfig',
'rest_framework',

For remaining part of Django follow code provided above

Now coming to React for frontend

# React

Make sure you have Node and NPM installed

in KidsGalaxy_Assignment project created above
create a react app 
using npx create-react-app frontend
here frontend is my app name

go in frontend folder by 
cd frontend

now install axios using
npm i axios

install react-router using
npm i react-router-dom

install bootstrap using 
npm i bootstrap

For remaining frontend part i.e for App.js and components, follow code provided above



Now we have to integrate Django and React

go one directory back i.e in KidsGalaxy_Assignment folder by cd ..

we have to install django-cors-headers by
pip install django-cors-headers

What is django-cors-headers?
A Django App that adds Cross-Origin Resource Sharing (CORS) headers to responses. 
This allows in-browser requests to your Django application from other origins (here React).

Now, go in settings.py of KidsGalaxy_Assignment

in INSTALLED_APPS, add in last
'corsheaders',

in MIDDLEWARE, add 
'corsheaders.middleware.CorsMiddleware',

in TEMPLATES, in DIRS, write
'DIRS': [
            os.path.join(BASE_DIR, 'frontend/build')
        ],
        

add STATICFILES_DIRS and CORS_ALLOWED_ORIGIN in settings.py as

STATICFILES_DIRS = [
    os.path.join(BASE_DIR,'frontend/build/static')
]

CORS_ALLOWED_ORIGIN = [
    "http://localhost:3000",
]
        


Djano uses DB SQLite as default DBMS
But we can use other DBMS also. 

Here we will use MySQL

Create a DATABASE in MySQL

in settings.py of KidsGalaxy_Assignment, change DATABASES as

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'name of DATABASE you created above',
        'USER': 'Uername of your DATABASE',
        'PASSWORD': 'write password',
        'HOST': 'give host name',
        'PORT': 'give port number',
    }
}

Now go in frontend folder by writing cd frontend and 
write
npm run build


Now go back in KidsGalaxy_Assignment folder by writing cd ..

Now we will migrate all our models into DATABASE

write in terminal

python manage.py makemigrations
python manage.py migrate


Create a superuser using
python manage.py createsuperuser
give username, email and password

Now all stuffs are ready 

run server by

python manage.py runserver

Go in browser
go in localhost 

your project is running on local machine


Cheers!!!












