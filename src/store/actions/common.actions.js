import api from 'store/fetch'
import {
   ALL_CATEGORIES_GET
} from 'store/constants'

export const fetchAllCategories = () => {
   const promise = api.fetchAllCategories()
   return {
      type: ALL_CATEGORIES_GET,
      promise
   }
}