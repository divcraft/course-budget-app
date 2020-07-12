import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

import DropDownList from 'components/DropDownList'

const CategoryList = ({ budgetCategories, allCategories }) => {
   let groupedCategories = groupBy(
      budgetCategories,
      item => allCategories.find(category => category.id === item.categoryId).parentCategory.name
   )
   groupedCategories = Object.entries(groupedCategories).map(([parentName, parentCategories]) => ({
      id: parentName,
      parentName,
      parentCategories: parentCategories.map(item => allCategories.find(category => category.id === item.categoryId))
   }))
   return (
      <>
         {groupedCategories.map(category => (
            <DropDownList
               key={category.id}
               parentName={category.parentName}
               parentCategories={category.parentCategories} />
         ))}
      </>
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