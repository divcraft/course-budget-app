import React from 'react';
import { formatCurrency } from 'utils';

const ChildrenCategory = ({ name, transactions, itemCategory }) => {
   const categoryTransactions = transactions.filter(transaction => transaction.categoryId === itemCategory.id)
   const spentOnCategory = categoryTransactions.reduce((acc, transaction) => acc + transaction.amount, 0)
   const totalLeft = itemCategory.budget - spentOnCategory
   return (
      <div>
         {name} - <span className="left-value">{formatCurrency(totalLeft)}</span>
      </div>
   );
}

export default ChildrenCategory;