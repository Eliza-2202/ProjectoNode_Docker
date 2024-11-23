## Solo
# # Usar una imagen base de Node.js
# FROM node:18

# # Establecer el directorio de trabajo dentro del contenedor
# WORKDIR /app

# # Copiar solo el package.json y el package-lock.json primero
# COPY package*.json ./

# # Instalar las dependencias
# RUN npm install

# # Copiar el resto de los archivos del proyecto
# COPY . .

# # Exponer el puerto
# EXPOSE 4000

# # Comando para iniciar la aplicación
# CMD ["npm", "start"]

# Utilizar una imagen base con Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias, incluyendo nodemon
RUN npm install --save-dev nodemon

# Recompilar bcrypt
RUN npm rebuild bcrypt --build-from-source

# Copiar el resto del código del backend
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev", "--", "--host"]
