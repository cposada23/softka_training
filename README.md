# Softka training

Esta es la solución al ejercicio propuesto por **softka** en el cual se busca representar números como en una pantalla **LCD**

## Análisis
### entradas 
- La variable de entrada sera un **String** que contiene dos números separados por una coma.
- El primer número es la variable **size** que representa el tamaño de la impresión, este debe ser un número entre **[1 - 10]**
- El segundo sera la variable **number** que es el número a mostrar en la pantalla
- Para terminar el programa se debe digitar ***0,0***
### Salida
- Se imprimen los números especificados usando el carácter "-" o "|"
### Validaciones
- Se debe validar que la variable ***size*** sea un número entre 0 y 10
- Se debe validar que los dos números esten separados por una coma
- Para solucionar esto se eligió trabajar con expresiones regulares, capturando ambos números en dos grupos. La expresión regular utilizada es `/^([1-9]|1[0]),([0-9]*)$/`

## Uso 
La tecnologia escogida es ***Node JS***, en la versión ***9.10.1***
> Para correr el programa principal no es necesario instalar ningún modulo externo a los que ya vienen con Node JS

Solo hay que ejecutar el siguiente comando **`npm start`** e ingresar los números en el formato correcto (separados por comas), en caso de que se ingrese un número en el formato incorrecto la aplicación no fallará, solo mostrará un mensaje de error y el usuario podrá seguir escribiendo números hasta que este ingrese ***0,0***, lo que terminará el programa

## Pruebas
Para ejecutar el resultado de las pruebas unitarias escritas se debe ejecutar el siguiente comando en la consola **`npm test`**
> **Nota importante**: para ejecutar las pruebas, se deben instalar dos módulos: ***ava y nyc***. **Ava** es el encargado de correr las pruebas unitarias y **nyc** es el encargado de medir la cobertura de código cubierta por las pruebas unitarias.
> Para instalar estos módulos correr el siguiente comando en la consola **`npm install`**.
>
