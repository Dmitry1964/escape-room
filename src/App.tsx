import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'src/shared/routes/routes';
import { Layout } from 'src/page/layout';

const App = (): JSX.Element => {

  const router = createBrowserRouter([
    {
      path: AppRoutes.Catalog,
      element: <Layout />
    }
  ])

  return (
    <RouterProvider router ={router} />
  )
}

export default App
