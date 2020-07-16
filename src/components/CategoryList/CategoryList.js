import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import { formatCurrency } from 'utils';

import DropDownList from 'components/DropDownList'

const CategoryList = ({ budgetCategories, allCategories, budget }) => {
   let groupedCategories = groupBy(
      budgetCategories,
      item => allCategories.find(category => category.id === item.categoryId).parentCategory.name
   )
   groupedCategories = Object.entries(groupedCategories).map(([parentName, categories]) => {
      return {
         id: parentName,
         parentName,
         amountCategories: categories,
         categories: categories.map(item => allCategories.find(category => category.id === item.categoryId))
      }
   })
   const totalSpent = budget.transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
   const restToSpend = budget.totalAmount - totalSpent
   return (
      <>
         <div>
            {budget.name} | <span>{formatCurrency(restToSpend)}</span>
         </div>
         {groupedCategories.map(category => {
            return (
               <DropDownList
                  key={category.id}
                  parentName={category.parentName}
                  categories={category.categories}
                  amountCategories={category.amountCategories}
                  transactions={budget.transactions}
               />
            )
         }
         )}
      </>
   );
}

export default connect(state => {
   const { budgetCategories, budget } = state.budget
   const { allCategories } = state.common
   return {
      budgetCategories,
      allCategories,
      budget
   }
})(CategoryList)