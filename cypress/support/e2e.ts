// Carga global de comandos personalizados y hooks.
import "./commands";

// Evita que errores no controlados de la app bajo prueba detengan los tests.
Cypress.on("uncaught:exception", () => false);
