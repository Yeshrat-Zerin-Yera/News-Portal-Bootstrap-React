import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element: <News></News>
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>
            }

        ]
    }
]);