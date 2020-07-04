import api from 'store/fetch'
import {
   BUDGET_GET_REQUEST,
   BUDGET_GET_SUCCESS,
   BUDGET_GET_FAILURE,
   BUDGETED_CATEGORIES_GET_REQUEST,
   BUDGETED_CATEGORIES_GET_SUCCESS,
   BUDGETED_CATEGORIES_GET_FAILURE,
} from 'store/constants'

export const fetchBudget = (id) => async (dispatch) => {
   dispatch({
      type: BUDGET_GET_REQUEST
   })
   try {
      const data = await api.fetchBudget(id)
      dispatch({
         type: BUDGET_GET_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({
         type: BUDGET_GET_FAILURE,
      })
   }
}

export const fetchBudgetedCategories = (id) => async (dispatch) => {
   dispatch({
      type: BUDGETED_CATEGORIES_GET_REQUEST
   })
   try {
      const data = await api.fetchBudgetedCategories(id)
      dispatch({
         type: BUDGETED_CATEGORIES_GET_SUCCESS,
         payload: data
      })
   } catch (err) {
      dispatch({
         type: BUDGETED_CATEGORIES_GET_FAILURE
      })
   }
}