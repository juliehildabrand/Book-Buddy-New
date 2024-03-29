import { useState, useEffect} from 'react'
import Books from './components/Books'
import Login from './components/Login'
import SingleBook from './components/SingleBook'
import Account from './components/Account'
import { Link, Routes, Route} from 'react-router-dom'
import Register from './components/Register'

function App() {
  const [books, setBooks] = useState([]);
  const [auth, setAuth] = useState([]);
  const [reservations, setReservations] = useState([]);
  

  useEffect(() => {
    const attemptLoginWithToken = async()=> {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const json = await response.json();
      if(response.ok){
        setAuth(json);
      }
    };
    const token = window.localStorage.getItem('token');
    if(token){
      attemptLoginWithToken();
    }
  }, []);

  //attempting checkout
  




  useEffect(()=> {
    console.log(auth);
    if(auth.id){
      console.log('load the reservations');
    } 
    else {
      console.log('clear the reservations');
    }
  }, [auth]);




  const login = async(credentials)=> {
   let response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json'
    }
   });
   let json = await response.json();
   if(response.ok){
    const token = json.token;
    window.localStorage.setItem('token', token);
    response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    json = await response.json();
    if(response.ok){
      setAuth(json);
    }
   }
   else {
    console.log(json);
   }
  };


  const register = async(credentials)=> {
    let response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
     method: 'POST',
     body: JSON.stringify(credentials),
     headers: {
       'Content-Type': 'application/json'
     }
    });
    let json = await response.json();
    if(response.ok){
     const token = json.token;
     window.localStorage.setItem('token', token);
     response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
       headers: {
         Authorization: `Bearer ${token}`
       }
     });
     json = await response.json();
     if(response.ok){
       setAuth(json);
     }
    }
    else {
     console.log(json);
    }
   };



  const logout = ()=> {
    window.localStorage.removeItem('token');
    setAuth({});
  }



  useEffect(()=> {
    const fetchBooks = async()=> {
    const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    const json = await response.json();
      setBooks(json.books);
  };
    fetchBooks();
  }, []);


                  

  return (
    <>

      <div>
        <h1>BOOK BUDDY</h1>
        <nav>
          <Link to='/books'>BOOKS</Link>
          {
            auth.id ? (
              <Link to='/account'>MY BOOKSHELF</Link>
            ) : (null)
          }
        </nav>

        <div>
          Welcome! { auth.email }
        </div>
        {
          auth.id ? (
            <button onClick={ logout }>LOGOUT</button>
          ) : 
          (
            <>
            <Login login= { login }/>
            <Register register = { register }/>
            </>
          )
        }

      </div>

      <Routes>
        <Route path='/books/:id' element={ <SingleBook books={ books } auth={auth}/> } />
        <Route
        path='/books'
        element={
          <Books books ={ books } />
        }
      />
  
        {
          auth.id ? (
            <Route 
            path='/account'
            element={
              <Account auth={ auth } />
            }
          />
          ) : (null)
        }
      </Routes>

    </>
  )
}

export default App