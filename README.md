# cypress-framework

![Cypress](https://img.shields.io/badge/Cypress-13-69D3A7?style=flat&logo=cypress&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat&logo=docker&logoColor=white)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

Framework de automatización de pruebas **End-to-End y de API** con Cypress + TypeScript, estructurado con el patrón **Page Object Model**, comandos personalizados, fixtures y ejecución reproducible en **Docker** e integración continua con **GitHub Actions**.

> Objetivos de práctica: E2E contra [SauceDemo](https://www.saucedemo.com) y API contra [JSONPlaceholder](https://jsonplaceholder.typicode.com). Ambos son públicos, así que los tests corren tal cual.

## Demo

![demo](docs/demo.gif)

<!-- Reemplaza docs/demo.gif por una grabación real:
     1. npm run cy:open  →  graba la pantalla mientras corren los tests
     2. Convierte el video a GIF y guárdalo en docs/demo.gif -->

## Estructura

```
cypress-framework/
├── cypress/
│   ├── e2e/
│   │   ├── auth/login.cy.ts          # Login: válido, bloqueado, inválido, vacío
│   │   ├── products/inventory.cy.ts  # Catálogo, carrito y ordenamiento
│   │   └── api/users.api.cy.ts       # GET / POST / 404 sobre /users
│   ├── pages/                        # Page Objects (LoginPage, InventoryPage)
│   ├── support/                      # Comandos custom y hooks globales
│   └── fixtures/                     # Datos de prueba (users.json)
├── .github/workflows/ci.yml          # Pipeline CI (GitHub Actions)
├── Dockerfile                        # Imagen cypress/included
├── docker-compose.yml                # Ejecución contenedorizada
├── cypress.config.ts
└── tsconfig.json
```

## Requisitos

- Node.js 18+ y npm, **o** Docker.

## Ejecución local

```bash
npm install        # instala dependencias
npm run cy:open    # modo interactivo (Test Runner)
npm run cy:run     # modo headless (toda la suite)
npm run cy:e2e     # solo pruebas E2E
npm run cy:api     # solo pruebas de API
```

## Ejecución con Docker

```bash
# Opción 1: docker compose (recomendado)
docker compose up --build

# Opción 2: docker directo
docker build -t cypress-framework .
docker run --rm cypress-framework
```

Los videos y screenshots de la corrida quedan en `cypress/videos` y `cypress/screenshots`.

## Cobertura de pruebas

| Suite | Casos | Tipo |
|---|---|---|
| `auth/login.cy.ts` | 4 | E2E |
| `products/inventory.cy.ts` | 3 | E2E |
| `api/users.api.cy.ts` | 4 | API |

## Arquitectura

- **Page Object Model** — cada pantalla expone métodos encadenables; los tests no contienen selectores.
- **Custom commands** — `cy.login()` reutilizable en `cypress/support/commands.ts`.
- **Fixtures** — datos de prueba desacoplados del código.
- **Reintentos** — 2 en modo CI para mitigar flakiness.
- **CI/CD** — cada push/PR ejecuta la suite y sube videos como artefacto si falla.

## Licencia

MIT © Arlington Samuel Pacay Dubuisson
