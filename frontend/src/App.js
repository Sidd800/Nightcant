// import Navbar3 from "./users/components/Navbar3";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./users/pages/login_page/loginPage";
import MenuPage from "./users/pages/menu_page/menuPage";
import Home from "./users/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
]);
function App() {
  return (
    <>
      {/* <Navbar3 /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;