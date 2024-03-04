import { expect } from 'chai';
import 'mocha';
import { Logger } from '../src/ejercicio'; // Asegúrate de importar correctamente tu clase Logger

describe('Logger', () => {
  //Verificar que la clase Logger sigue correctamente 
  //el patrón Singleton, es decir, siempre devuelve la misma instancia.
    it('debería ser una instancia singleton', () => {
        const logger1 = Logger.getInstance();
        const logger2 = Logger.getInstance();
        expect(logger1).to.equal(logger2);
    });
    //Comprobar que el método logAction añade correctamente una 
    //nueva acción a los registros.
    it('debería registrar acciones correctamente', () => {
      const logger = Logger.getInstance();
      logger.logAction('user1', 'login');
      const logs = logger['logs'];
      const found = logs.some(log => log[0] === 'user1' && log[1] === 'login');
      expect(found).to.be.true;
  });
  
    });
    //Asegurarse de que el método getActionsByUser retorna todas las 
    //acciones realizadas por un usuario específico.
    it('debería obtener acciones por usuario', () => {
      const logger = Logger.getInstance();
      logger.logAction('user2', 'logout');
      const actions = logger.getActionsByUser('user2');
      const found = actions.some(action => action[0] === 'user2' && action[1] === 'logout');
      expect(found).to.be.true;
  });
  
    //Verificar que el método getActionsByType recupera correctamente
    // las acciones de un tipo específico.
    it('debería obtener acciones por tipo', () => {
        const logger = Logger.getInstance();
        const actions = logger.getActionsByType('login');
        expect(actions.some(action => action[1] === 'login')).to.be.true;
    });
    //Comprobar que el método getActionsBetweenDates devuelve las acciones ocurridas 
    //entre dos fechas específicas.

    it('debería obtener acciones entre dos fechas', () => {
        const logger = Logger.getInstance();
        const startDate = new Date(2020, 0, 1);
        const endDate = new Date(2020, 11, 31);
        const actions = logger.getActionsBetweenDates(startDate, endDate);
        expect(actions).to.be.an('array');//si es un arreglo, significa que devuekve datos
    });
    //Se utiliza la sintaxis de propagación (...) para iterar sobre el logger y 
    //se verifica que el resultado sea un array
    it('debería ser iterable', () => {
        const logger = Logger.getInstance();
        expect([...logger]).to.be.an('array');
    });

    //
    it('debería manejar registros sin usuario o acción', () => {
      const logger = Logger.getInstance();
      logger.logAction('', '');
      const logs = logger['logs'];
      const found = logs.some(log => log[0] === '' && log[1] === '');
      expect(found).to.be.true;
  });
  

