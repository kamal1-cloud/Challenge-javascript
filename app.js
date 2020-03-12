function addFavoriteBook(bookName){
  var FavoriteBooks = ['Hamlet', 'The Odyssey ', 'Madame Bovary'];
 var book = FavoriteBooks.includes('Great');
  if(book !== true){
     FavoriteBooks.push('Great')
  }else{
    console.log('is already exist')
  }
  function printFavoriteBooks(){
      var num = FavoriteBooks.length;
      console.log('livres favoris:'+' '+ num);
      for(let element of FavoriteBooks ){
             console.log(element)
      }
     
  }printFavoriteBooks()
}addFavoriteBook()






























