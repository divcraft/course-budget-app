import React, { useState } from 'react';
import ParentCategory from './ParentCategory'
import ChildrenCategory from './ChildrenCategory'

const DropDownList = ({ parentName, categories, amountCategories, transactions }) => {
   const [isActive, setIsActive] = useState(false)
   const childrenCategory = categories.map(category => (
      <ChildrenCategory
         key={category.id}
         name={category.name}
         transactions={transactions}
         itemCategory={amountCategories.find(item => item.id === category.id)}
      />
   ))
   const handleDropDownList = () => setIsActive(!isActive)
   return (
      <div>
         <ParentCategory
            handleDropDownList={handleDropDownList}
            amountCategories={amountCategories}
            transactions={transactions}
            parentName={parentName}
         />
         {isActive && childrenCategory}
      </div>
   );
}

export default DropDownList;