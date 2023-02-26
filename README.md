# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

#Gluay stuff goes here..

- npm start
- npm run build
- serve -s build
  install tailwindcss
- npm install -D tailwindcss
- npx tailwindcss init
- in index.css or app.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Universally unique identifier uuid
`import { v4 as uuidv4 } from "uuid";`

- npm i uuidv4

- npm install react-bootstrap bootstrap
- index,js
  import 'bootstrap/dist/css/bootstrap.min.css';

====================================================
BACKEND note..
// intall Django - Python

1. brew intall python
2. mac python3 --version or window py --version
3. mkdir backend (make directory)
4. cd backend
5. python3 -m venv .venv (name verture enviornment)
6. ls -a
7. Activate it.. for mac

- . .venv/bin/activate
- .venv\Source\activate
  then you get (.venv)

8. install Django (framework)
9. python -m pip install django
   command
10. django-admin
11. start project here..
12. django-admin startproject friends .
13. python3 manage.py runserver
    http://127.0.0.1:8000/

- touch .gitignore
  copy code from this website to .gitignore
  https://www.toptal.com/developers/gitignore/api/django
- I create a new repo 80sFriends-backend-django

````git remote add origin https://github.com/Gluay88/80sFriends-backend-django.git
git branch -M main
git push -u origin main```
````

Activate virture env

- . .venv/bin/activate
- python --version (Python 3.11.2)
- pip --version (pip 22.3.1)
- pip install django-rest-framework
- pip install --upgrade pip

* the package doesn't update like package.json in react
  you have to update it manually

- pip freeze (you get the suggestion packages you want for the project)
- pip freeze > requirements.txt (file name that keeps track packages you have been installed)

```
asgiref==3.6.0
Django==4.1.7
django-rest-framework==0.1.0
djangorestframework==3.14.0
pytz==2022.7.1
sqlparse==0.4.3
```

install stuff

- pip install -r requirements.txt

Run this command

- pip freeze > requirements.txt
  when you update or install package

start the server

- python manage.py runserver
- python manage.py migrate
- go to the folder => friends
- create a new file
- models.py aka database table
  models.py

````
from django.db import models
class Friend(models.Model):
    name = models.CharField(max_lenght=200)
    role = models.CharField(max_lenght=100)
    ```
````

- python manage.py makemigrations friends
- go to settings.py
  add the name of the app

```
INSTALLED_APPS = [
    'friends',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

- python manage.py makemigrations friends

successfully migration

````
Migrations for 'friends':
  friends/migrations/0001_initial.py
    - Create model Friend
    ```
````

then you get a file 0001_initial.py for 1st migration

- migrate again
- python manage.py migrate

=======================
urls.py aka like routing in react

```
from friends import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/friends/', views.friends, name='friends')
]
```

- make a file => views.py
- make a file => serializers.py
- go to settings.py
  INSTALLED_APPS = [
  'rest_framework'
  'friends',

      add rest_framework there

```
python manage.py runserver
```

```
http://127.0.0.1:8000/api/friends/
```

create admin.py
http://127.0.0.1:8000/admin
creat account == do it through terminal

- python manage.py createsuperuser
  username: leave blank to use gluay
  password: gluay123

================
Front End

```
fetch("http://localhost:8000/api/friends/")
```

install CORS in backend when you fetch it

- pip install django-cors-headers
- pip freeze > requirements.txt
- add stuff in settings.py

````
INSTALLED_APPS = [
    'corsheaders',
    ```
    ```
    MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ```
````
