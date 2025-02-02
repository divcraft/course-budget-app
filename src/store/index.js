import { applyMiddleware, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'
import promiseMiddleware from 'store/middlewares/promise.middleware'

export default function configureStore(preloadedState) {
   const middlewares = [
      // thunkMiddleware,
      promiseMiddleware
   ]
   const middlewareEnhancer = applyMiddleware(...middlewares)

   const enhancers = [middlewareEnhancer]
   const composedEnhancers = composeWithDevTools(...enhancers)

   const store = createStore(rootReducer, preloadedState, composedEnhancers)

   // if (process.env.NODE_ENV !== 'production' && module.hot) {
   //    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
   // }

   return store
}