# Imagen oficial de Cypress con navegadores incluidos.
FROM cypress/included:13.13.0

WORKDIR /e2e

# Instala dependencias primero para aprovechar la cache de capas.
COPY package*.json ./
RUN npm ci || npm install

# Copia el resto del framework.
COPY . .

# Ejecuta toda la suite por defecto.
ENTRYPOINT ["npx", "cypress", "run"]
