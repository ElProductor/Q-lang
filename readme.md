// filepath: c:\Users\juanp\Downloads\qlang-extension\README.md
# QLang Extension for VS Code

VS Code extension for the QLang quantum programming language.

## Features
- Syntax highlighting for .qlg files
- Basic quantum gate operations support
- Code validation and error checking
- Integrated quantum circuit simulation

## Installation
1. Install Visual Studio Code
2. Clone this repository
3. Run `npm install`
4. Run `npm run compile`
5. Press F5 to start debugging

## Usage
Open any `.qlg` file to activate the extension.

## License
MIT License - See LICENSE for details


¿Qué es Q-Lang?
Q-Lang es un lenguaje de programación diseñado con el objetivo de realizar operaciones específicas en el mundo de la informática, tal vez para la ejecución de tareas de alto nivel o de sistemas, como el manejo de microbinarios o el desarrollo de sistemas embebidos. Este tipo de lenguajes suele estar diseñado para ser sencillo, eficiente y, a menudo, tiene comandos personalizados que permiten a los programadores realizar tareas rápidamente.

Q-Lang podría incluir capacidades de procesamiento de datos, interacciones con el sistema operativo, integración con hardware, o incluso como una herramienta educativa para enseñar conceptos básicos de programación.

Comandos Básicos en Q-Lang:
Comando de Inicio (Shell): Para ejecutar Q-Lang, debes iniciar una sesión de shell. Aquí se puede cargar el entorno para empezar a usar los comandos.

bash
Copiar
Editar
qlang
Esto abriría el shell de Q-Lang, donde podrás ejecutar los siguientes comandos.

Ejemplo de Comandos en Q-Lang:

Definir una variable: En Q-Lang, puedes declarar y asignar valores a variables de manera similar a otros lenguajes:

qlang
Copiar
Editar
let x = 5
let y = 10
Operaciones aritméticas: Para realizar cálculos simples, como sumas, multiplicaciones, etc., puedes escribir lo siguiente:

qlang
Copiar
Editar
let sum = x + y
let product = x * y
Imprimir en consola: Q-Lang podría tener un comando como print() para mostrar información en la consola:

qlang
Copiar
Editar
print("La suma es: ", sum)
Condicionales: Las estructuras condicionales como if permiten realizar decisiones basadas en condiciones:

qlang
Copiar
Editar
if x > y
    print("x es mayor que y")
else
    print("y es mayor que x")
Loops: Las estructuras de bucle, como el for, pueden ser utilizadas para repetir una acción varias veces:

qlang
Copiar
Editar
for i = 1 to 5
    print(i)
Funciones: También puedes definir funciones dentro del lenguaje:

qlang
Copiar
Editar
func sumar(a, b)
    return a + b
Comando para salir del Shell de Q-Lang: Una vez que hayas terminado de interactuar con el shell de Q-Lang, puedes salir de la sesión con el siguiente comando:

qlang
Copiar
Editar
exit
Cómo Configurar Q-Lang en tu Entorno
Si deseas usar Q-Lang en tu sistema, puedes configurarlo y agregarlo a las variables de entorno de la siguiente manera:

Agregar Q-Lang al PATH: Si has descargado el compilador o el intérprete de Q-Lang, debes agregar su ubicación a las variables de entorno para poder usarlo en cualquier directorio desde la terminal. Aquí hay un ejemplo de cómo hacerlo en Windows:

Abre el "Panel de Control".

Haz clic en "Sistema y Seguridad" -> "Sistema".

Haz clic en "Configuración avanzada del sistema" en el panel izquierdo.

En la ventana emergente, haz clic en "Variables de entorno".

En la sección "Variables del sistema", encuentra la variable llamada Path y haz clic en "Editar".

Agrega la ruta del directorio donde tienes el ejecutable de qlang.

Instalación en Linux/macOS: Si estás usando un sistema basado en Unix, puedes agregar la ruta a tu archivo .bashrc o .zshrc:

bash
Copiar
Editar
export PATH=$PATH:/ruta/a/qlang
Luego, ejecuta el comando source ~/.bashrc (o source ~/.zshrc) para aplicar los cambios.

Documentación Básica para Q-Lang
Definir Variables: Q-Lang permite a los usuarios definir variables usando el comando let para asignar valores.

qlang
Copiar
Editar
let x = 100
let name = "Q-Lang"
Funciones y Procedimientos: Puedes definir funciones para encapsular bloques de código.

qlang
Copiar
Editar
func saludar(nombre)
    print("Hola, ", nombre)
Manejo de Archivos: Si Q-Lang incluye capacidades de manejo de archivos, puedes leer y escribir en archivos de texto de manera sencilla.

qlang
Copiar
Editar
let archivo = open("archivo.txt", "r")
let contenido = leer(archivo)
print(contenido)
Control de Flujo: Como en otros lenguajes, puedes usar condicionales y bucles para controlar el flujo de ejecución.

qlang
Copiar
Editar
if x > 10
    print("x es mayor que 10")
Entradas del Usuario: Para interactuar con el usuario, puedes solicitar entradas de texto o números.

qlang
Copiar
Editar
let nombre = input("¿Cuál es tu nombre? ")
print("Hola, ", nombre)
Repositorio en GitHub
Para compartir Q-Lang con otros usuarios, puedes tener un repositorio en GitHub donde los interesados puedan acceder, clonar o contribuir al código de Q-Lang. Aquí hay un ejemplo de cómo podrías organizarlo:

Estructura de Directorios:

src/ - Código fuente de Q-Lang

docs/ - Documentación sobre cómo usar Q-Lang

examples/ - Ejemplos de código Q-Lang

bin/ - Archivos binarios o compilados

Comandos de Git Básicos:

Clonar el repositorio:

bash
Copiar
Editar
git clone https://github.com/Usuario/qlang.git
Agregar cambios y hacer commit:

bash
Copiar
Editar
git add .
git commit -m "Primer commit de Q-Lang"
Subir cambios al repositorio:

bash
Copiar
Editar
git push origin main
