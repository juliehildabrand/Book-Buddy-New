import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SingleBook = ({ books, auth, checkout })=> {
  const params = useParams();
  const navigate = useNavigate();
  const id = +params.id;
  const book = books.find(book => book.id === id);
  if(!book){
    return null;
  }
  return (
    <div>
      <h2>{ book.title }</h2>
      <h3>{book.author}</h3>
      <img src={book.coverimage} alt={`${book.img}'s image`} width="300" height="300" />
      <br />
      <p>{book.description}</p>
      <button onClick={() => navigate("/books")}>RETURN TO LIBRARY</button>
      {
      auth.id ? (
        <button onClick={() => checkout(book)}>CHECKOUT BOOK</button>
      ) : (null)
      }  
    </div>
    
  );
};

export default SingleBook;

