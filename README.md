# Hackita project
El presente proyecto fue concebido para la participación en el hackaton HACK THE OCEAN de [LaunchX](https://www.instagram.com/innovaccionvirtual/?hl=en).

Nuestra tripulación consiste en estudiantes de back end NodeJs:

* [David Ramirez](https://github.com/DavidRamirez5)
* [Ubaldo Melchor](https://github.com/UbaldoFMelchor)
* [Fernando Morales](https://github.com/FernandoMoralesH)
* [Victor Saucedo](https://github.com/victorsaucedom)
* [Arturo Mendoza](https://github.com/ArturoMendozaA)

Tabla de Contenidos
1. [Dependencias](#id1)
2. [Introducción](#id2)
3. [Planteamiento del problema](#id3)
4. [Maquetación y propuestas de Wireframe](#id4)
5. [front end](#id5)
6. [Estructura de directorios](#id6)
7. [Flujo del programa](#id7)

## Dependencias <a name="id1"></a>
El presente proyecto está desarrollado utilizando Node.js, por lo tanto utilizamos [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) como package manager.

A continuación se muestran las dependencia utilizadas en le proyecto, para poder instalarlas utilizar ``npm install``
1. ``Jest`` : Dependencia necesaria para realizar y crear las pruebas de unidad.
   - Para correr las pruebas, desde la terminal ejecutar:
 `` npm test test/Directorio_de_la_prueba/prueba.test.js``
   - Documentación de ``jest``: https://jestjs.io/

2. ``express``: Dependencia necesaria para correr el server.
    - Para correr el server, desde la terminal ejecutar:
 `` npm run server``
    - Documentación de ``express``: https://expressjs.com/es/  

3. ``Eslint``: Dependencia para corregir y aggreglar nuestro codigo de JS.
    - Al instalar en necesario configurar el archivo ``.eslintrc`` con el siguente comando ``npm init @eslint/config`` y configurar como se muestra a continuación:
   
      ![npm 2022-05-15 12-31-33](https://user-images.githubusercontent.com/99165587/168486677-4e68b4ab-7b80-449d-b1ed-056afd8c7e13.gif)

    - Documentación de ``ESlint``:https://eslint.org/ 
    - Rules: https://eslint.org/docs/rules/
    - Airbnb Code Style: https://github.com/airbnb/javascript

4.``Cors``Para realizar el control de acceso, utilizando el siguiente comando `npm install cors --save`
    - Documentación de ``Cors``:https://developer.mozilla.org/es/docs/Web/HTTP/CORS 

## Introducción <a name="id2"></a>
Se nos presentó el desafío de crear un proyecto fullstack encaminado a resolver problemas ambientales, específicamente enfocados a los oceanos mediante la aplicación de las habilidades adquiridas durante la duración de curso de LaunchX.

Las herramientas que decidimos utilizar para la realización de nuestro proyecto fueron:

* Github
* NodeJs
* jQuery
* HTML
* CSS

## Planteamiento del problema <a name="id3"></a>

Entre los ejes para la búsqueda de una solución se nos presentaron:

* Especies en peligro de extensión.
* Contaminación (acidificación, derrames petroleros, etcétera).
* Cuidado y preservación de especies marinas.
* Sobrepesca

Decidímos buscar una forma de concientizar y facilitar la búsqueda de informacíon sobre las especies marinas que habitan en México.

El tema elegido fue: "Especies en Peligro de Extinción". Si bien el tema es algo muy sonado, es importante seguir informando a la sociedad acerca de las causas y posibles acciones para evitar que las especies sigan extingueindose puesto que todas ellas forman parte de los ecosistemas, las cuales tienen beneficios para el medio ambiente.

Acordamos que la mejor forma de hacerlo sería mediante el desarrollo de un sitio web y una API para poder consultar la información y presentarla de una forma atractiva y fácil de utilizar


Comenzamos utilizando Miro para comenzar a organizarnos de la siguiente manera

![Screen Shot 2022-05-14 at 23 29 39](https://user-images.githubusercontent.com/99451129/168457363-4c6a6d9b-26e5-408b-a6b8-94da322ab7b5.png)

## Maquetación y propuestas de Wireframe<a name="id4"></a>


![Screen Shot 2022-05-14 at 23 35 20](https://user-images.githubusercontent.com/99451129/168457458-8ec3e355-da6b-4e3d-8dcd-54db83504b82.png)

![Screen Shot 2022-05-14 at 23 36 07](https://user-images.githubusercontent.com/99451129/168457493-bf2ccbeb-ad57-4f4f-9aeb-84af50955c5a.png)

![Screen Shot 2022-05-14 at 23 40 20](https://user-images.githubusercontent.com/99451129/168457572-843899db-6baf-4bac-b29a-6c233af64e43.png)


## Front end <a name="id5"></a>
Front End: El proyecto fue realizado en archivo html con apoyo de CSS Y Javascript (jQuery). °HTML - Se realiza el esqueleto que sera la estructura de la pagina Web" °CSS - Se aplican el estilo que dara forma al esqueleto dicha pagina Web °Javascript - Se utiliza para dar funcioalidad a la pagina.

![image](https://user-images.githubusercontent.com/99451129/168458441-412cc8f7-fce2-4ba6-84d9-3b0e57ccae90.png)



## Estructura de directorios <a name="id6"></a>
```mermaid
stateDiagram-v2
[Root] --> lib
lib --> utils
lib --> services
lib --> controllers
[Root] --> src
src --> assets
[Root] --> test
test --> utils_test
test -->services_test
test --> controllers_test
```
En nuestra carpeta ```lib``` realizamos la separación de responsbilidades de la siguiente forma:
En la carpeta  Utils tenemos ```Reader.js``` para leer y transformar el archivo ```creatures.json``` en un objeto
```mermaid
classDiagram
    class Reader
    Reader : +readJsonFile(filePath)
```
En la carpeta ```services```tenemos el archivo ```creatureService``` para filtrar el objeto por nombres

```mermaid
classDiagram
    class creatureServices
    creatureServices : +getCreatures(creatures)
    creatureServices : +getCreatureByName(creatures, name)
    
```
Finalmente la carpeta ```controllers``` contiene el archivo ```creatureController``` con un método que nos permite obtener la información de una especie por nombre y otro que nos regresa todos los objetos

```mermaid
classDiagram
    class creatureController
    creatureController : +getCreatures()
    creatureController : +getCreatureByName(name)
    
```
En la carpeta ```test``` tenemos las pruebas de unidad que corresponden a las carpetas que comparten el respectivo nombre del directorio ```lib``` 


## Flujo del programa <a name="id7"></a>

```mermaid
stateDiagram-v2
creatures.json --> Reader
Reader --> creatureService
creatureService --> creatureController
creatureController --> Server
Server --> API

```
Una vez que tenemos nuestro API utilizamos los servicios de Azure para desplegarlo y poder hacer consultas desde nuestro sitio web

```mermaid
stateDiagram-v2
API --> Página_web
Página_web --> API
```





