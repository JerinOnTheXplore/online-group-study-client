import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Assignments from "../pages/Home/Assignments";
import AssignmentCard from "../components/AssignmentCard";
import AllAssignments from "../pages/AllAssignments";


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: "/assignments",
        Component:AllAssignments,
      },
    ]
  },
  {
    path:"/register",
    Component:Register,
  },
  {
    path:"/login",
    Component:Login,
  }
]);

export default router;