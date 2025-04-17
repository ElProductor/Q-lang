const vscode = require('vscode');

function ejecutarQLang(code) {
    console.log("🔮 Ejecutando código QLang...");
    const lines = code.split("\n").map(line => line.trim());
    let resultado = '🔧 RESULTADO DE LA EJECUCIÓN DE QLANG\n\n';

    lines.forEach((line, index) => {
        if (!line || line.startsWith('//')) return;

        if (line.startsWith("Qubit")) {
            resultado += `🧬 [Línea ${index + 1}] Qubit declarado: ${line}\n`;
        } else if (line.includes("H(")) {
            resultado += `⚡ [Línea ${index + 1}] Hadamard aplicada: ${line}\n`;
        } else if (line.includes("CX(")) {
            resultado += `🔗 [Línea ${index + 1}] CNOT aplicada: ${line}\n`;
        } else if (line.includes("Measure(")) {
            resultado += `📏 [Línea ${index + 1}] Medición ejecutada: ${line}\n`;
        } else if (line.includes("ResetQubit(")) {
            resultado += `♻️ [Línea ${index + 1}] Qubit reiniciado: ${line}\n`;
        } else if (line.includes("ApplyGate(")) {
            resultado += `🌀 [Línea ${index + 1}] Compuerta aplicada: ${line}\n`;
        } else if (line.includes("QuantumCalculate(")) {
            resultado += `🧠 [Línea ${index + 1}] Cálculo cuántico ejecutado: ${line}\n`;
        } else if (line.startsWith("if")) {
            resultado += `🔀 [Línea ${index + 1}] Condicional detectado: ${line}\n`;
        } else if (line.includes("while")) {
            resultado += `🔁 [Línea ${index + 1}] Bucle detectado: ${line}\n`;
        } else if (/^[A-Za-z_][A-Za-z0-9_]*\s*\(.*\)/.test(line)) {
            resultado += `🔧 [Línea ${index + 1}] Función llamada: ${line}\n`;
        } else {
            resultado += `⚠️ [Línea ${index + 1}] Código no reconocido: ${line}\n`;
        }
    });

    return resultado;
}

function activarComandoRunQLang(context) {
    let disposable = vscode.commands.registerCommand('extension.runQLang', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('¡Abre un archivo .qlg para ejecutar código QLang!');
            return;
        }

        const document = editor.document;
        const fileName = document.fileName;

        if (!fileName.endsWith(".qlg")) {
            vscode.window.showWarningMessage('Este archivo no parece ser un archivo QLang (.qlg)');
        }

        const code = document.getText();
        const resultado = ejecutarQLang(code);

        const outputChannel = vscode.window.createOutputChannel("QLang Output");
        outputChannel.clear();
        outputChannel.appendLine(resultado);
        outputChannel.show(true);
    });

    context.subscriptions.push(disposable);
}

module.exports = {
    activarComandoRunQLang
};
