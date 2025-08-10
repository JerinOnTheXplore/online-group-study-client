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
import UpdateAssignment from "../pages/Home/UpdateAssignment";
import MySubmission from "../pages/Home/MySubmission";
import PendingAssignment from "../pages/Home/PendingAssignment";
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../pages/Home/Error";
import NutritionQuiz from "../pages/Home/NutritionQuiz";
import DiscussionPage from "../pages/Home/DiscussionPage";
import NutritionNotes from "../pages/Home/NutritionNotes";
import HelpSupport from "../pages/Home/HelpSupport";
import MiniGamesFunFacts from "../pages/Home/MiniGamesFunFacts";
import BlogPosts from "../pages/Home/BlogPosts";



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
        loader: () =>fetch('https://online-group-study-server-delta.vercel.app/assignments').then(res=>res.json()),
      },
      {
        path:"/quiz",
        Component:NutritionQuiz,
      },
      {
        path:"/discussion",
        Component:DiscussionPage,
      },
      {
        path:"/support",
        Component:HelpSupport,
      },
      {
        path:"/notes",
        Component:NutritionNotes,
      },
      {
        path:"/minigames",
        Component:MiniGamesFunFacts,
      },
      {
        path:"/blogs",
        Component:BlogPosts,
      },
      {
        path: "/create-assignment",
        Component: CreateAssignment,
      },
      {
        path: "/my-submissions",
        Component: MySubmission,
      },
      {
        path: "/pending-assignments",
        element:<PrivateRoute>
          <PendingAssignment></PendingAssignment>
        </PrivateRoute>,
      },
      {
        path: "/assignments/update/:id",
        Component:UpdateAssignment,
        loader: ({params})=>fetch(`https://online-group-study-server-delta.vercel.app/assignments/${params.id}`),
      },
      {
        path: "/assignments/:id", 
        loader: ({ params }) =>
          fetch(`https://online-group-study-server-delta.vercel.app/assignments/${params.id}`),
        element: <PrivateRoute>
          <AssignmentDetails></AssignmentDetails>
        </PrivateRoute>,
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
  },
  {
    path:"/*",
    Component:Error
  }
  
]);

export default router;