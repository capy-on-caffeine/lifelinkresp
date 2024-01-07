import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import HomeScreen from "./Screens/HomeScreen.tsx";
// import LoginScreen from "./Screens/LoginScreen.tsx";

// import FarmerRegisterScreen from "./Screens/FarmerRegisterScreen.tsx";
// import StoreAdminRegisterScreen from "./Screens/StoreAdminRegisterScreen.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index={true} path="/" element={<HomeScreen />} /> */}
      {/* <Route index={true} path="/login" element={<LoginScreen />} /> */}
      {/* <Route
        index={true}
        path="/register-farmer"
        element={<FarmerRegisterScreen />}
      />
      <Route
        index={true}
        path="/register-store-admin"
        element={<StoreAdminRegisterScreen />}
      /> */}
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);