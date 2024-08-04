import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { Layout } from "../pages/layout";


const App = () : JSX.Element => {

    const router = createBrowserRouter([
        {
            path: AppRoutes.Catalog,
            element: <Layout/>
        }
    ])
    return (
        <RouterProvider router = {router}/>
    )
}

export default App;