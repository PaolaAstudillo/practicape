/**
 * Clase Logger implementada como un Singleton.
 * asegurar que solo exista una instancia de esta 
 * clase en toda la aplicación.
  */
export class Logger {
    private static instance: Logger;
    private logs: Array<[string, string, Date]>;

    /**
     * Constructor privado para prevenir la instanciación directa con new desde fuera.
     */
    private constructor() {
        this.logs = [];
    }

    /**
     * Método estático para obtener la instancia del Singleton.
     * proporciona un punto de acceso global 
     * a la instancia de Logger.
     * @returns La instancia de Logger.
     */
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    /**
     * Registra una acción en el log.
     * @param user El usuario que realiza la acción.
     * @param action La acción realizada.
     */
    public logAction(user: string, action: string): void {
        const date = new Date();
        //añade a la lista de logs
        this.logs.push([user, action, date]);
    }

    /**
     * Obtiene las acciones realizadas por un usuario específico.
     * @param user El usuario cuyas acciones se quieren obtener.
     * @returns Un array de acciones realizadas por el usuario.
     */
    public getActionsByUser(user: string): Array<[string, string, Date]> {
        return this.logs.filter(log => log[0] === user);
    } //this.log contiene todos los registros de acciones de una clase

    /**
     * Obtiene las acciones de un tipo específico.
     * @param actionType El tipo de acción que se quiere obtener.
     * @returns Un array de acciones de un tipo específico.
     */
    public getActionsByType(actionType: string): Array<[string, string, Date]> {
        return this.logs.filter(log => log[1] === actionType);
    }

    /**
     * Obtiene las acciones que ocurrieron entre dos fechas.
     * @param startDate La fecha de inicio.
     * @param endDate La fecha de fin.
     * @returns Un array de acciones entre las dos fechas.
     */
    public getActionsBetweenDates(startDate: Date, endDate: Date): Array<[string, string, Date]> {
        return this.logs.filter(log => log[2] >= startDate && log[2] <= endDate);
    }

    /**
     * Hace la clase iterable sobre los logs.
     * @returns Un iterador para los logs.
     */
    // se pueden recorrer todos los registros de 
    //acción usando un bucle for...of
    [Symbol.iterator](): Iterator<[string, string, Date]> {
        //retornar un objeto que cumpla con la interfaz Iterator. 
        let index = 0;
        //index para llevar un registro de la posición actual en el arreglo logs.
        return {
            //Se retorna un objeto con un método next.
            next: (): IteratorResult<[string, string, Date]> => {
                if (index < this.logs.length) {//aun hay elementos por iterar
                    return { value: this.logs[index++], done: false };
                } else {// index es igual o mayor que = se han iterado todos los elementos.

                    // Cuando el iterador ha terminado, se devuelve 'done: true'
                    // y se proporciona un valor 'undefined' para 'value'
                    return { value: undefined, done: true }; 
                    //undefined porque es opcional en la ultima llamada,cuando done true
                }
            }
        };
    }
}

// Ejemplo de uso de la clase Logger
const logger = Logger.getInstance();//obtener instancia logger
logger.logAction('user1', 'login');
logger.logAction('user2', 'logout');

// Iterar sobre todos los logs
for (const log of logger) { //ietramos sobre la instancia logger
   //obtiene el valor de la siguiente tupla de registro
   // de log en la lista logs de Logger.
    console.log(log);
}
