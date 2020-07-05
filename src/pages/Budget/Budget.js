import React, { useEffect, useMemo } from 'react';

import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories, fetchAllCategories } from 'store/actions';

import { FlexContainer } from './Budget.css'

import LoadingIndicator from 'components/LoadingIndicator'

const Budget = ({ budget, budgetCategories, allCategories, budgetLoader, commonLoader,
   fetchBudget, fetchBudgetedCategories, fetchAllCategories }) => {
   useEffect(() => {
      fetchBudget(1)
      fetchBudgetedCategories(1)
      fetchAllCategories()
   }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories])
   const isBudgetLoaded = useMemo(() => !!budgetLoader && Object.keys(budgetLoader).length === 0, [budgetLoader])
   const isCommonLoaded = useMemo(() => !!commonLoader && Object.keys(commonLoader).length === 0, [commonLoader])
   isBudgetLoaded ? console.log(budget, budgetCategories) : console.log('loading budget...')
   isCommonLoaded ? console.log(allCategories) : console.log('loading allCategories...')
   return (
      <>
         <FlexContainer>
            <section>
               {isBudgetLoaded ? (
                  <>
                     <p>{budget.id}</p>
                     <p>{budget.name}</p>
                     <p>{budget.totalAmount}</p>
                  </>
               ) : (
                     <LoadingIndicator />
                  )}
            </section>
            <section>
               {isCommonLoaded ? (
                  <ul>
                     {allCategories.map(category => (
                        <li key={category.id}>
                           <p>{category.name}</p>
                        </li>
                     ))}
                  </ul>
               ) : (
                     <LoadingIndicator />
                  )}
            </section>
         </FlexContainer>

      </>
   );
}

export default connect(state => {
   const { budget, budgetCategories } = state.budget
   const { allCategories } = state.common
   return {
      budget,
      budgetCategories,
      allCategories,
      budgetLoader: state.budget.loadingState,
      commonLoader: state.common.loadingState
   }
}, {
   fetchBudget,
   fetchBudgetedCategories,
   fetchAllCategories
})(Budget)

