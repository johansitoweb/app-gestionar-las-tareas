# Do-Do 

Aplicación para cacharrear con angular y material-design, además de crear una app para forrarnos. :money_with_wings:

## Idea de la app

La idea es crear una aplicación (corrigeme si me equivoco Jorge xD) para getionar las tareas diarias que tenemos 
ademas de las que se nos van quedando atrasadas. Desde ella podremos ver que tareas estamos realizando o realizaremos
cada uno del proyecto.


## Cómo empezar

#### Requisitos

Vas a necesitar **git** para clonar el proyecto. Puedes conseguirlo en
[http://git-scm.com/](http://git-scm.com/).

Para inicializar el proyecto y gestionar las dependencias vas a necesitas **node** y su gestionador de paquetes **npm**.
Puedes conseguirlo desde [http://nodejs.org/](http://nodejs.org/).

#### Instalando dependencias 

Nosotros distinguiremos dos tipos de dependencias. las que son necesarias para que la aplicación funcione y las que no.
Estas últimas serán herramientas que necesitaremos para desarrollar el proyecto, desplegar, y todo ese tipo de cosas
que son invisibles para la aplicación una vez puesta en producción.

Para instalar las dependencias deberemos lanzar el siguiente comando en la consola (Recomiendo la git bash)

```
npm install
```
Que a partir del `package.json` nos instalará las distintas dependencias del proyecto.
Tambien viene configurado para una vez terminado de ejecutarse instale las dependencias del Front 

```
bower install
```

+ INFO en Google ;)

Una vez ejecutados estos dos comandos tendremos estos dos nuevos directorios en nuestro proyecto.

* `node_modules` - Contiene los paquetes de npm necesarios para construir nuestra app.
* `app/bower_components` - Contiene las dependencias para que nuestra aplicación funcione.

### Corriendo nuestra aplicación durante el desarrollo

Para lanzar la aplicación mientras estamos desarrollando, esta semilla (proyecto simple para empezar aplicaciones)
viene configurado para ser lanzado con **http-server** un servidor web local para el desarrollo.

Para instalarlo de forma global (y ser accesible desde cualquier directorio)

```
npm install -g http-server
```

Una vez instalado podremos lanzar nuestro proyecto, desde el directorio de la aplicación

```
cd app
http-server
```

## A partir de aquí dejo algunas secciones originales de la semilla que pueden ser útiles

### Run End-to-End Tests

To run your e2e tests your should install and configure Protractor and the Selenium WebServer.
These are already specified as npm dependencies within `package.json`. Simply run these
terminal commands:

```console
npm install -g live-server
npm update
webdriver-manager update
```

Your can read more details about Protractor and e2e here: http://angular.github.io/protractor/#/
for more details on Protractor.

 1. Start your local HTTP Webserver: `live-server` or `http-server`.

```console
cd ./app; live-server;
```

> Note: since `live-server` is working on port 8080, we configure the `protractor.conf.js` to use
`baseUrl: 'http://localhost:8080'`

 2. In another tab, start a Webdriver instance:
 
```console
webdriver-manager start
```

>This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test
will send requests to this server to control a local browser. You can see information about the
status of the server at `http://localhost:4444/wd/hub`. If you see errors, verify path in
`e2e-tests/protractor.conf.js` for `chromeDriver` and `seleniumServerJar` to your local file system.

 3. Run your e2e tests using the `test` script defined in `package.json`:
 
```console
npm test
```

> This uses the local **Protractor** installed at `./node_modules/protractor`

## Directory Layout

```
app/                    --> all of the source files for the application
  assets/app.css        --> default stylesheet
  src/           --> all app specific modules
     users/              --> package for user features
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the
project. Now that the AngularJS framework library code and tools are acquired through package managers
(npm and bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Serving the Application Files

While AngularJS is client-side-only technology and it's possible to create AngularJS webapps that
don't require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The angular-seed project comes pre-configured with a local development web server.  It is a node.js
tool called [http-server][http-server].  You can install http-server globally:

```
npm install -g live-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd app
live-server
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


## Contact

Basado en https://github.com/angular/material-start

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular Material, check out https://material.angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
