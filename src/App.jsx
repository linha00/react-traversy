import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Jobpage from "./pages/Jobpage";
import Addjobpage from "./pages/Addjobpage";
import NotFoundPage from "./pages/Notfoundpage";
import Detailpage from "./pages/Detailpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/jobs" element={<Jobpage />} />
      <Route path="/jobs/:id" element={<Detailpage />} />
      <Route path="/add-job" element={<Addjobpage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
