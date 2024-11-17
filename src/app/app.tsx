import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../shared/routes/routes';
import { Layout } from '../pages/layout';
import { Catalog } from 'src/pages/catalog';
import { QuestPage } from 'src/pages/quest-page';
import { AuthorizationPage } from 'src/pages/authorization-page';
import { ContactsPage } from 'src/pages/contacts-page';
import QuestBookingPage from 'src/pages/quest-booking-page/ui/quest-booking-page';
import { ReservationQuestPage } from 'src/pages/reservation-quests-page';
import { useAppSelector } from 'src/shared/hooks';
import PrivateRoute from './private-route/private-route';


const App = (): JSX.Element => {

  const authStatus = useAppSelector((state) => state.userAuthStatus.authStatus);

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
          element: <QuestPage />
        },

        {
          path: AppRoutes.Login,
          element: <AuthorizationPage />
        },

        {
          path: AppRoutes.Contacts,
          element: <ContactsPage />
        },

        {
          path: AppRoutes.Booking,
          element: <QuestBookingPage />
        },

        {
          path: AppRoutes.Reservation,
          element:
          <PrivateRoute authStatus={authStatus}>
            <ReservationQuestPage/>
          </PrivateRoute>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
