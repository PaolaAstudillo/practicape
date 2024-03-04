
// Claro, te explicaré paso a paso cómo el código proporcionado soluciona cada punto del enunciado:

// ### Implementación del Patrón Singleton

// 1. **Singleton**: El patrón Singleton se implementa en la clase `Logger` para asegurar que solo exista una instancia de esta clase en toda la aplicación. Esto es útil para un sistema de logging, ya que quieres que todos los componentes del sistema registren los logs en un mismo lugar.

//    - **Constructor Privado**: El constructor de la clase `Logger` es privado (`private constructor()`). Esto previene que se puedan crear nuevas instancias de la clase usando el operador `new` desde fuera de la clase.

//    - **Método Estático `getInstance`**: Este método estático proporciona un punto de acceso global a la instancia de `Logger`. Si la instancia no existe (`if (!Logger.instance)`), se crea una nueva. Si ya existe, simplemente se devuelve la instancia existente.

// ### Funcionalidad de Registro y Consulta

// 2. **Registro de Acciones**: La clase `Logger` puede registrar acciones. Cada acción se modela como una tupla de tres componentes: usuario (`user`), acción sobre el sistema (`action`) y fecha-hora (`date`).

//    - **Método `logAction`**: Este método toma el `user` y la `action` como argumentos y agrega estos junto con la fecha y hora actual a la lista de logs (`this.logs.push([user, action, date])`).

// 3. **Consulta de Acciones por Usuario**: La clase permite obtener información sobre las acciones llevadas a cabo por un usuario concreto.

//    - **Método `getActionsByUser`**: Este método filtra y devuelve todas las acciones realizadas por un usuario específico.

// 4. **Consulta de Acciones por Tipo**: La clase permite obtener información sobre ciertas acciones, como quién ha llevado a cabo inicios de sesión.

//    - **Método `getActionsByType`**: Este método filtra y devuelve todas las acciones de un tipo específico, como los inicios de sesión.

// 5. **Consulta de Acciones por Rango de Fechas**: La clase también permite obtener información sobre las acciones llevadas a cabo entre dos momentos diferentes.

//    - **Método `getActionsBetweenDates`**: Este método filtra y devuelve todas las acciones que ocurrieron entre dos fechas dadas.

// ### Iterabilidad de la Clase

// 6. **Clase Iterable**: Por último, la clase `Logger` es iterable.

//    - **Implementación del Método `[Symbol.iterator]`**: Al implementar este método, la clase `Logger` se convierte en iterable. Esto significa que se pueden recorrer todos los registros de acción usando un bucle `for...of`.

// ### Resumen

// En resumen, la clase `Logger` implementa el patrón Singleton para centralizar el registro de acciones en un sistema de información. Permite registrar acciones con información detallada y ofrece métodos para consultar estos registros por usuario, tipo de acción y rango de fechas. Además, es iterable, lo que facilita el acceso a todos los registros de acciones.

// ---------7El error que mencionas ocurre porque el iterador debe devolver un objeto que cumpla con la interfaz IteratorResult. Cuando el iterador ha terminado (done: true), TypeScript espera que este objeto también tenga una propiedad value, aunque en este caso no se use. Para solucionar esto, se puede modificar el método [Symbol.iterator] para que cumpla con esta expectativa.


//pruebas