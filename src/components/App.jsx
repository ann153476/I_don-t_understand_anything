import { Component } from "react";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";

class MyBooks extends Component {
  render(){
    return(
      <>
      <h1>sdfghjkl;</h1>
      <MyBooksBlock>
       
      </MyBooksBlock>
      <form>
      <div>
        <label>Book title</label>
        <input placeholder="Book title" required />
      </div>
      <div>
        <label>Book author</label>
        <input placeholder="Book author" required />
       </div>
      <button type="submit">Add book</button>
      </form>
      </>
    )
  }
}

export default MyBooks;