## solo

# # Utilizar una imagen base con Node.js
# FROM node:18

# # Establecer el directorio de trabajo dentro del contenedor
# WORKDIR /app

# # Copiar los archivos del proyecto al contenedor
# COPY package*.json ./
# COPY . .

# # Instalar las dependencias
# RUN npm install

# # Exponer el puerto por donde correrá la aplicación
# EXPOSE 5173

# # Comando para ejecutar la aplicación
# CMD ["npm", "run", "dev", "--", "--host"]



# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]

