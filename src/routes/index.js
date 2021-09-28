import { Redirect } from "react-router-dom";
import Home from "../application/Home";
import Rank from "../application/Rank";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";

const routes = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to="/recommend" />,
      },
      {
        path: "/rank",
        component: Rank,
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singers",
        component: Singers,
      },
    ],
  },
];

export default routes;
