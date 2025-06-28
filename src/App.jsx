import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const ProtectedRoute = (allowedRole) => {
    const user = getCurrentUser();

    if (!user || !isLoading || !allowedRole.includes(user.role) ) {
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
          index:true,
          element:<Authredirect/>,
          children:[
            {
              index:true,
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
