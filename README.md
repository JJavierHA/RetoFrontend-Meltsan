# Explorador de paises 📚
Este proyecto es parte de *reto tecnico* propuesto, consiste en la elaboracion de un *aplicacion web* encargada de consumir el API *RestCountries* la cual a travez de distintas interfaces, permitira mostrara el contenido de la misma en un formato que sea comodo y atractiva para el usuario.

## Construido con 🛠️
Para la elaboracion de este proyecto se usaron las siguientes tecnologias:
* [TypeScript](https://www.typescriptlang.org/) - Como lenguaje de programacion.
* [TanStackQuery (reactQuery)](https://tanstack.com/query/latest) - Para el manejo y estado del servidor.
* [React](https://es.react.dev/) - Biblioteca para la creacion de interfaces graficas.
* [Material UI](https://mui.com/material-ui/getting-started/) - Biblioteca de componentes React.
* [vite](https://vite.dev/) - Herramienta de desarrollo web.
* [Docker](https://www.docker.com/) - Empaquetador de software.
* [Docker Hub](https://hub.docker.com/) - Repositorio de imagenes docker.
* [Git](https://git-scm.com/doc) - Sistema de control de versiones.
<br>

## Instalacion 🔧
Pasos pertinentes para la correcta instalacion del proyecto y dependencias en un equipo local.

### Requisitos 📋
Para la correcta intalacion del proyecto es necesario contar con lo siguiente instalado en tu quipo local.
* **node >= 18** (se recomienda versiones superiores o mas recientes para mayor compatibilidad)
* **vite >= 5.2.3** (se recomemienda esta version para mayor compatibilidad)
* **Docker**
* **Docker Desktop** (opcional)
* **Git**

Si no tiene las herramientas puedes instalarlas aqui 👇
* [Pagina oficial de Node.js](https://nodejs.org/es)
* [vite](https://www.freecodecamp.org/news/get-started-with-vite/)
* [Pagina oficial de Docker](https://www.docker.com/)
* [Descargar Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [Descargar Git](https://git-scm.com/downloads)

### Comenzando 🚀
Clona este repositorio en tu equipo local con ayuda de git.
Efectua el siguiente comando en tu terminar en el directorio donde desees que se almacene el proyecto
**Por SSH o si lo prefires por HTTPS**
``` bash
git clone git@github.com:JJavierHA/RetoFrontend-Meltsan.git
```
``` bash
git clone https://github.com/JJavierHA/RetoFrontend-Meltsan.git
```

## Despliegue con Docker 🐳 
Para el despliegue de este proyecto se requiere de docker o docker Desktop segun sea el caso, con la finalidad de poner en marcha el contenedor de la imagen y ver el correcto funcionamiento del proyecto.

El Proyecto cuenta con los siguietes documentos:
* **Dockerfile** Instrucciones de creacion para la imagen del proyecto.
* **docker-compose.yml** Instrucciones para el levantamiento de la aplicacion en contenedores.

> [!IMPORTANT]
> Si usas Docker Desktop asegurate de iniciar la maquina virtual.
>   

### Pasos para levantar el proyecto
Permitira construir la imagen y levantar el contenedor declarado en el archivo **docker-compose.yml** 
``` bash
docker compose up --build
```
> [!NOTE] 
> Deberas ver los logs del contenedor en tu terminal, lo cual indica que todo a salido bien.
> 

Ejecuta el siguiente comando para ver los contenedores activos. Deberias ver el contenedor de la aplicacion en funcionamiento
``` bash
docker ps
```
Deverias ver algo similar, lo que indica que tus contenedores estan activos
| ... | STATUS  | PORT | NAMES      |
|-----|---------|------|----------|
|...| Up 46 seconds     | 0.0.0.0:4173->4173/tcp, :::4173->4173/tcp   | reto-frontend  |

> [!IMPORTANT]
> Asegurate de no tener los puertos que usa la aplicacion ocupados. La aplicacion corre por defecto en el puerto 4173.
> 
<br>

## Despliegue del proyecto en equipo local 💻
Pasos para desplegar el proyecto desde un equipo local, para permitir mejoras o personalizacion de acuerdo a tus necesidades.

> [!NOTE] 
> Ejecuta los comandos en tu directorio raiz.
> 

### Instalacion de dependencias del proyecto
Con ayuda de la herramienta de npm instala las dependencias del proyecto para el correcto funcionamiento de la aplicacion.
``` bash
npm install
```

Ejecuta en tu terminal el siguiente comando para poner en marcha la aplicacion en modo desarrollo.
``` bash
npm run dev
```

## Funcionamiento
El proyecto consiste en la exposicion de algunos de los enpoind de la API Restcountries mediante la creacion de una aplicacion de exploracion de paises.
* Direccion para ingresar a la aplicacion de manera local o al contenedor docker: http://localhost:4173/

> [!NOTE]
> Si quieres acceder al contenedor asegurate de haber iniciado el mismo antes.
> 

## Elaborado por ️
**Javier Herrera** - *Trabajo Inicial* - [JJavierHA](https://github.com/JJavierHA)

Puedes descargar o ver la imagen del proyecto sin base de datos en mi repositorio de Docker Hub - [jjavierha](https://hub.docker.com/r/jjavierha/reto-frontend)
