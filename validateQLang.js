function validarSintaxis(code) {
  const qubitsDeclarados = new Set();
  const lines = code.split("\n").map(line => line.trim());

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    if (line.startsWith("Qubit")) {
      const match = line.match(/^Qubit\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*;?$/);
      if (!match) {
        throw new Error(`❌ Error de sintaxis en línea ${lineNumber}: declaración inválida de Qubit.`);
      }
      const qubitName = match[1];
      if (qubitsDeclarados.has(qubitName)) {
        console.warn(`⚠️ Advertencia en línea ${lineNumber}: el Qubit '${qubitName}' ya fue declarado.`);
      }
      qubitsDeclarados.add(qubitName);
    } 
    
    else if (line.startsWith("H(") || line.startsWith("Measure(")) {
      const match = line.match(/\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/);
      if (match) {
        const qubit = match[1];
        if (!qubitsDeclarados.has(qubit)) {
          throw new Error(`❌ Error en línea ${lineNumber}: el Qubit '${qubit}' no ha sido declarado.`);
        }
      } else {
        throw new Error(`❌ Error de sintaxis en línea ${lineNumber}: llamada inválida a función.`);
      }
    } 
    
    else if (line.startsWith("CX(")) {
      const match = line.match(/\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*,\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/);
      if (match) {
        const [control, target] = [match[1], match[2]];
        if (!qubitsDeclarados.has(control)) {
          throw new Error(`❌ Error en línea ${lineNumber}: el Qubit de control '${control}' no ha sido declarado.`);
        }
        if (!qubitsDeclarados.has(target)) {
          throw new Error(`❌ Error en línea ${lineNumber}: el Qubit objetivo '${target}' no ha sido declarado.`);
        }
      } else {
        throw new Error(`❌ Error de sintaxis en línea ${lineNumber}: uso incorrecto de la compuerta CX.`);
      }
    }

    // Otras validaciones futuras (QuantumCalculate, etc.) pueden ir aquí
  });
}

module.exports = {
  validarSintaxis
};
