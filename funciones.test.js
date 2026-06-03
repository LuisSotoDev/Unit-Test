const {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto,
} = require("./funciones");

describe("Pruebas para calcularDescuento", () => {
  test("debe aplicar correctamente un descuento válido", () => {
    expect(calcularDescuento(1000, 20)).toBe(800);
  });

  test("debe devolver el mismo precio cuando el descuento es 0%", () => {
    expect(calcularDescuento(500, 0)).toBe(500);
  });

  test("debe devolver 0 cuando el descuento es 100%", () => {
    expect(calcularDescuento(750, 100)).toBe(0);
  });

  test("debe devolver mensaje de error si el porcentaje es mayor a 100", () => {
    expect(calcularDescuento(300, 120)).toBe("Porcentaje inválido");
  });

  test("debe devolver mensaje de error si el porcentaje es menor a 0", () => {
    expect(calcularDescuento(300, -10)).toBe("Porcentaje inválido");
  });
});

describe("Pruebas para validarPassword", () => {
  test("debe devolver true si la contraseña tiene mínimo 8 caracteres y al menos un número", () => {
    expect(validarPassword("abc12345")).toBe(true);
  });

  test("debe devolver false si la contraseña no contiene números", () => {
    expect(validarPassword("abcdefgh")).toBe(false);
  });

  test("debe devolver false si la contraseña tiene menos de 8 caracteres", () => {
    expect(validarPassword("abc123")).toBe(false);
  });

  test("debe devolver true si la contraseña solo tiene números pero cumple con 8 caracteres", () => {
    expect(validarPassword("12345678")).toBe(true);
  });
});

describe("Pruebas para celsiusAFahrenheit", () => {
  test("debe convertir 0 grados Celsius a 32 grados Fahrenheit", () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
  });

  test("debe convertir 25 grados Celsius a 77 grados Fahrenheit", () => {
    expect(celsiusAFahrenheit(25)).toBe(77);
  });

  test("debe convertir temperaturas negativas correctamente", () => {
    expect(celsiusAFahrenheit(-10)).toBe(14);
  });
});

describe("Pruebas para esMayorDeEdad", () => {
  test("debe devolver true si la edad es exactamente 18", () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  test("debe devolver true si la edad es mayor a 18", () => {
    expect(esMayorDeEdad(25)).toBe(true);
  });

  test("debe devolver false si la edad es menor de 18", () => {
    expect(esMayorDeEdad(16)).toBe(false);
  });
});

describe("Pruebas para generarNombreCompleto", () => {
  test("debe unir nombre y apellido con un espacio", () => {
    expect(generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
  });

  test("debe generar correctamente otro nombre completo", () => {
    expect(generarNombreCompleto("Luis", "Ramírez")).toBe("Luis Ramírez");
  });
});
