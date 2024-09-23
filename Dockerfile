# backend/Dockerfile
FROM node:20.11.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación al contenedor
COPY . .

# Exponer el puerto donde la aplicación escuchará
EXPOSE 3000

# Comando que se ejecutará al iniciar el contenedor
CMD ["npm", "start"]