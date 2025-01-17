import { createBrowserRouter } from "react-router-dom";

import Layout from "../../pages/LayoutPage/Layout";
import HomePageLazy from "../../pages/HomePage/HomePage.lazy";
import FavouritePageLazy from "../../pages/FavouritePage/FavouritePage.lazy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePageLazy />,
      },
      {
        path: "/favourite",
        element: <FavouritePageLazy />,
      },
    ],
  },
]);

export default router;
