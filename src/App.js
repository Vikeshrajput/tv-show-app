import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import Home from './Components/Home';
import ShowDetails from './Components/ShowDetails';
import BookingForm from './Components/BookinForm';

function App() {
  const routes = createBrowserRouter([
    { index: true, element: <Home />},
    { path: '/shows/:id', element: <ShowDetails />},
    { path: '/book/:id', element: <BookingForm />},
  ])
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
