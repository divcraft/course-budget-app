import React, { useState } from 'react';

const DropDownListItem = ({ listItems, listItem }) => {
   const [isActive, setIsActive] = useState(false)
   return (
      <div>
         <button onClick={() => setIsActive(!isActive)}>{listItems[0]}</button>
         {isActive && (
            <div>{listItem.budget}</div>
         )}
      </div>
   );
}

const DropDownList = ({ listItems }) => {
   // console.log(listItems)
   const mappedList = listItems[1].map(listItem => (
      <DropDownListItem key={listItem.id} listItems={listItems} listItem={listItem} />
   ))
   return (
      <div>
         {mappedList}
      </div>
   );
}

export default DropDownList;