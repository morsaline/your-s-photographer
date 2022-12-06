import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routesss/Routes";

const App = () => {
  return (
    <div className="w-4/5 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
