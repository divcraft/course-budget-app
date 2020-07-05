export const fetchAllCategories = () => {
   const promise = fetch(`http://localhost:3005/categories/?_expand=parentCategory`)
   return promise
}