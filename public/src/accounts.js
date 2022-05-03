
function findAccountById(accounts, id) {
const result = accounts.find((account) => account.id === id)
return result
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountsA, accountsB) => (accountsA.name.last > accountsB.name.last ? 1 : -1))
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
 let result = 0
  for (let id in books){ 
    const borrowedBooks = books[id].borrows.filter((book) => book.id === account.id)
    result += borrowedBooks.length; 
  }
 return result
}

function accountCheckOut(account, books){
   const acctId= account.id
  return books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === acctId))
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = accountCheckOut(account, books)
  booksOut.map(book => book['author'] = authors.find(person => person.id === book.authorId))
  return booksOut
}
  
  
  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
