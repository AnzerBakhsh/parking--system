import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import CreateLot from './pages/CreateLot';
import ParkVehicle from './pages/ParkVehicle';
import ExitVehicle from './pages/ExitVehicle';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
  {
    path: '/create-lot',
    element: <CreateLot />
  },
  {
    path: '/park-vehicle',
    element: <ParkVehicle/>
  },
  {
    path: '/exit-vehicle',
    element: <ExitVehicle/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  
  );
}

export default App;
