function findAuthorById(authors, id) {
  let findAuthor = authors.find((author) => author.id === id)
  return findAuthor
}

function findBookById(books, id) {
  let findBook = books.find((book) => book.id === id)
  return findBook
}

function partitionBooksByBorrowedStatus(books){
const borrowed=books.filter((book)=>book.borrows[0].returned===false);
const returned=books.filter((book)=>book.borrows[0].returned===true);
const result = []
result.push(borrowed,returned)
return result 
}

/*- A book object.
- An array of all account objects.

It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
loop through accounts
book object > book borrows > 10 or less accounts in id array> returned in the accounts objects. 
*/

function getBorrowersForBook(book, accounts) {
  let borrowX = book.borrows.map((borrow) => { 
    let accountX = findAuthorById(accounts, borrow.id)
    accountX.returned = borrow.returned
  return accountX
  }).slice(0, 10)
return borrowX
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
