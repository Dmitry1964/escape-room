import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { Layout } from '../pages/layout';
import { Catalog } from 'src/pages/catalog';
import QuestPage from 'src/pages/quest-page/ui/quest-page';


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
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
