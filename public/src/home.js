function getTotalBooksCount(books) {
  return books.length
}


function getTotalAccountsCount(accounts) {
return accounts.length
}

function getBooksBorrowedCount(books) {
  let counter = 0
  books.forEach((book)=>{
    book.borrows.forEach((item)=>{
      if(item.returned===false){
        counter++;
      }
    })
  })
  return counter
}
/*- An array of book objects.

It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

Even if there is a tie, the array should only contain no more than five objects.*/
function getMostCommonGenres(books) {
  const genres = books.reduce((account, book) => {
    const { genre } = book
    if (!account[genre]) account[genre] = { name: genre, count: 1 }
    else account[genre].count++
    return account
  }, {})
  return Object.values(genres).sort(sortByPopularity).slice(0, 5)
}

// Helper function to help all popularity sorting
function sortByPopularity(item1, item2) {
  return item2.count - item1.count
}
/*- An array of book objects.

It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.

Even if there is a tie, the array should only contain no more than five objects.*/

function getMostPopularBooks(books) {
 return books.map((book) => {
   return {name: book.title, count: book.borrows.length}
  }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)

}



function getMostPopularAuthors(books, authors) {
let finalAnswer = []
  let result = {}
  const authorInfo = authors.forEach((author) => {
    const id = author.id
    const { name: {first, last} } = author
    const authorName = `${first} ${last}`
   
      books.forEach((book) => {
        const borrowed = book.borrows.length
        if (book.authorId === id) {
            if (!finalAnswer.some((authorObj) => authorObj["name"] === authorName)) {
              result = { name: authorName, count: borrowed}
              finalAnswer.push(result)
            } 
              else {
                const foundAuthor = finalAnswer.find((authorObj) => authorObj["name"] === authorName)
                foundAuthor.count += borrowed
              }
            }
        })
    })
  const sorted = finalAnswer.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)
  sorted.length = 5
  return sorted
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
