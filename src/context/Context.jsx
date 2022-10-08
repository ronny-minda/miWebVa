import { createContext, useContext } from "react";
// import React, { useState } from "react";

const datos = [
  {
    id: 1,
    fecha: "03-01-2021",
    titulo: "Cómo funciona y cómo usar los operadores Spread y Rest",
    img: "/datos/Cómo funciona y cómo usar los operadores Spread y Rest.png",
    contenido: `<p>
            En el artículo de hoy vamos a hablar de una de las características
            de la versión ES6 (ECMAScript 2015) de JavaScript que es el operador
            Spread así como el operador Rest. Estas características pueden ser
            muy útiles cuando se desarrolla y trabaja con los marcos de trabajo
            del front-end. Explicaremos como puedes usarlo en la práctica cuando
            copies y fusiones arrays y literales de objetos, insertas datos, con
            los beneficios de hacer tu código más limpio. Vamos a entrar en ello
            y ver cómo funciona.
          </p>

          <h2>Definición y sintaxis del Spread operador</h2>

          <p>
            El operador Spread aparece como tres puntos (...) y lo que hace es
            tomar el grupo en expresión e intentar "extenderlo" a múltiples
            valores. Puede llevar los elementos de una matriz existente a una
            nueva matriz. Cuando tenemos una iterable como por ejemplo una
            matriz con múltiples valores, expande los valores de esa matriz en
            elementos individuales.
          </p>
          <p>
            Se utiliza principalmente en la matriz de variables donde se espera
            que haya más de un valor.
          </p>

          <pre>var variable = [...valor];</pre>

          <p>
            Hay básicamente 3 ocasiones en las que se puede usar spread - En los
            literales de la matriz, en los literales de los objetos y en las
            llamadas a funciones. También se puede usar para hacer copias de
            objetos, así que empecemos con eso.
          </p>

          <h2>Copia de una matriz u objeto</h2>

          <p>
            Hacer copias de los no-primitivos puede ser difícil. Si copias una
            primitiva, como un número o una cadena, crearás una copia real, pero
            con objetos es diferente. Vamos a crear una matriz con 3 elementos.
            Luego hacemos una copia superficial de ese array usando el operador
            de dispersión y el tercer array es un nuevo array, pero básicamente
            es el mismo array que el array1, porque cuando asignas el array1 al
            array3, se copia la referencia al array1, no los valores en sí
            mismos.
          </p>

          <p>
            Eso es copia de JavaScript por referencia. Cuando hagamos cambios en
            el array1, también el array3 será alterado, porque la referencia de
            la variable es el mismo lugar en la memoria. Con el operador de
            difusión, en realidad creamos un nuevo array completamente - los
            valores se copiarán y JS manejará este nuevo objeto como una entrada
            separada, como una nueva entrada declarada en la memoria. Al hacer
            cambios en el nuevo array2, el original no se vería afectado. Esto
            se llama copia profunda.
          </p>

          <pre>
            
    let array1 = ['h', 'e', 'y'];
    let array2 = [...array1];
    let array3 = array1
    
    console.log(array2); //Array(3) [ "h", "e", "y" ]
    array1.shift();
    console.log(array1); //Array [ "e", "y" ]
    console.log(array2); //no hay cambios - Array(3) [ "h", "e", "y" ]
    console.log(array3); //Array [ "e", "y" ]
          
          </pre>

          <p>
            Nota: La propagación sólo tiene un nivel de profundidad cuando se
            copia una matriz o un objeto, no realiza una copia profunda de
            estructuras de datos anidados. (para eso necesitarías const myClone
            = JSON.parse(JSON.stringify(objToClone)) El siguiente ejemplo
            muestra la creación de una copia de un objeto.
          </p>

          <pre>
            
    const myName = {
      firstName :'Tibor',
      middleName : '',
      lastName : 'Kopca'
    }
    const newName = {...myName}         //usando spread copiamos el objeto
    newName.middleName = 'Tiburon'      //añadimos un nuevo atributo al objeto copiado
    console.log("El antiguo nombre era :"+myName.firstName+" "+myName.middleName+" "+myName.lastName)
    //El antiguo nombre era :Tibor  Kopca
    console.log("El nuevo nombre es :"+newName.firstName+" "+newName.middleName+" "+newName.lastName)
    //El nuevo nombre es :Tibor Tiburon Kopca
          
          </pre>

          <h2>Se esparcen en los literales de la matriz</h2>
          <p>
            Spread operador puede ser usado en muchos casos, como cuando
            queremos expandir, copiar, concatenar el primer objeto. Podemos
            fusionar efectivamente dos o más iterables sin necesidad del método
            concat.
          </p>

          <p>
            Aquí es un ejemplo del uso cuando necesitamos añadir elementos de
            array1 y array2 juntos, combinándolos en uno. Nota: para los datos
            grandes usar el operador spread resultará más lento comparado con el
            método nativo concat() .
          </p>

          <pre>
            
    let array1 = [1,2,3,4,5,6];
    let array2 = [7,8,9];
    let arrayConcat = array1.concat(array2);
    console.log(arrayConcat); //Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    let arraySpread = [...array1, ...array2]; //Combinando ambos conjuntos en uno
    console.log(arraySpread); //Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
          
          </pre>

          <p>
            De la misma manera si queremos expandir una matriz para más valores:
          </p>

          <pre>
            
    let arrayExpanded = [...array2, 10, 11];
    console.log(arrayExpanded); //Array(5) [ 7, 8, 9, 10, 11 ]
          
          </pre>

          <p>
            O podemos concatenar argumentos de cadena. Noten la diferencia en
            las dos últimas filas.
          </p>

          <p>Aquí podemos ver que las cadenas también son iterativas.</p>

          <pre>
            
    console.log(..."VICTORY!"); // V I C T O R Y !
          
          </pre>

          <p>
            Aquí hay otro ejemplo de conjuntos concatenados en un gran conjunto.
            El orden en que se agregan los conjuntos es importante en este caso.
          </p>

          <pre>
            
    let pets = ['cat', 'dog', 'bird'];
    let kids = ['Peter', 'Suzan'];
    const fullfamily = [...kids, ...pets];
    console.log(fullfamily); //Array(5) [ "Peter", "Suzan", "cat", "dog", "bird" ]
          
          </pre>

          <h2>Spread in Llamadas de la función</h2>

          <p>
            Veamos algunos ejemplos cuando se trabaja con un objeto matemático.
            Aquí encontraremos, por ejemplo, el mínimo de una lista de
            argumentos separados por comas: los números del 0 al 4, y el número
            más bajo es el "0". Sin argumentos será el infinito, etc. Pero con
            la lista de números en la matriz no funcionará y devolverá NaN.
            Ahora podemos hacer uso del Spread operador, que nos permite pasar
            cada número de la matriz en la función matemática como argumentos
            individuales.
          </p>`,
  },
  {
    id: 2,
    fecha: "15-02-2021",
    titulo:
      "Por qué los desarrolladores de JavaScript deberían preferir Axios a Fetch",
    img: "/datos/Por qué los desarrolladores de JavaScript deberían preferir Axios a Fetch.png",
    contenido: `<p>
    Por qué los desarrolladores de JavaScript deberían preferir Axios a
    Fetch En mi artículo anterior, "Usando la Api Fetch Para Hacer
    Llamadas Ajax", hablé de los fundamentos de la API Fetch. Pero vale
    la pena reconocer que fetch() no es siempre una solución ideal, y a
    veces hay mejores alternativas para hacer peticiones HTTP. Aquí
    vamos a examinar por qué Axios es mejor que fetch() en el
    desarrollo.
  </p>

  <h2>Visión general y sintaxis</h2>
  <h2>Visión general y sintaxis en Fetch</h2>

  <p>
    fetch() forma parte de un método window-object de JavaScript dentro
    de la Fetch API. Está incorporado, por lo que los usuarios no tienen
    que instalarlo. fetch() nos permite obtener datos de la API de forma
    asíncrona sin necesidad de instalar ninguna librería adicional.
  </p>

  <pre>
    
    fetch(url)
    .then((res) => {
    // maneja la respuesta
    })
    .catch((error) => {
    // maneja el error
    });
  
  </pre>

  <p>
    El fragmento de código anterior es una simple solicitud de obtención
    fetch(). En el método fetch(), hay un argumento obligatorio, que es
    url. url es una ruta de la que el usuario desea obtener datos.
    Entonces el método fetch() devuelve una promesa que puede resolver
    el objeto de respuesta o rechazarlo con un error.
  </p>

  <pre>
    
    fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .catch((error) => console.log(error));
      
  </pre>

  <p>
    Los segundos argumentos del método fetch() son opciones, y son
    opcionales. Si el usuario no pasa las opciones, la petición siempre
    obtiene, y descarga el contenido de la URL dada. Como mencioné
    antes, la promesa devuelve el objeto de respuesta, y debido a eso,
    los usuarios necesitan usar otro método para obtener el cuerpo de la
    respuesta. Hay algunos métodos diferentes que los usuarios pueden
    utilizar dependiendo del formato del cuerpo.
  </p>

  <pre>
    
    response.json()
    response.text()
    response.blob()
    response.formData()
    response.arrayBuffer()
  
  </pre>

  <p>El más popular es response.json().</p>

  <p>
    Desafortunadamente, la función fetch() incorporada no está en
    Node.js, pero hay un polyfill como node-fetch. Entre node-fetch y la
    función fetch() del navegador, existen varias variaciones conocidas.
  </p>

  <h2>Visión general y sintaxis en Axios</h2>

  <p>
    Axios es una librería JavaScript para realizar peticiones HTTP desde
    Node o XMLHttpRequest o un navegador. Como biblioteca moderna, está
    basada en la API Promise. Axios tiene algunas ventajas, como la
    protección contra los ataques de falsificación de solicitudes entre
    sitios (CSFR). Para poder usar la librería Axios, los usuarios
    tienen que instalarla e importarla a su proyecto, usando CDN, npm,
    Yarn, o Bower.
  </p>

  <pre>
    
    axios.get(url)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
      
  </pre>

  <p>
    El fragmento de código anterior es un método get y un simple
    callback para una respuesta y un error. Cuando los usuarios crean un
    objeto de configuración, pueden definir un montón de propiedades.
    Las más comunes son url, baseURL, params, auth, headers,
    responseType, y data.
  </p>

  <p>
    Como respuesta, Axios devuelve una promesa que se resolverá con el
    objeto respuesta o con un objeto error. En el objeto de respuesta,
    existen los siguientes valores:
  </p>

  <pre>
    
    data:Cuerpo real de la respuesta
    status: Código de estado HTTP de la llamada, como 200 o 404
    statusText: Estado HTTP en forma de mensaje de texto
    headers: Lo mismo que en la request
    config: configuración Request
    request: objecto XMLHttpRequest (XHR)
  
  </pre>

  <pre>
    
    axios({
    url: "http://api.com",
    method: "POST",
    header: {
    "Content-Type": "application/json",
    },
    data: { name: "Holyguard", age: 45 },
    });
  
  </pre>

  <p>
    Los usuarios necesitan trabajar con dos promesas en fetch(). Los
    usuarios pueden evitar la repetición de tareas y escribir un código
    más limpio y sucinto en Axios.
  </p>

  <p>
    Axios utiliza la propiedad data, pero fetch() utiliza la propiedad
    body para tratar los datos. En fetch(), la URL se pasa como
    argumento, pero en Axios la URL se establece en el objeto config.
  </p>

  <h2>JSON con Fetch</h2>

  <p>
    Usando el método fetch(), los usuarios necesitan usar algún tipo de
    método en los datos de la respuesta. Cuando los usuarios están
    enviando el cuerpo con la solicitud, los usuarios necesitan
    stringificar los datos.
  </p>

  <pre>
    
    fetch('url')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  
  </pre>

  <p>
    En el trozo de código anterior, con la respuesta, los usuarios
    necesitan procesar la acción response.json(). Cuando se trata de los
    datos JSON en fetch(), hay un proceso de dos pasos. Los usuarios
    necesitan hacer la solicitud real primero y luego llamar al método
    .json() en la respuesta.
  </p>

  <h2>JSON con Axios</h2>

  <p>
    En Axios los usuarios pasan datos en la solicitud u obtienen datos
    de la respuesta, y los datos se encadenan automáticamente. Por lo
    tanto, no se requieren otras operaciones.
  </p>

  <pre>
    
    axios.get('url')
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
  
  </pre>

  <p>En el ejemplo anterior, puedes ver que sólo necesitas un then.</p>

  <p>
    La transformación automática de los datos es una buena
    característica para tener en Axios.
  </p>

  <h2>Tratamiento de errores</h2>

  <h2>Tratamiento de errores en Fetch</h2>

  <p>
    Cada vez que se obtiene una respuesta del método fetch(), es
    necesario comprobar si el estado es un éxito porque incluso si no lo
    es, se obtendrá la respuesta. En el caso de fetch(), una promesa no
    se resolverá si y sólo si la petición no se completa.
  </p>

  <pre>
    
    fetch('url')
    .then((response)=>{
    if(!response.ok){
        throw Error (response.statusText);
    }
    return response.json();
    })
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
  
  </pre>

  <p>
    Fetch() no lanza errores de red. Por lo tanto, siempre debe
    comprobar la propiedad response.ok cuando trabaje con fetch().
    Podrías extraer esta comprobación de errores en una función para
    hacerla más fácil y reutilizable.
  </p>

  <pre>
    
    const checkError = response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
    };

    fetch("url")
    .then(checkError)
    .then(data => console.log(data))
    .catch(error => console.log("error", error));
  
  </pre>

  <h2>Tratamiento de errores en Axios</h2>

  <p>
    En Axios, el manejo de errores es bastante fácil porque Axios arroja
    errores de red. Si hay una mala respuesta como 404, la promesa será
    rechazada y devolverá un error. Por lo tanto, necesitas atrapar un
    error, y puedes comprobar qué tipo de error fue.
  </p>

  <pre>
    
    axios.get('url')
    .then((response)=> console.log(response))
    .catch((error)=>{
    if(error.response){
    // Cuando el código de estado de la respuesta está fuera del rango 2xxx 
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    } else if (error.request){
        // Cuando no se ha recibido ninguan respuesta despues de haber enviado la request 
        console.log(error.request);
    } else {
        // Error
        console.log(error.message);
    }
    })
  
  </pre>

  <h2>Progreso de la descarga</h2>

  <p>
    Cuando se cargan activos de gran tamaño, los indicadores de progreso
    son muy útiles para los usuarios con una velocidad de Internet
    lenta. En los indicadores de progreso implementados anteriormente,
    los desarrolladores utilizaban XMLHttpRequest.onprogress como
    controlador de devolución de llamada.
  </p>

  <h2>Progreso de la descarga en Fetch</h2>

  <p>
    Para seguir el progreso de la descarga en fetch(), puedes utilizar
    una de las propiedades de response.body, un objeto ReadableStream.
    Éste proporciona los datos del cuerpo trozo a trozo, y permite
    contar cuántos datos se consumen en el tiempo.
  </p>

  <pre>
    
    // código original: https://github.com/AnthumChris/fetch-progress-indicators
    const element = document.getElementById('progress');

    fetch('url')
    .then(response => {

    if (!response.ok) {
      throw Error(response.status+' '+response.statusText)
    }

    // asegurate que ReadableStream esté suportado
    if (!response.body) {
      throw Error('ReadableStream no suportado en este navegador.')
    }

    // almacenar el tamaño del entity-body, en bytes
    const contentLength = response.headers.get('content-length');

    // asegurate que contentLength esté disponible
    if (!contentLength) {
      throw Error('Content-Length encabezado de respuesta no disponible');
    }

    // convertir el entero en un número de base-10
    const total = parseInt(contentLength, 10);

    let loaded = 0;

    return new Response(

      // crear y devolver un flujo legible
      new ReadableStream({
        start(controller) {
          const reader = response.body.getReader();

          read();
          function read() {
            reader.read().then(({done, value}) => {
              if (done) {
                controller.close();
                return; 
              }
              loaded += value.byteLength;
              progress({loaded, total})
              controller.enqueue(value);
              read();
            }).catch(error => {
              console.error(error);
              controller.error(error)                  
            })
          }
        }
      })
    );
    })
    .then(response => 
    // construir un blob a partir de los datos
    response.blob()
    )
    .then(data => {
    // insertar la imagen descargada en la página
    document.getElementById('img').src = URL.createObjectURL(data);
    })
    .catch(error => {
    console.error(error);
    })

    function progress({loaded, total}) {
    element.innerHTML = Math.round(loaded/total*100)+'%';
    }
  
  </pre>`,
  },
  {
    id: 3,
    fecha: "20-03-2021",
    titulo: "5 características de Javascript ES6 que deberías utilizar",
    img: "/datos/5 características de Javascript ES6 que deberías utilizar.png",
    contenido: `<p>
    Nosotros, como desarrolladores, debemos estar tratando de usar las
    mejores herramientas y características de nuestra disposición para
    hacer nuestro trabajo más fácil y eficiente.
  </p>

  <p>
    Aquí voy a explicar 5 características del Javascript moderno que son
    muy útiles y que vas a usar todo el tiempo:
  </p>

  <pre>
    
Palabras clave Let y Const
Funciones Flecha (Arrow Functions)
Desestructuración (Destructuring)
el operador Spread
Literales de Template (Template Literals)
  
  </pre>

  <p>
    Es 2019 y todos los navegadores modernos soportan todas estas
    características, así que no hay excusa.
  </p>

  <p>
    Puede ejecutar todo el código de ejemplo en su browser Developer
    Tools
  </p>

  <h1>1. Las palabras clave let y const</h1>

  <p>
    En Javascript var era la única forma de declarar una variable, el
    problema con var es que no tiene alcance (scope) y se puede declarar
    la misma variable varias veces, por eso ahora tenemos palabras clave
    let y const .
  </p>

  <h1>let</h1>

  <p>
    let permite declarar variables cuyo alcance se limita al bloque,
    sentencia o expresión en la que se utiliza. Esto es diferente a la
    palabra clave var , que define una variable globalmente, o
    localmente a una función completa sin importar el alcance del bloque
    (block scope).[1]
  </p>

  <pre>
    
    var date = new Date("2015-01-01");
    var region = "US";
    if (region === "US") {
    var date = new Date();
    console.log("New date", date); // Obtenemos la fecha actual como se esperaba
    }
    console.log(date); //Esperabamos 2015-01-01T00:00:00.000Z pero tenemos la fecha actual
  
  </pre>

  <p>
    Nosotros, los desarrolladores, somos malos para nombrar y si
    trabajamos con otros, el problema se multiplica por 10. Así que no
    es raro que usemos el mismo nombre para cosas diferentes.
  </p>

  <p>Veamos cómo funciona esto con let</p>

  <pre>
        
    let date = new Date("2015-01-01");
    let region = "US";
    if (region === "US") {
    let date = new Date();
    console.log("New date", date); // Obtenemos la fecha actual como se esperaba
    console.log(date); //Obtenemos 2015-01-01T00:00:00.000Zcomo se esperaba :)
  
  </pre>

  <p>
    Para mí, el alcance (scoping) es la característica más importante de
    let. Otras características son
  </p>

  <p>
    Redeclaración: Si se declara una variable con el mismo nombre en la
    misma función o ámbito de aplicación del bloque (block scope), se
    obtiene un valor de SyntaxError. Bueno para dejar de usar las
    variables del mismo nombre.
  </p>

  <p>
    Alzamiento (Hoisting): Si se utiliza una variable antes de la
    declaración, se obtiene una ReferenceError.
  </p>

  <h2>const</h2>

  <p>
    const nos permite declarar una variable constante, un valor que no
    debería cambiar en nuestro código. Veamos un ejemplo:
  </p>

  <pre>
    
    const speedOfLight=299792458; //m*s-1
    try {
    speedOfLight=300;
    } catch(error) {
    console.log(error); // TypeError: Assignment to constant variable.
    // Nota - los mensajes de error variarán dependiendo del navegador
    }
    console.log(speedOfLight); 
    // Expected output 299792458
  
  </pre>

  <p>Otras características de const :</p>
  <p>Alcance (Scoping): las variables son también block-scoped.</p>
  <p>Immutable: El valor de una variable constante no puede cambiar.</p>
  <p>
    Redeclaración: Lo mismo que let una variable const no puede ser
    redeclarada y no puede ser redeclarado y levantará un un Syntax
    Error.
  </p>
  <p>
    Nota: Otra buena práctica para las variables es siempre declarar
    variables en la parte superior de la función o alcance del bloque
    (block scope), es más fácil de seguir.
  </p>

  <h2>2. Funciones Arrow</h2>

  <p>
    Las funciones Arrow (también conocido como flecha gorda para el
    simbolo) tiene una sintaxis más corta que una función regular y nos
    permite escribir un código más conciso.
  </p>

  <p>
    Veamos la diferencia entre expresiones de función antiguas y
    funciones de flecha (arrow functions):
  </p>

  <pre>
    
    //ES5
    let doubleNumbers = [1,2,3,4,5].map(function(number) { 
    return number*2;
    });
    //ES6 Arrow function
    let doubleNumbers = [1,2,3,4,5].map((number) => { 
    return number*2 
    });
  
  </pre>

  <p>
    En las funciones de flecha, no necesitas paréntesis cuando sólo
    tienes un argumento y si tienes una expresión de una línea como
    ésta, puedes dejar caer el retorno y las llaves:
  </p>

  <pre>
    
    //ES6 Arrow function one-liner
    let doubleNumbers = [1,2,3,4,5].map(number => number*2);
    //ES6 Arrow function multiple arguments
    handleClick((event, seconds) => {
    event.preventDefault();
    displayFireworks();
    showAnimation(seconds);
    });
  
  </pre>

  <p>
    Las funciones de flecha nos ahorran mucho escribir y también, en mi
    opinión, hacen que el código sea más legible.
  </p>

  <p>
    Lo que perdemos con las funciones de flecha es que no tenemos
    referencia a this , arguments , super or new.target . Esto significa
    que si realmente necesita alguno de estos argumentos dentro de una
    función, debería utilizar las funciones tradicionales.
  </p>

  <p>
    Mi recomendación es que utilice las funciones de flecha tanto como
    pueda. En el código, la legibilidad es la clave.
  </p>

  <h2>3. Desestructuración (Destructuring)</h2>
  <p>Esta es una de mis características favoritas de ES6.</p>
  <p>Veamos primero un ejemplo:</p>

  <pre>
    
    // Método antiguo
    const myArray = ['apple', 'pear', 'orange', 'banana'];
    let fruit1 = myArray[0];
    let fruit2 = myArray[1];
    let fruit3 = myArray[2];
    let fruit4 = myArray[3];
    //ES6 destructuring
    let [fruit1, fruit2, fruit3, fruit4] = myArray; // mucho mejor, ¿no? 
  
  </pre>

  <p>Podemos usarlo en objetos para:</p>

  <pre>
    
    let dog = {
    name: 'Toby',
    age: 3,
    breed: 'Beagle',
    features: {
    color: 'White and brown',
    favoriteToy: 'Plastic duck'
    }
    }
    // Podemos obtener los valores así con la desestructuración
    let {name, age, breed} = dog;
    // ¿Y si sólo queremos el nombre y la edad y todo lo demás en otra variable?
    let {name, age, ...info} = dog;
  
  </pre>

  <p>
    Así que lo que nos permite la asignación de desestructuración es
    extraer datos de matrices u objetos en distintas variables de una
    manera fácil y útil.
  </p>

  <p>Lo uso todo el tiempo para los objetos JSON.</p>

  <h2>Bonus</h2>

  <p>También puedes ir al revés:</p>

  <pre>
    
    let firstName="Albert"
    let lastName="Einstein"
    let person = {firstName, lastName}
    console.log(person.firstName); // "Albert"
    console.log(person.lastName); // "Einstein"
  
  </pre>

  <h2>4. Operador spread (operador de propagación)</h2>

  <p>
    El operador de propagación spread operator permite que una expresión
    sea expandida en situaciones donde se esperan múltiples argumentos
    (llamadas a funciones) o múltiples elementos (arrays literales).
  </p>

  <p>
    Veamos un ejemplo (notar que los puntitos son parte del operador):
  </p>

  <pre>
    
    let first = [1,2,3];
    let second = [4,5,6];
    // Si hacemos esto
    first.push(second);
    // Conseguimos
    console.log(first); // [1,2,3,[4,5,6]] eso no está bien
    // Usando el spread operator
    first.push(...second);
    console.log(first); // [1,2,3,4,5,6] ¡Eso es lo que queríamos!
  
  </pre>

  <p>
    Usando el spread operator (…) logramos obtener cada elemento
    individual sin hacer una iteración, esto es muy útil en muchas
    situaciones. Veamos otro ejemplo:
  </p>

  <pre>
        
    let scores = [23, 45, 56];
    function averageThreeScores(a, b, c) {
    let sum = a + b + c;
    return sum/3;
    }
    console.log(averageThreeScores(...scores)); // Resultado 41.333333...
  
  </pre>

  <p>
    Aquí estamos usando el operador spread para pasar argumentos a una
    función
  </p>

  <p>
    El operador Spread también trabaja con objetos. Al igual que con las
    matrices, el operador de dispersión nos permite obtener cada
    elemento individual de un objeto:
  </p>

  <pre>
    
    let name='Toby';
    let age=3;
    let features = {race: 'Beagle', size: 'small'};
    let dog = {name, age, ...features}; // Ampliamos las características objeto
    console.log(dog); // {name: 'Toby', age: 3, race: 'Beagle', size: 'small'}
  
  </pre>

  <p>
    El operador Spread también nos permite clonar un objeto en lugar de
    usar Object.assign :
  </p>

  

  <p>
    Como podemos ver, clonamos el objeto perro, y cambiamos el valor de
    edad y nombre sin modificar el objeto original.
  </p>

  <h2>5. Literales de Template (Template Literals)</h2>

  <p>
    Usamos cadenas en todas partes, y normalmente tenemos que pasar
    alguna variable a la cadena. Aquí es donde las plantillas literales
    vienen al rescate.
  </p>

  <p>
    Los Template literals están encerrados por el carácter back-tick()
    en lugar de comillas dobles o simples.
  </p>

  <p>
    Los Template literals pueden contener marcadores de posición. Estos
    están indicados por el símbolo del dólar y las llaves rizadas (
    {expresión}):
  </p>

  <pre>
    
    let a = 5;
    let b = 10;
    console.log(La suma de a y b es {a + b} y la multiplicación es {a * b}); 
    // La suma de a y b es 15 y la multiplicación es 50
  
  </pre>

  <p>También podemos escribir textos multilínea como:</p>

  <pre>
    
    let name='Miguel';
    let age=30;
    let country='Spain';
    console.log({name} tiene
    {age} años y
    vive en {country}
    );
    // Miguel tiene
    // 30 años y vive
    // en Spain
  
  </pre>`,
  },
  {
    id: 4,
    fecha: "18-04-2021",
    titulo: "Qué es un CDN y cuales son sus tipos",
    img: "/datos/Qué es un CDN y cuales son sus tipos.png",
    contenido: `<p>
    Un CDN, de forma muy sencilla y resumida, es un conjunto de
    servidores que se encuentran distribuidos por todo el mundo,
    conectados entre sí a través de internet.
  </p>

  <p>
    Quizás, dicho de esta forma, no se logre comprender exactamente lo
    que puede llegar a hacer, así que, ¿qué os parece si vemos como
    funciona un CDN de forma resumida?
  </p>

  <pre>
    
    El usuario, desde su navegador, solicita un sitio web.
    El servidor recibe la solicitud y genera un fichero HTML, el cual será enviado de vuelta al navegador del usuario.
    Una vez que el navegador del usuario reciba el HTML, este comenzará a ser interpretado.
    A medida que el navegador va interpretando el HTML, este, normalmente, se encuentra con enlaces a ficheros (imágenes, videos, CSS, JS…) los cuales se encuentran alojados en un servidor remoto y no en el mismo servidor al que se le realizó la petición en primer lugar. Este servidor remoto es el CDN.
    Si no se usara un CDN, cuando nuestro navegador encuentre un enlace, hará la petición al mismo servidor para recibir el recurso.
  
  </pre>

  <p>
    La diferencia es que, usando un CDN, todas las peticiones hacia los
    recursos estáticos irán al propio CDN, y no a nuestro servidor,
    liberando a este de tener que responder a una gran cantidad de
    peticiones y haciendo, por ende, que el tiempo de carga de la web
    sea más rápido, entre otras cosas.
  </p>

  <h2>¿Cómo funciona un CDN?</h2>
  <p>
    Si analizas brevemente el proceso descrito anteriormente, podrás
    observar que gran parte del trabajo lo realiza el servidor donde
    está alojada nuestra web, lo cual, no es una buena practica, dado
    que, para que nuestro servidor sea lo más rápido y eficiente posible
    debería dedicarse únicamente a generar y entregar la página HTML a
    los navegadores que lo soliciten.
  </p>

  <p>
    Antes de entrar en detalle y ver como funciona un CDN, nos gustaría
    contaoslo de forma esquemática:
  </p>

  <pre>
    
Disponemos de una red extensa de servidores conectados entre sí mediante internet alrededor del mundo.
En estos servidores, se almacena una copia de todos los ficheros estáticos de nuestro servidor web.
Cuando el navegador solicite uno de estos recursos, será el servidor CDN el que responda a la petición y no el servidor web.    
  
  </pre>

  <p>Veamos cada apartado con más detalle:</p>

  <h2>Red de servidores</h2>

  <p>
    A pesar de que hasta ahora nos hemos referido al CDN de forma
    singular como si fuese un único elemento, en realidad, se trata de
    un conjunto de servidores repartidos por todo el mundo.
  </p>

  <p>
    Gracias a esta característica, cuando un navegador solicita un
    recurso, le atenderá el servidor que esté mas próximo según su
    localización geográfica, reduciendo drásticamente el tiempo de envio
    y recepción de los datos. Recordad que la velocidad de carga de
    nuestro sitio es algo fundamental para el SEO
  </p>

  <h2>Almacenamiento local de los recursos.</h2>

  <p>
    En el CDN (sin importar en cual de sus servidores) se almacenarán
    los ficheros estáticos de nuestro sitio web. La razón es sencilla:
    si nuestro servidor web tuviera que responder a cada una de las
    peticiones para los recursos estáticos, esto afectaría negativamente
    al rendimiento del mismo.
  </p>

  <p>
    Por defecto, la gran mayoría de los CDN´s actuales se encargan de
    realizar copias y de comprobar que los ficheros de recursos estén
    actualizados, por lo que no deberemos de preocuparnos en un
    principio por este punto.
  </p>

  <h2>Respuesta a las peticiones de los recursos.</h2>

  <p>
    Llegados a este punto, disponemos de una red de servidores,
    distribuidos por todo el mundo, conectados entre si mediante
    internet y con una copia de todos nuestro ficheros de recursos
    estáticos.
  </p>

  <p>
    Sin embargo, actualmente todas las direcciones hacia estos recursos
    siguen con la dirección hacia nuestro servidor web, por lo que, si
    queremos que los navegadores descargen nuestros ficheros desde el
    CDN, deberemos modificar estas direcciones para que apunten a
    nuestros servidores del CDN.
  </p>

  <p>
    Probablemente te hayas asustado al leer lo anterior mencionado, y te
    preguntes «entonces, ¿tengo que cambiar todas las direcciones de mis
    imágenes etc?». En un principio, si, pero si utilizas WordPress no
    hay porque preocuparse pues, como para la grandísima mayoría de los
    casos, existen plugins que se encargarán de esta tarea de forma
    rápida y sencilla.
  </p>

  <h2>Modos de funcionamiento de un CDN</h2>

  <p>
    En esta ocasión, nos enfocaremos principalmente en como hacerlo en
    WordPress. Para ello contamos con dos alternativas sencillas y
    rápidas:
  </p>

  <h2>Utilizando un plugin CDN para WordPress</h2>

  <p>
    Como mencionabamos anteriormente, podremos usar un plugin para
    realizar esta acción. Normalmente, el plugin es proporcionado por el
    mismo proveedor del CDN, aunque pueden existir casos en los que esto
    no ocurra.
  </p>

  <p>
    Su funcionamiento es sencillo: modificar las direcciones web que se
    encuentren en el código HTML de las páginas para hacer que los
    ficheros apunten a la copia que tenemos en nuestro CDN.
  </p>

  <p>
    En general, tan solo tendremos que instalar y configurar el plugin,
    una vez realizada esta acción, el proceso para cambiar las
    direcciones web es totalmente automático y transparente.
  </p>

  <h2>Utilizando el Servidor CDN como Proxy</h2>

  <p>
    En este caso, las direcciones web no varían, sino que son los
    servidores los que atienden directamente a estas direcciones, como
    si fueran el servidor web original.
  </p>

  <p>
    De esta forma, cuando al servidor le solicitan un recurso, si tiene
    copia, la entregará al momento, pero en el caso de que no disponga
    de copia, redireccionará la petición al servidor web para que este
    le atienda.
  </p>

  <p>
    Utilizando esta modalidad, nuestro servidor web siempre estará
    detrás del CDN, brindando así una capa más de seguridad, y no solo
    eso, sino que también al disponer de la posibilidad de almacenar una
    copia estática de nuestra web, se comporta como un servidor de
    caché.
  </p>

  <h2>¿Para qué sirve un CDN?</h2>

  <p>
    Bien, ya sabemos que es un CDN y como funciona, ¿no es así? Así que,
    ¿qué os parece si vemos que servicios es capaz de entregarnos un
    CDN?
  </p>

  <h2>Almacenamiento y entrega de recursos estáticos</h2>

  <p>
    Su principal y casi su razón de ser es almacenar y entregar recursos
    estáticos tales como imágenes y ficheros CSS y JS.
  </p>

  <p>
    Como hemos comentado ya varias veces a lo largo del artículo: al
    disponer de una copia local de los recursos estáticos liberaremos al
    servidor web de tener que enviar los recursos cuando accedan a
    nuestra página.
  </p>

  <h2>Caché de los recursos dinámicos</h2>

  <p>
    Un recurso dinámico es aquel que es generado cada vez que se visita
    el sitio web.
  </p>

  <p>
    Un ejemplo sería las páginas de WordPress, las cuales son generadas
    cada vez que un usuario solicita una de ellas. Esto provoca que el
    rendimiento del servidor web se vea afectado si la cantidad de
    visitantes es elevada al tener que generar cada una desde cero.
  </p>

  <p>
    Para evitarlo, podemos configurar un CDN en WordPress para que
    almacene una copia estática de las páginas dinámicas y actúe como
    caché.
  </p>

  <p>
    Tened en cuenta que, no todos los CDN para WordPress ofrecen este
    tipo de servicio, y que, en la gran mayoría de los casos, esta
    opción suele ser de pago.
  </p>

  <h2>Respuesta rápida sin importar el país</h2>

  <p>
    Normalmente, cuando un usuario envía una petición a nuestro servidor
    web, la enviará a un único servidor que está alojado en un lugar en
    concreto del mundo, siendo la distancia entre el cliente y el
    servidor uno de los principales determinantes de la velocidad de
    carga y el principal en cuanto al tiempo de respuesta.
  </p>

  <p>
    Sin embargo, al utilizar un CDN y al contar con varios servidores al
    rededor del mundo, será el servidor más cercano siempre el que
    responderá la petición, garantizando de esta forma que los tiempos
    de respuesta y por ende de carga sean los más optimos posibles.
  </p>

  <h2>Optimización de los recursos del servidor web</h2>

  <p>
    ¿Recordáis lo que comentabamos al principio del artículo sobre como
    era el proceso de generación y descarga de una web?
  </p>

  <p>
    Pues ahora, al tener los recursos estáticos alojados en nuestro CDN,
    el servidor web podrá ser libre de estas tareas y así disponer de
    más potencia disponible para realizar otro tipo de trabajos, como
    por ejemplo, responder una mayor cantidad de peticiones.
  </p>

  <h2>Capa de protección contra ataques extra</h2>

  <p>
    Sobretodo contra ataques de Denegación de Servicio, los cuales
    consisten en realizar un alto número de accesos de forma simultánea
    al servidor con el objetivo de saturarlo y que así no pueda atender
    a las peticiones de los usuarios legítimos.
  </p>

  <p>
    Normalmente, los servidores CDN disponen de mecanismos para detectar
    a tiempo este tipo de ataques y así poder contrarrestrarlos.
  </p>

  <p>
    Sin embargo, y dicho esto, no se debe de utilizar un CDN como
    herramienta principal para protegernos de este tipo de ataques,
    puesto que, nuestro servidor web seguirá estando accesible y los
    atacantes podrán dar con el.
  </p>

  <h2>¿Solo puedo utilizar un CDN en WordPress?</h2>

  <p>
    Que WordPress sea el gestor de contenidos mas utilizado no significa
    que el uso de un CDN sea exclusivo de este, aunque, si que es
    verdad, que los proveedores de este tipo de servicio suelen dedicar
    más esfuerzos en ofrecer soluciones que se adapten a las webs
    creadas con WordPress, además de plugins para integrar sus
    servidores con el nuestro.
  </p>

  <p>
    Sin embargo, si no usas WordPress o tu proveedor CDN no dispone de
    algún plugin, siempre puedes contactar con el servicio técnico y
    preguntar si existe una alternativa que sea viable y de fácil
    implantación.
  </p>

  <h2>¿Cómo puedo instalar un CDN en WordPress?</h2>

  <p>
    Debido a que existen un sin fin de gestores de contenido, en esta
    ocasión hablaremos únicamente de como realizar la instalación de un
    CDN únicamente en WordPress.
  </p>

  <p>
    En general, este proceso no presenta muchas dificultades gracias a
    los plugins, aunque cada proveedor es un mundo, y cada plugin tendrá
    sus propias peculiaridades a la hora de ser instalado y configurado.
  </p>

  <p>
    A continuación, veremos las diferentes formas que existen para
    instalar un CDN en WordPress:
  </p>
  <h2>Redireccionar las URLs de los recursos</h2>

  <p>
    Para esta modalidad y de forma general, deberemos de realizar dos
    pasos, aunque estos pueden variar según el proveedor:
  </p>

  <p>
    Obtener una cuenta en una plataforma CDN y activar el sitio web que
    utilizará el CDN. Normalmente, a este apartado se le asgina el
    nombre de «zona», aunque puede variar. A esta «zona» se le asociará
    una URL.
  </p>
  <p>
    Instalar el plugin del CDN y configurarlo. Para ello bastará con
    añadir la URL de la «zona» y aplicar los cambios. Si todo ha salido
    bien, el plugin se encargará de redireccionar todos los recursos al
    CDN.
  </p>

  <p>
    Un ejemplo que trabaje bajo esta modalidad sería AWS CloudFront el
    cual ofrece un periodo gratuito (durante un año), aunque pasado
    este, nos pedirá que nos suscribamos a algún plan de pago de los que
    dispone.
  </p>

  <p>
    Otro ejemplo sería KeyCDN, el cual no ofrece periodo de prueba
    gratuito como en el caso anterior, pero si precios muy competentes y
    unas buenas características.
  </p>

  <h2>Servidor CDN como Proxy</h2>

  <p>
    Para utilizar esta modalidad, deberemos de realizar, al menos, los
    siguientes dos pasos:
  </p>`,
  },
  {
    id: 5,
    fecha: "29-05-2021",
    titulo: "4 Errores fundamentales para la falta de tráfico",
    img: "/datos/4 Errores fundamentales para la falta de tráfico.png",
    contenido: `<p>
    Existen varias razones por las cuales tu página web no recibe
    suficiente tráfico. Después de 10 años trabajando con desarrollo y
    marketing digital, identifico los siguientes errores como los más
    comunes:
  </p>
  <h2>1. No tienen una estrategia de tráfico</h2>
  <p>
    Es triste ver una página web bien diseñada, optimizada y
    personalizada pero que nadie visita. Los dueños se enfocaron en la
    parte visual y no en una estrategia de mercadeo que atraiga tráfico
    cada mes.
  </p>
  <p>
    Por el otro lado, conozco varios sitios web con un diseño estándar y
    sencillo pero que sus números de visitas y ventas son sorprendentes.
    Los fundadores saben que su página web es sólo una herramienta para
    su negocio y que realmente el éxito está en promoverla con una
    estrategia.
  </p>
  <h2>2. Prueban un canal digital diferente cada mes</h2>
  <p>
    A todos nos sucede. Nos vemos atraídos por un artículo o video en
    YouTube que habla sobre una nueva plataforma, red social o
    estrategia digital que promete miles de visitantes al mes.
  </p>
  <p>
    Lo intentamos unos días pero no logramos los resultados esperados.
    Luego cambiamos toda nuestra estrategia a una plataforma o red
    social aún más nueva y el proceso se repite una y otra vez. Nunca
    hay una planeación a largo plazo y perdemos tiempo buscando “la
    ficha de oro”.
  </p>
  <h2>3. No generan contenido</h2>
  <p>
    Varios de mis clientes piensan que la generación de contenido sólo
    está relacionada con redes sociales. Otros creen que este proceso es
    dispendioso y costoso. Sin embargo, es poco probable que una página
    web estática y sin nuevo contenido aumente su tráfico en el tiempo.
  </p>
  <p>
    No se trata del volumen de contenido generado, sino de su calidad y
    consistencia. Más adelante en el artículo aprenderás a simplificar
    este proceso. Lo importante es saber que una página web no “se
    mantiene sola” y requiere insumos como cualquier otro recurso para
    un negocio.
  </p>
  <h2>4. No construyen una lista de suscriptores</h2>
  <p>
    En mi opinión, es bastante más valioso tener 100 personas en tu
    lista de suscriptores que 1.000 seguidores en redes sociales. Sin
    embargo, gran cantidad de empresas se dedican a capturar Likes y
    seguidores que nunca van a comprar.
  </p>
  <p>
    La mayoría de los visitantes a una página web no estarán listos para
    contactarte o comprarte. Sin embargo, todos tienen interés en tu
    servicio o tema principal (por alguna razón están visitando tu sitio
    web). Dejarlos ir sin intentar capturar sus datos significa que
    deberás empezar cada mes con cero tráfico y contactos.
  </p>
  <h2>4 Etapas para aumentar el tráfico</h2>
  <p>
    Existen decenas de estrategias de marketing para aumentar el tráfico
    digital de una página web. Sin embargo, te presentaré una
    metodología que le ha servido a mis clientes y a mis proyectos
    personales.
  </p>
  <h2>1. Planea una "máquina" de tráfico</h2>
  <p>
    Cuando me refiero a una “máquina”, no te imagines un proceso
    complejo o avanzado. Todo lo contrario. Mi recomendación es empezar
    con 2 canales digitales que puedas actualizar de forma constante.
  </p>
  <p>
    Puedes escoger redes sociales, SEO, email marketing, offline
    marketing, pauta, podcasts o cualquier otro canal donde consideres
    que puedes llegar a tu audiencia objetivo. Lo importante es escoger
    POCOS canales, los formatos de contenidos que deberás generar
    (artículos, videos, audios, etc) y los temas que vas a difundir.
  </p>
  <p>
    Aprovecha también a planear cómo vas a capturar los datos de tus
    visitantes para evitar tener que estar detrás de ellos cada mes.
    Puedes ofrecer ebooks, contenidos exclusivos, plantillas, coaching,
    eventos VIP o cualquier otro beneficio a cambio de sus datos. Ya
    sabrás cómo vamos a utilizar esta base de datos en tu estrategia.
  </p>
  <p>
    Hoy en día existen varias herramientas de email marketing con las
    que podrás crear formularios de registro. Escoge una de ellas y
    continua con el siguiente paso.
  </p>
  <h2>2. Crea un calendario de contenidos</h2>
  <p>
    Al principio tendrás muchos temas en mente que vas a querer
    compartir con tu audiencia. Sin embargo, estos temas serán cada vez
    más escasos y no tendrás tiempo de improvisar cada vez que vayas a
    generar nuevo contenido.
  </p>
  <p>
    Por lo tanto, es una excelente práctica tener un calendario de
    fechas y contenidos que vas a publicar para los siguientes 4 meses
    como mínimo. Este calendario le ayudará a tu equipo a anticipar los
    siguientes meses y estar siempre un paso adelante.
  </p>
  <h2>3. Implementa tu estrategia, luego aprende y ajusta</h2>
  <p>
    Muy posiblemente tu estrategia inicial no va a tener grandes
    resultados al principio. Esto sucede hasta en las empresas más
    grandes que conozco. Por eso, sugiero mantener tu estrategia durante
    4 meses para concluir y anotar lecciones al finalizar el periodo.
  </p>
  <p>
    Estos meses serán suficientes para aprender sobre los canales de
    difusión, la frecuencia de publicación y el tipo de contenidos que
    escogiste. Siempre podrás ajustar tu estrategia y volver a concluir
    en los siguientes meses. Sin embargo, te recomiendo doblar tus
    esfuerzos y recursos a las actividades que estén dando resultados y
    evitar probar nuevas estrategias o plataformas simplemente porque
    están de moda.
  </p>
  <h2>4. Fomenta el registro de suscriptores y aprovéchalos</h2>
  <p>
    Si en el primer paso planeaste la captura de datos de tus visitantes
    para generar una lista de suscriptores, ya tienes una gran ventaja.
    Estas personas han mostrado interés en tu producto, servicio o tema
    y es más fácil volver a contactarlos.
  </p>
  <p>
    Envía campañas masivas con información valiosa y novedades del
    sector. Puedes aprovechar para ofrecer tus productos o servicios
    pero ten cuidado en que no se convierta en sólo una relación
    comercial. Tu objetivo es posicionarte como experto en el tema para
    ser su primera opción cuando estén listos para comprar.
  </p>
  <h2>Conclusión</h2>
  <hr />
  <p>
    Es triste ver tantas páginas web que reciben poco o nada de tráfico.
    Considero que el mayor error se encuentra en que la mayoría de las
    empresas esperan obtener visitantes orgánicamente sin ninguna
    estrategia.
  </p>
  <p>
    Sin embargo, en este artículo vimos cómo puedes implementar una
    metodología simple y poderosa para aumentar tu tráfico y aprender en
    el proceso. Es tu trabajo probar e identificar los canales y
    contenidos que empiezan a tener tracción con tu audiencia. Todo esto
    evitando caer en la tentación de probar una nueva red social,
    plataforma o estrategia que esté de moda.
  </p>
  <p>
    El objetivo no sólo es aumentar el tráfico de tu sitio web, sino
    mejorar la calidad de los visitantes. Notarás que no necesitas gran
    cantidad de visitas para lograr tus metas profesionales o personales
    y que los resultados en internet están en la consistencia y calidad
    de tu contenido.
  </p>
  <p>
    Piensa y planea en el largo plazo. Si lo haces, estarás por encima
    del 90% de todas las páginas web que se publican cada día.
  </p>`,
  },
  {
    id: 6,
    fecha: "07-06-2021",
    titulo: "3D y CSS",
    img: "/datos/3D y CSS.png",
    contenido: `<p>
    Durante mucho tiempo, el 3D ha sido exclusivo de las aplicaciones de
    escritorio. Recientemente, con la introducción de teléfonos
    inteligentes avanzados que tienen acceso a la aceleración de GPU
    nativa, hemos comenzado a ver el uso de 3D en casi todas partes.
  </p>

  <p>
    Comúnmente, 3D se usa principalmente como un dispositivo para juegos
    o algunas interfaces de usuario avanzadas. No fue hasta la
    introducción de las transformaciones de perspectiva en WPF y
    Silverlight que un modelo adecuado para aplicar efectos 3D a los
    elementos de la interfaz de usuario se convirtió en una solución
    práctica para los desarrolladores de aplicaciones (después de todo,
    el 3D no es exactamente fácil).
  </p>

  <p>
    El modelo de transformación 3D de CSS se presentó como un borrador
    de especificación en marzo de 2009 para permitir a los
    desarrolladores web crear interfaces de usuario interesantes y
    convincentes que aprovechan el 3D al permitir que los autores de
    aplicaciones apliquen transformaciones de perspectiva 3D a cualquier
    elemento DOM visual.
  </p>

  <p>
    El borrador de trabajo de transformación 3D de CSS es una extensión
    lógica del modelo de transformación 2D de CSS , que presenta algunas
    propiedades adicionales, que incluyen: perspectivas, rotaciones y
    transformaciones en un espacio 3D.
  </p>

  <p>
    Nunca antes habíamos podido construir interfaces 3D tan fácilmente.
    Estas tecnologías han reducido la barrera de entrada. Ya no es
    necesario ser un genio de las matemáticas para construir elementos
    3D.
  </p>

  <p>
    Debe tenerse en cuenta que el módulo CSS 3D está diseñado para
    ayudar a los desarrolladores a crear aplicaciones ricas y
    visualmente interesantes, no está diseñado para permitirle crear
    mundos 3D inmersivos.
  </p>

  <h2>Compatibilidad con navegador y aceleración de hardware #</h2>

  <p>
    A partir de octubre de 2013, todos los principales navegadores
    admiten el módulo CSS 3D . La información importante a recordar es
    que aunque un navegador puede "soportar" 3D, es posible que no pueda
    renderizar 3D debido a las limitaciones del hardware y del
    controlador. Las escenas 3D basadas en DOM pueden ser muy costosas
    desde el punto de vista computacional y, por lo tanto, los
    proveedores de navegadores han decidido que, en lugar de ralentizar
    los navegadores con una solución de representación de software puro,
    aprovecharán la GPU, que podría no estar disponible en todas las
    plataformas.
  </p>

  <h2>Detección de características</h2>

  <p>
    ¿Qué pasa con la detección de características? ¡Esperaba que no
    fueras a preguntar! Los desarrolladores han estado utilizando
    herramientas como Modernizr para detectar la compatibilidad con
    funciones y capacidades específicas del navegador. Si bien es
    posible detectar la presencia de soporte para transformaciones 3D,
    no es posible detectar la presencia de aceleración de hardware, y la
    aceleración de hardware es el ingrediente clave.
  </p>

  <h2>Muestra básica</h2>

  <p>
    No hay nada mejor que saltar directamente. En esta muestra,
    aplicaremos un conjunto básico de rotaciones de un elemento DOM
    arbitrario.
  </p>

  <p>
    Comenzamos definiendo una perspectiva sobre el elemento raíz.
    perspectiva
  </p>
  <pre>
    
    < div style="-webkit-perspective: 800; perspective: 800; margin: 100px 0 0 50px">
  
  </pre>
  <p>
    La perspectiva es importante porque define cómo se representa la
    profundidad de la escena 3D, los valores de 1 a 1000 producirán un
    efecto muy pronunciado y los valores superiores a 1000 menos. Luego
    agregamos un iframe y aplicamos una rotación de 30 grados alrededor
    de los ejes Z e Y
  </p>

  <pre>
    
    < ${"iframe"}
    src="http://www.html5rocks.com/"
    style="-webkit-transform: rotate3d(0, 1, 1, 30deg)"></>
  
  </pre>

  <p>
    ¡BAM! Eso es todo, el elemento es completamente interactivo y, en
    todos los aspectos, es un elemento DOM completo (excepto que ahora
    se ve aún más genial). Si su navegador no admite transformaciones
    3D, no pasará nada. Solo verá un iframe simple sin rotación
    aplicada. Si su navegador admite transformaciones 3D pero sin
    aceleración de hardware, puede parecer un poco extraño.
  </p>

  <h2>Animando</h2>

  <p>
    Lo que me encanta de las transformaciones 3D de CSS3 es que se
    relaciona muy bien con el módulo de transición de CSS. Las
    animaciones y las transiciones son fáciles de definir en CSS, y
    aplicarlas a 3D no es una excepción.
  </p>

  <p>
    Animar elementos que tienen aplicada una perspectiva 3D es fácil.
    Simplemente configure el estilo de "transición" para que sea
    "transformar", adjunte una duración y una función de animación. A
    partir de ese momento, se animará cualquier cambio en el estilo
    "transformar".
  </p>

  <p>
    Hemos rediseñado los ejemplos anteriores para usar estilos de
    documento, en lugar de estilos en línea. No solo aclara el ejemplo,
    sino que permite que la muestra aproveche el :hoverpseudoselector.
    Al usar el :hoverselector, las transiciones se pueden iniciar
    simplemente moviendo el mouse sobre el elemento. ¡Impresionante!
  </p>
  <h2>Resumen</h2>

  <p>
    Este fue solo un vistazo rápido a algunos de los geniales efectos
    que se pueden aplicar a cualquier elemento DOM visible usando
    transformaciones CSS 3D. Todavía hay muchas cosas que se pueden
    hacer que no se han cubierto en este tutorial.
  </p>`,
  },
];

const frontend = [
  {
    id: 1,
    titulo: "Darksouls",
    img: "/portafolio/frontend/page_darksouls.png",
    descripcion:
      "Tiene la tematica y imformacion de este video juego como jefes y dlc del mismo.",
    gitHub: "https://github.com/ronny-minda/Page_Dark_Souls",
    disponible: "https://www.ronnyminda.ga/Page_Dark_Souls/",
    detalles: "/portafolio/Darksouls",
    tecnologias: ["REACT", "BOOTSTRAP"],
  },
  {
    id: 2,
    titulo: "Formulario",
    img: "/portafolio/frontend/formulario.png",
    descripcion:
      "La recreacion de un formulario que utiliza formik para la gestion de formulario y usar herrramientas mas sensillas en aplicaciones.",
    gitHub: "https://github.com/ronny-minda/Formulario",
    disponible: "https://www.ronnyminda.ga/Formulario/",
    detalles: "/portafolio/Formulario",
    tecnologias: ["REACT", "FORMIK"],
  },
  {
    id: 3,
    titulo: "Pagina De Bodas",
    img: "/portafolio/frontend/page_boda.png",
    descripcion:
      "Pagina sobre servicios de bodas, contacto, blog y la persona que brinda estos servicios de bodas(uso de formik).",
    gitHub: "https://github.com/ronny-minda/Pagina_servicio_boda",
    disponible: "https://www.ronnyminda.ga/Pagina_servicio_boda/",
    detalles: "/portafolio/Pagina De Bodas",
    tecnologias: ["REACT", "FORMIK"],
  },
  {
    id: 4,
    titulo: "Anterior Portafolio",
    img: "/portafolio/frontend/pagePortafolio.png",
    descripcion: "Mi anterior pagina web o protafolio.",
    gitHub: "https://github.com/ronny-minda/Anterior_pagina_portafolio/",
    disponible: "nada",
    detalles: "/portafolio/Anterior Portafolio",
    tecnologias: ["REACT", "SASS"],
  },
  {
    id: 5,
    titulo: "Nutricionista",
    img: "/portafolio/frontend/page_Nutricionista.png",
    descripcion:
      "Pagina sobre servicios de nutricion contacto blog y la persona que brinda estos servicios.",
    gitHub: "https://github.com/ronny-minda/Nutricionista",
    disponible: "https://www.ronnyminda.ga/Nutricionista/",
    detalles: "/portafolio/Nutricionista",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 6,
    titulo: "Tarjeta",
    img: "/portafolio/frontend/tarjeta.png",
    descripcion:
      "Tarjeta con Ciertos datos(implementando Node y subido a Heroku).",
    gitHub: "https://github.com/ronny-minda/Tarjeta",
    disponible: "https://node-express-tarjeta.herokuapp.com/",
    detalles: "/portafolio/Tarjeta",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT", "NODE"],
  },
  {
    id: 7,
    titulo: "Pagina",
    img: "/portafolio/frontend/page_antes.png",
    descripcion:
      "Mi pagina Web actual o portafolio en la que muestro la payoria de cosas que hago para la Web(uso de styled components).",
    gitHub: "https://github.com/ronny-minda/ronny-minda.github.io",
    disponible: "https://www.ronnyminda.ga/myweb2/",
    detalles: "/portafolio/Pagina",
    tecnologias: ["react", "bootstrap"],
  },
];

const backend = [
  {
    id: 1,
    titulo: "Backend tienda de ropa",
    tecnologias: ["NODE", "EXPRESS", "JSON WEB TOKEN", "BCRYPT"],
    gitHub: "https://github.com/ronny-minda/TIENDA-ROPA-BACKEND",
  },
  {
    id: 2,
    titulo: "Backend Envio De Correo",
    tecnologias: ["NODE", "NODEMAILER"],
    gitHub: "https://github.com/ronny-minda/Api_rest_correo_nodemailer",
  },
  {
    id: 3,
    titulo: "Api Simple Node",
    tecnologias: ["NODE"],
    gitHub: "https://github.com/ronny-minda/Api_Simple_Node",
  },
];

export const DatosContext = createContext();

export const useDatos = () => {
  const context = useContext(DatosContext);
  return context;
};

export const DatosProvider = ({ children }) => {
  // const [loger, setLoger] = useState(true);

  const halo = (name) => `hola {name}`;
  // const loader = () => setLoger(false);

  return (
    <DatosContext.Provider value={{ datos, halo, frontend, backend }}>
      {children}
    </DatosContext.Provider>
  );
};
