import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';




function App() {

  const { theme } = useContext(AuthContext);

  return (
    <div className={`App ${theme === 'dark' ? 'bg-dark text-white' : ''}`}>
      <RouterProvider router={routes}></RouterProvider>
    </div>

  );
}

export default App;
