import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Layout } from "../pages/layout";
import { Catalog } from "src/pages/catalog";


const App = () : JSX.Element => {

    const router = createBrowserRouter([
        {
            path: AppRoutes.Catalog,
            element: <Layout/>,
            children: [
              {
                path: AppRoutes.Catalog,
                element: <Catalog />
              }
            ]
        }
    ])
    return (
        <RouterProvider router = {router}/>
    )
}

export default App;
