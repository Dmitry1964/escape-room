import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../shared/routes/routes';
import { Layout } from '../pages/layout';
import { Catalog } from 'src/pages/catalog';
import { QuestPage } from 'src/pages/quest-page';
import { AuthorizationPage } from 'src/pages/authorization-page';


const App = (): JSX.Element => {

  const router = createBrowserRouter([
    {
      path: AppRoutes.Catalog,
      element: <Layout />,
      children: [
        {
          path: AppRoutes.Catalog,
          element: <Catalog />
        },

        {
          path: `${AppRoutes.Quest}/:questId`,
          element: <QuestPage/>
        },

        {
          path: AppRoutes.Login,
          element: <AuthorizationPage />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
