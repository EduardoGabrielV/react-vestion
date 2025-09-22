import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

//Layouts
import MainLayout from './layouts/MainLayout'; //(Header + Container{children} + Footer)
import AuthLayout from './layouts/AuthLayout';
import PrivateLayout from './layouts/PrivateLayout';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas do site sem necessidade de login */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* Fluxo de autenticação */}
        <Route element={<AuthLayout />}>
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rotas Protegidas, to utilizando o main layout(header, footer, container) como filho do layout privado. */}
        <Route element={<PrivateLayout />}>
          <Route path='/' element={<MainLayout />}>
            <Route path="/perfil" element={<Profile />} />
            <Route path="/carrinho" element={<Cart />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
