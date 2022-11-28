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

Esta estrategia utilizó la herramienta Mockaroo para generar el pool de datos, siguiendo el siguiente esquema de generación:

![image](https://user-images.githubusercontent.com/53886791/204195250-5414c0ce-a2cb-4bbe-b6e3-906a72ecd93a.png)

Se generaron 500 filas de datos y en cada escenario se escoge una fila aleatoriamente. El JSON generado se puede apreciar en la siguiente imagen:

![image](https://user-images.githubusercontent.com/53886791/204195135-227fa6e7-f8b7-4cda-9d32-29bc1c03ee9b.png)

Este JSON se genera antes de la ejecución de las pruebas, por lo que es apriori.


### Pseudo aleatorio Y Aleatorio
Estas dos estrategias utilizaron faker.js, pero las aleatorias normalente se utilizo el faker de kraken, y las aleatorias puras se utilizo faker puro. Estos datos se generan al momento de ejecutar los escenarios de pruebas, no antes.

