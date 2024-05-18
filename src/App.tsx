import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'src/shared/routes/routes';
import { Layout } from 'src/page/layout';
import { Catalog } from './page';

const App = (): JSX.Element => {

  const router = createBrowserRouter([
    {
      path: AppRoutes.Catalog,
      element: <Layout />,
      children: [
        {
          path: AppRoutes.Catalog,
          element: <Catalog />
        }
      ]
    }
  ])

  return (
    <RouterProvider router ={router} />
  )
}

export default App
