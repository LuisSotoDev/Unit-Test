/**
 * Calcula el precio final después de aplicar un descuento.
 * @param {number} precio - Precio original del producto.
 * @param {number} porcentaje - Porcentaje de descuento a aplicar.
 * @returns {number|string} Precio con descuento o mensaje de error.
 */
function calcularDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    return "Porcentaje inválido";
  }

  const descuento = precio * (porcentaje / 100);
  return precio - descuento;
}

/**
 * Valida si una contraseña cumple con las reglas básicas:
 * mínimo 8 caracteres y al menos un número.
 * @param {string} password - Contraseña a validar.
 * @returns {boolean} true si es válida, false si no lo es.
 */
function validarPassword(password) {
  const tieneMinimoOchoCaracteres = password.length >= 8;
  const contieneNumero = /\d/.test(password);

  return tieneMinimoOchoCaracteres && contieneNumero;
}

/**
 * Convierte grados Celsius a grados Fahrenheit.
 * Fórmula: °F = (°C × 9/5) + 32
 * @param {number} celsius - Temperatura en grados Celsius.
 * @returns {number} Temperatura convertida a Fahrenheit.
 */
function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/**
 * Verifica si una persona es mayor de edad.
 * @param {number} edad - Edad de la persona.
 * @returns {boolean} true si tiene 18 años o más, false si es menor de 18.
 */
function esMayorDeEdad(edad) {
  return edad >= 18;
}

/**
 * Genera un nombre completo uniendo nombre y apellido.
 * @param {string} nombre - Nombre de la persona.
 * @param {string} apellido - Apellido de la persona.
 * @returns {string} Nombre completo con un espacio entre nombre y apellido.
 */
function generarNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

// Exportamos las funciones para poder probarlas con Jest.
module.exports = {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto,
};
