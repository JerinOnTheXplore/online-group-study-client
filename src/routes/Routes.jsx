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
import AssignmentDetails from "../pages/Home/AssignmentDetails";
import CreateAssignment from "../pages/Home/CreateAssignment";


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
        loader: () =>fetch('http://localhost:3000/assignments').then(res=>res.json()),
      },
      {
        path: "/create-assignment",
        Component: CreateAssignment,
      },
      {
        path: "/assignments/:id", 
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignments/${params.id}`),
        Component:AssignmentDetails,
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