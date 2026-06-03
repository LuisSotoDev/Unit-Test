# Unit-Test# Ejercicio de Pruebas Unitarias con Jest

Este proyecto contiene funciones básicas de JavaScript y sus pruebas unitarias desarrolladas manualmente con Jest.

## Archivos del proyecto

| Archivo | Descripción |
|---|---|
| `funciones.js` | Contiene las funciones solicitadas en el ejercicio. |
| `funciones.test.js` | Contiene las pruebas unitarias manuales con Jest. |
| `package.json` | Contiene la configuración básica para ejecutar las pruebas con `npm test`. |
| `README.md` | Documentación del proyecto. |

---

## Funciones desarrolladas

### 1. `calcularDescuento(precio, porcentaje)`

Calcula el precio final después de aplicar un porcentaje de descuento.

Reglas principales:

- Si el porcentaje está entre `0` y `100`, devuelve el precio con descuento aplicado.
- Si el porcentaje es menor a `0` o mayor a `100`, devuelve el texto `"Porcentaje inválido"`.

Ejemplos:

```js
calcularDescuento(1000, 20); // 800
calcularDescuento(500, 10);  // 450
calcularDescuento(300, 120); // "Porcentaje inválido"
```

---

### 2. `validarPassword(password)`

Valida si una contraseña cumple reglas básicas de seguridad.

Una contraseña es válida si:

- Tiene mínimo 8 caracteres.
- Contiene al menos un número.

Ejemplos:

```js
validarPassword("abc12345"); // true
validarPassword("abcdef");   // false
validarPassword("12345678"); // true
```

---

### 3. `celsiusAFahrenheit(celsius)`

Convierte una temperatura de grados Celsius a grados Fahrenheit.

Fórmula utilizada:

```plaintext
°F = (°C × 9/5) + 32
```

Ejemplos:

```js
celsiusAFahrenheit(0);   // 32
celsiusAFahrenheit(25);  // 77
celsiusAFahrenheit(-10); // 14
```

---

### 4. `esMayorDeEdad(edad)`

Verifica si una persona es mayor de edad.

Reglas principales:

- Devuelve `true` si la edad es `18` o mayor.
- Devuelve `false` si la edad es menor de `18`.

Ejemplos:

```js
esMayorDeEdad(18); // true
esMayorDeEdad(25); // true
esMayorDeEdad(16); // false
```

---

### 5. `generarNombreCompleto(nombre, apellido)`

Genera un nombre completo uniendo el nombre y el apellido con un espacio.

Ejemplos:

```js
generarNombreCompleto("Ana", "Martínez");  // "Ana Martínez"
generarNombreCompleto("Luis", "Ramírez"); // "Luis Ramírez"
```

---

## Pruebas unitarias realizadas

Las pruebas se encuentran en el archivo `funciones.test.js`.

## Casos de prueba utilizados

| Función | Caso probado | Entrada | Resultado esperado |
|---|---|---|---|
| `calcularDescuento` | Descuento válido | `1000, 20` | `800` |
| `calcularDescuento` | Descuento de 0% | `500, 0` | `500` |
| `calcularDescuento` | Descuento de 100% | `750, 100` | `0` |
| `calcularDescuento` | Porcentaje mayor a 100 | `300, 120` | `"Porcentaje inválido"` |
| `calcularDescuento` | Porcentaje menor a 0 | `300, -10` | `"Porcentaje inválido"` |
| `validarPassword` | Contraseña válida | `"abc12345"` | `true` |
| `validarPassword` | Sin números | `"abcdefgh"` | `false` |
| `validarPassword` | Demasiado corta | `"abc123"` | `false` |
| `validarPassword` | Solo números, pero válida | `"12345678"` | `true` |
| `celsiusAFahrenheit` | Conversión de 0°C | `0` | `32` |
| `celsiusAFahrenheit` | Conversión de 25°C | `25` | `77` |
| `celsiusAFahrenheit` | Conversión negativa | `-10` | `14` |
| `esMayorDeEdad` | Edad límite | `18` | `true` |
| `esMayorDeEdad` | Mayor de edad | `25` | `true` |
| `esMayorDeEdad` | Menor de edad | `16` | `false` |
| `generarNombreCompleto` | Nombre completo 1 | `"Ana", "Martínez"` | `"Ana Martínez"` |
| `generarNombreCompleto` | Nombre completo 2 | `"Luis", "Ramírez"` | `"Luis Ramírez"` |

---

## Qué valida cada prueba

### Pruebas de `calcularDescuento`

Estas pruebas verifican que la función aplique correctamente descuentos normales y también valide porcentajes incorrectos. Se prueban casos límite como `0%` y `100%`.

### Pruebas de `validarPassword`

Estas pruebas verifican que la contraseña cumpla con la longitud mínima y que contenga al menos un número. También se prueban contraseñas inválidas por falta de números o por ser demasiado cortas.

### Pruebas de `celsiusAFahrenheit`

Estas pruebas verifican que la fórmula de conversión se aplique correctamente con temperaturas positivas, negativas y el valor límite de `0°C`.

### Pruebas de `esMayorDeEdad`

Estas pruebas validan edades menores, mayores y el caso límite de exactamente `18` años.

### Pruebas de `generarNombreCompleto`

Estas pruebas verifican que el nombre y el apellido se unan correctamente usando un espacio entre ambos valores.

---

## Cómo ejecutar el proyecto

### 1. Instalar dependencias

En la terminal, dentro de la carpeta del proyecto, ejecuta:

```bash
npm install
```

### 2. Ejecutar pruebas

Después ejecuta:

```bash
npm test
```

Jest ejecutará el archivo `funciones.test.js` y mostrará si las pruebas pasaron correctamente.

---

## Resultado esperado de las pruebas

El resultado esperado es que todas las pruebas pasen correctamente.

Ejemplo de salida esperada:

```plaintext
PASS ./funciones.test.js
Tests: 17 passed, 17 total
```

---

## Problemas encontrados durante el desarrollo

Durante el desarrollo no se encontraron errores graves. Los puntos que se cuidaron fueron:

- Exportar correctamente las funciones desde `funciones.js` usando `module.exports`.
- Importar correctamente las funciones en `funciones.test.js` usando `require`.
- Probar valores límite como `0%`, `100%` y edad `18`.
- Validar entradas inválidas en el porcentaje de descuento.

---

## Conclusión

Este ejercicio permite practicar la creación de funciones en JavaScript y la escritura de pruebas unitarias con Jest. Las pruebas ayudan a confirmar que cada función trabaja correctamente en casos normales, casos inválidos y valores límite.
