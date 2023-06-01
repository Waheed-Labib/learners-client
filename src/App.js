import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';
import { Spinner } from 'react-bootstrap';




function App() {

  const { loading, theme } = useContext(AuthContext);

  if (loading) return (
    <div className='d-flex justify-content-center align-items-center'>
      <Spinner className='m-5 p-5' animation="border" variant="primary" />
    </div>

  )

  return (
    <div className={`App ${theme === 'dark' ? 'bg-dark text-white' : ''}`}>
      <RouterProvider router={routes}></RouterProvider>
    </div>

  );
}

export default App;
