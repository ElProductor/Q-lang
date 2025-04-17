function validarSintaxis(code) {
  const lines = code.split('\n');

  const regexes = {
    qubitDecl: /^Qubit\s+\w+\s*;$/,
    measure: /^Measure\s*\(\s*\w+\s*\)\s*;$/,
    hadamard: /^H\s*\(\s*\w+\s*\)\s*;$/,
    cx: /^CX\s*\(\s*\w+\s*,\s*\w+\s*\)\s*;$/,
    ifStart: /^if\s*\(.*\)\s*\{\s*$/,
    elseStart: /^\}\s*else\s*\{\s*$/,
    blockEnd: /^\}\s*$/,
    whileStart: /^while\s*\(.*\)\s*\{\s*$/
  };

  let blockStack = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//')) return; // línea vacía o comentario

    // Validar paréntesis balanceados
    const openParens = (trimmed.match(/\(/g) || []).length;
    const closeParens = (trimmed.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
      throw new Error(`Paréntesis no balanceados en línea ${index + 1}: '${trimmed}'`);
    }

    // Validar llaves y bloques
    if (regexes.ifStart.test(trimmed) || regexes.whileStart.test(trimmed)) {
      blockStack.push('block');
      return;
    }
    if (regexes.elseStart.test(trimmed)) {
      if (blockStack.length === 0) {
        throw new Error(`'else' sin 'if' en línea ${index + 1}`);
      }
      return;
    }
    if (regexes.blockEnd.test(trimmed)) {
      if (blockStack.length === 0) {
        throw new Error(`Llave de cierre inesperada en línea ${index + 1}`);
      }
      blockStack.pop();
      return;
    }

    // Validar comandos individuales
    const esValido =
      regexes.qubitDecl.test(trimmed) ||
      regexes.measure.test(trimmed) ||
      regexes.hadamard.test(trimmed) ||
      regexes.cx.test(trimmed);

    if (!esValido && blockStack.length === 0) {
      throw new Error(`Instrucción no válida o mal formada en línea ${index + 1}: '${trimmed}'`);
    }
  });

  if (blockStack.length !== 0) {
    throw new Error(`Bloques no cerrados correctamente. Verifica tus llaves '{' y '}'`);
  }
}

module.exports = {
  validarSintaxis
};