function promiseMiddleware() {
   return function (next) {
      return async function (action) {
         const { promise, type } = action

         if (!promise || typeof promise.then !== 'function') {
            return next(action)
         }

         const REQUEST = `${type}_REQUEST`
         const SUCCESS = `${type}_SUCCESS`
         const FAILURE = `${type}_FAILURE`

         next({
            type: REQUEST
         })

         try {
            const response = await promise
            const data = await response.json()
            next({
               type: SUCCESS,
               payload: data
            })
         } catch (err) {
            next({
               type: FAILURE,
               payload: err
            })
         }
      }
   }
}

export default promiseMiddleware