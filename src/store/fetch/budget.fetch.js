export const fetchBudget = async (id = 1) => {
   // const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`)
   const promise = await fetch(`http://localhost:3005/budgets/${id}/?_embed=transactions`)
   const data = await promise.json()
   return data
}

export const fetchBudgetedCategories = async (id = 1) => {
   // const promise = await fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/categories`)
   const promise = await fetch(`http://localhost:3005/budgets/${id}/categories`)
   const data = await promise.json()
   return data
}