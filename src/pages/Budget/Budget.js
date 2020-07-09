import React, { useEffect, useMemo } from 'react';
import CategoryList from 'components/CategoryList'

import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories, fetchAllCategories } from 'store/actions';

import { FlexContainer } from './Budget.css'

import LoadingIndicator from 'components/LoadingIndicator'

const Budget = ({ budgetLoader, commonLoader,
   fetchBudget, fetchBudgetedCategories, fetchAllCategories }) => {
   useEffect(() => {
      fetchBudget(1)
      fetchBudgetedCategories(1)
      fetchAllCategories()
   }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories])
   const isBudgetLoaded = useMemo(() => !!budgetLoader && Object.keys(budgetLoader).length === 0, [budgetLoader])
   const isCommonLoaded = useMemo(() => !!commonLoader && Object.keys(commonLoader).length === 0, [commonLoader])
   const isDataLoaded = useMemo(() => isBudgetLoaded && isCommonLoaded, [isBudgetLoaded, isCommonLoaded])
   return (
      <>

         <FlexContainer>
            <section>
               {isDataLoaded ? <CategoryList /> : <LoadingIndicator />}
            </section>
            <section>
               {isDataLoaded ? <div>Main content</div> : <LoadingIndicator />}
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

