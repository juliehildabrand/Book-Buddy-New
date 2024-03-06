import { Link, useParams, useNavigate } from 'react-router-dom';

const Books = ({ books })=> {
  const params = useParams();
  const navigate = useNavigate();
  console.log(navigate);
  return (

   <>
      <h2>FULL LIBRARY</h2>
      <input placeholder="search books..." value={ params.term || "" } onChange={ ev => navigate(ev.target.value ? `/books/search/${ev.target.value}` : '/books')}/>

      <ul>
        {
          books.filter(book => !params.term || book.title.includes(params.term)).map((book) => {
            return (
              <li key={ book.id } id="single-card">
                <Link to={`/books/${book.id}`}>
                <h2>{ book.title }</h2>
                <h3>{book.author}</h3>
                <img src={book.coverimage} alt={`${book.img}'s image`} width="300" height="300" />
               <br />
               <button onClick={() => navigate(`/books/${book.id}`)}>DETAILS</button>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </>
  );
};

export default Books;