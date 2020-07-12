import React, { useState } from 'react';

const DropDownList = ({ parentName, parentCategories }) => {
   const [isActive, setIsActive] = useState(false)
   const categoryList = parentCategories.map(category => <div key={category.id} >{category.name}</div>)
   return (
      <div>
         <button onClick={() => setIsActive(!isActive)}>{parentName}</button>
         {isActive && (
            <div>{categoryList}</div>
         )}
      </div>
   );
}

export default DropDownList;