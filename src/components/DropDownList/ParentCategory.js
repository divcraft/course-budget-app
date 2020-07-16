import React, { useMemo } from 'react';
import { formatCurrency } from 'utils';

const ParentCategory = ({ amountCategories, transactions, parentName, handleDropDownList }) => {
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
         <button onClick={handleDropDownList}>{parentName}</button>
         <span className="left-value">{formatCurrency(categoryLeftValue)}</span>
      </div>
   )
}

export default ParentCategory;