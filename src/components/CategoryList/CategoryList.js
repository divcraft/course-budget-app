import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

const CategoryList = ({ budgetCategories, allCategories }) => {

   const groupedCategories = groupBy(
      budgetCategories,
      item => allCategories.find(category => category.id === item.categoryId).parentCategory.name
   )

   console.log(budgetCategories)
   console.log(allCategories)
   console.log('grouped:', groupedCategories)

   return (
      <div>CategoryList</div>
   );
}

export default connect(state => {
   const { budgetCategories } = state.budget
   const { allCategories } = state.common
   return {
      budgetCategories,
      allCategories
   }
})(CategoryList)