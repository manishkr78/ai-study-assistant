import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import NotesGenerator from "./pages/NotesGenerator";
import Quiz from "./pages/Quiz";
import Analytics from "./pages/Analytics";
import StudyPlanner from "./pages/StudyPlanner";
import AIMentor from "./pages/AIMentor";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "notes", Component: NotesGenerator },
      { path: "quiz", Component: Quiz },
      { path: "analytics", Component: Analytics },
      { path: "planner", Component: StudyPlanner },
      { path: "mentor", Component: AIMentor },
    ],
  },
]);
