import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Spiner from "../shared/ui/Spiner/Spiner";

import router from "./router/router";

function App() {
  return (
    <>
      <Suspense fallback={<Spiner />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
