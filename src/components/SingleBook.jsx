import { useParams } from 'react-router-dom';

const SingleBook = ({ books })=> {
  const params = useParams();
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
    </div>
  );
};

export default SingleBook;

