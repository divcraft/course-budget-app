import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

import { formatCurrency, formatDate } from 'utils';
import { List, ListItem, InnerListItem } from './TransactionList.css';

const TransactionList = ({ transactions, allCategories }) => {
   let groupedTransactions = groupBy(
      transactions,
      transaction => new Date(transaction.date).getUTCDate()
   )
   groupedTransactions = Object.entries(groupedTransactions)
   groupedTransactions = groupedTransactions.map(([dayOfMonth, tansactionsByDate]) => ({
      dayOfMonth,
      tansactionsByDate
   }))
   return (
      <ul>
         {groupedTransactions.map(transaction => (
            <ListItem key={transaction.dayOfMonth}>
               <List>
                  {transaction.tansactionsByDate.map(item => (
                     <InnerListItem key={item.id}>
                        <span>{item.description}</span>
                        <span>{formatCurrency(item.amount)}</span>
                        <span>{formatDate(item.date)}</span>
                        <span>{(allCategories.find(
                           category => category.id.toString() === item.categoryId.toString()) || {}).name}
                        </span>
                     </InnerListItem>
                  ))}
               </List>
            </ListItem>
         ))}
      </ul>
   );
}

export default connect(state => {
   const { transactions } = state.budget.budget
   const allCategories = state.common.allCategories
   return {
      transactions,
      allCategories
   }
})(TransactionList);