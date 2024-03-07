# Utilisation d'une image Node.js
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'application fonctionnera
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
