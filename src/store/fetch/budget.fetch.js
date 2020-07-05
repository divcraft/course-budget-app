export const fetchBudget = (id = 1) => {
   // const response = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`)
   const promise = fetch(`http://localhost:3005/budgets/${id}/?_embed=transactions`)
   return promise
}

export const fetchBudgetedCategories = (id = 1) => {
   // const response = await fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/categories`)
   const promise = fetch(`http://localhost:3005/budgets/${id}/categories`)
   return promise
}