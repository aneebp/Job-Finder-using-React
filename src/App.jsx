import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SeeJobs from "./pages/SeeJobs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route path="/jobs" element={<SeeJobs></SeeJobs>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
