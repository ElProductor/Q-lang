const fs = require('fs');
const path = require('path');

function interpretarQLang(code) {
  console.log("🔮 Ejecutando código QLang...");
  const lines = code.split("\n").map(line => line.trim());
  lines.forEach(line => {
    if (line.startsWith("Qubit")) {
      console.log("🧬 Qubit declarado:", line);
    } else if (line.includes("H(")) {
      console.log("⚡ Puerta Hadamard aplicada:", line);
    } else if (line.includes("CX(")) {
      console.log("🔗 CNOT aplicada:", line);
    } else if (line.includes("Measure")) {
      console.log("📏 Medición ejecutada:", line);
    } else {
      console.log("📝 Código:", line);
    }
  });
}

function ejecutarDesdeArchivo(file) {
  if (!file) {
    console.error("❌ Debes indicar un archivo .qlg");
    process.exit(1);
  }

  // Verificar que el archivo tenga extensión .qlg
  if (path.extname(file) !== '.qlg') {
    console.error("❌ El archivo debe tener la extensión .qlg");
    process.exit(1);
  }

  try {
    const code = fs.readFileSync(file, "utf-8");
    interpretarQLang(code);
  } catch (error) {
    console.error(`❌ Error al leer el archivo: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  const file = process.argv[2];
  ejecutarDesdeArchivo(file);
}
