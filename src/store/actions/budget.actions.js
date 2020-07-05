import api from 'store/fetch'
import {
   BUDGET_GET,
   BUDGETED_CATEGORIES_GET,
} from 'store/constants'

export const fetchBudget = (id) => {
   const promise = api.fetchBudget(id)
   return {
      type: BUDGET_GET,
      promise,
   }
}

export const fetchBudgetedCategories = (id) => {
   const promise = api.fetchBudgetedCategories(id)
   return {
      type: BUDGETED_CATEGORIES_GET,
      promise
   }

}