import React, { useState, useMemo } from 'react';

const DropDownList = ({ parentName, categories, amountCategories, transactions }) => {
   const [isActive, setIsActive] = useState(false)
   const categoryList = categories.map(category => <div key={category.id} >{category.name}</div>)
   const categoryLeftValue = useMemo(() => {
      const budgeted = (() => {
         try {
            return amountCategories.reduce((acc, category) => acc + category.budget, 0)
         } catch (err) {
            return null
         }
      })()
      const parentCategoryTransactions = transactions.filter(
         transaction => amountCategories.find(
            category => category.categoryId === transaction.categoryId)
      )
      const spentOnParentCategory = parentCategoryTransactions.reduce((acc, item) => acc + item.amount, 0)
      const totalLeft = budgeted ? (budgeted - spentOnParentCategory).toFixed(2) : null
      return totalLeft
   }, [amountCategories, transactions])
   return (
      <div>
         <div>
            <button onClick={() => setIsActive(!isActive)}>{parentName}</button>
            <span className="left-value">{categoryLeftValue}</span>
         </div>
         {isActive && (
            <div>{categoryList}</div>
         )}
      </div>
   );
}

export default DropDownList;