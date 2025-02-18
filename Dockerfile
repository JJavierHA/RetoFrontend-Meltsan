FROM node:23

# Instalar las dependencias necesarias para el build
RUN apt-get update && apt-get install -y libnss3-dev

# Establecer el directorio de trabajo
WORKDIR /app/reto-frontend

# Copiar solo package.json y package-lock.json (si existe) para optimizar la cache de Docker
COPY package.json ./
COPY package-lock.json ./

# Instalar las dependencias
RUN npm install

RUN npm install crypto

# Copiar el resto del código fuente
COPY . .

# Ejecutar el build
RUN npm run build

# Exponer el puerto en el que se servirá la aplicación
EXPOSE 5173

# Definir el comando para iniciar la aplicación
CMD ["npm", "run", "preview"]