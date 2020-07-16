import React from 'react';
import { useTranslation } from 'react-i18next';
import 'styled-components/macro';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import { formatCurrency } from 'utils';

import DropDownList from 'components/DropDownList'

const CategoryList = ({ budgetCategories, allCategories, budget }) => {
   const { t } = useTranslation();
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
   const amountTaken = budgetCategories.reduce((acc, budgetCategory) => {
      const categoryTransactions = budget.transactions.filter(
         transaction => transaction.categoryId === budgetCategory.id
      )
      const categoryExpenses = categoryTransactions.reduce(
         (acc, transaction) => acc + transaction.amount, 0
      )
      return acc + Math.max(categoryExpenses, budgetCategory.budget)
   }, 0)
   const notBudgetedTransactions = budget.transactions.filter(
      transaction => {
         return !budgetCategories.find(
            budgetCategory => budgetCategory.id === transaction.categoryId
         )
      })
   const notBudgetedExpenses = notBudgetedTransactions.reduce(
      (acc, transaction) => acc + transaction.amount, 0
   )
   const avalibleForRestCategories = budget.totalAmount - amountTaken - notBudgetedExpenses

   return (
      <>
         <div css={`padding: 5px 0;`}>
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
         <div css={`padding-top: 5px;`}>
            {t('Other Categories')} | <span>{formatCurrency(avalibleForRestCategories)}</span>
         </div>
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