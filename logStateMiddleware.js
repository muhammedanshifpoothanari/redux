const logStateMiddleware = store => next => action => {
    console.log('State before update:', store.getState());
    const result = next(action);
    console.log('State after update:', store.getState());
    return result;
  };
  export default logStateMiddleware