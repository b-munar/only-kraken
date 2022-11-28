# Semana 7 - Generación de Datos

### Pasos para ejecutar las pruebas

Antes de ejecutar las pruebas, cree un usuario con los siguientes datos:

* Email: b.munar@uniandes.edu.co
* Password: uniandes2022
* Nombre de usuario: brahian

Importante tener corriendo las versiones de ghost que se quieren probar.

1. Clone el repositorio de la entrega.
1. Abra una terminal.
1. Usando el comando cd ubíquese en su terminal en la raíz del repositorio.
1. Ejecute el comando npm install
1. Ejecute el comando npm run kraken-node-run
1. Cada archivo de pruebas se ejecutará y los resultados se almacenarán en la carpeta reports. Los screenshots se almacenarán en la carpeta screenshots.

Herramienta de pruebas: Kraken

Versión de Ghost: 3.41.1

Versión de Node: 14.20.1

## Reporte de manejo de datos inválidos

En el siguiente enlace se encuentran las 10 incidencias de manejo de datos inválidos:

[Reporte Incidencias](https://github.com/catorrese/pruebas_automatizadas_grupo14/issues)

## Nota
El equipo al ser de solo dos personas, se hicieron 60 escenarios, osea 30 escenarios por persona, para verlos en detalle, puede ver el documento escenarios.ods (una hoja de calculo en formato libre)

## Estategias de generación de datos

### Pool de datos a priori
Esta estrategia utilizo de lleno la herramienta de Mockaroo.

### Pseudo aleatorio Y Aleatorio
Estas dos estrategias utilizaron faker.js, pero las aleatorias normalente se utilizo el faker de kraken, y las aleatorias puras se utilizo faker puro.

