import React, { useEffect } from 'react';

import { FlexContainer } from './Budget.css'

import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories } from 'store/actions';

const Budget = ({ budget, budgetCategories, fetchBudget, fetchBudgetedCategories }) => {
   useEffect(() => {
      fetchBudget(1)
      fetchBudgetedCategories(1)
   }, [fetchBudget, fetchBudgetedCategories])
   return (
      <>
         <FlexContainer>
            <section>section 1</section>
            <section>section 2</section>
         </FlexContainer>
         <div style={{ paddingTop: 20 }}>
            <p>{budget.id}</p>
            <p>{budget.name}</p>
            <p>{budget.totalAmount}</p>
            <ul>
               {budget.transactions && budget.transactions.map((transaction, index) => (
                  <li key={index}>
                     <p>{transaction.description}</p>
                     <p>{transaction.amount}</p>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
}

export default connect(state => {
   const { budget, budgetCategories } = state.budget
   return {
      budget,
      budgetCategories
   }
}, {
   fetchBudget,
   fetchBudgetedCategories
})(Budget)

