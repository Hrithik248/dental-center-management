import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import { initializeLocalStorage } from "./utils/localStorageUtils";
import Layout from "./components/Layout";
import AuthRedirect from "./components/AuthRedirect";
import AdminDashboard from "./pages/AdminDashboard";
import Patients from "./pages/Patients";
import EditPatient from "./pages/EditPatient";
import Incidents from "./pages/Incidents";
import EditIncident from "./pages/EditIncident";
import Calendar from "./pages/Calendar";
import PatientDashboard from "./pages/PatientDashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  initializeLocalStorage();

  const isLoading=false;
  const user = useSelector((state) => state.auth.user);

  const ProtectedRoute = (allowedRole) => {

    if (!user && !isLoading) {
      return <Navigate to="/login" />;
    }

    return isLoading?<Loader/>:<Outlet />;
  };

  const router=createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        { 
          path:'/login',
          element:<Login/>
        },
        {
          path:'',
          element:<AuthRedirect/>,
          children:[
            {
              path:'',
              element:<ProtectedRoute/>,
              children:[
                {
                  path: 'admin/dashboard',
                  element: <AdminDashboard />,
                },
                {
                  path: 'admin/patients',
                  element: <Patients />,
                },
                {
                  path: 'admin/patients/add',
                  element: <EditPatient />,
                },
                {
                  path: 'admin/patients/edit/:patientId',
                  element: <EditPatient />,
                },
                {
                  path: 'admin/patients/:patientId/incidents',
                  element: <Incidents />,
                },
                {
                  path: 'admin/patients/:patientId/incidents/add',
                  element: <EditIncident />,
                },
                {
                  path: 'admin/patients/:patientId/incidents/edit/:incidentId',
                  element: <EditIncident />,
                },
                {
                  path: 'admin/calendar',
                  element: <Calendar />,
                },

                // PATIENT ROUTE
                {
                  path: 'patient/dashboard',
                  element: <PatientDashboard />,
                },
              ]
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return <RouterProvider router={router} />;
}

export default App
