import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/LayoutPage/Layout";
import HomePageLazy from "@/pages/HomePage/HomePage.lazy";
import FavoritePageLazy from "@/pages/FavouritePage/FavoritePage.lazy";

const router = createBrowserRouter(
  [
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
          element: <FavoritePageLazy />,
        },
      ],
    },
  ],
  {
    basename: "/catPinterest", 
  }
);

export default router;
