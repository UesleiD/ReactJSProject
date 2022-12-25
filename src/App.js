import { useState } from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import './assets/css/estilos.css'
import Cadastro from "./pages/Cadastro";
import Films from './pages/Films'
import Starships from './pages/Starships'
import Peoples from './pages/Peoples'
import Planets from './pages/Planets'
import Species from './pages/Species'
import Sobre from './pages/Sobre'


function App() {

  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/cadastro",
      element: login ? <Cadastro /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/Films",
      element: Films ? <Films /> : <Menu/>,
    },
    {
      path: "/Peoples",
      element: Peoples ? <Peoples /> : <Menu/>,
    },
    {
      path: "/Planets",
      element: Planets ? <Planets /> : <Menu/>,
    },
    {
      path: "/Species",
      element: Species ? <Species /> : <Menu/>,
    },
    {
      path: "/Starships",
      element: Starships ? <Starships /> : <Menu/>
    },
    {
      path: "/Sobre",
      element: Sobre ? <Sobre /> : <Menu/>
    }

  ]);

return (
  <RouterProvider router={router} />
);
}

export default App;

