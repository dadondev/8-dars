import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import List, { datas } from "./components/List";
import "./App.css";

const mapFunc = () => {
  let newArr = [];
  datas.forEach((e) => {
    let obj = {
      path: e.name == "kun.uz" ? "/" : e.name,
      element: (
        <div class="flex justify-center h-full px-4 py-16 bg-base-200">
          {e.hero}
        </div>
      ),
    };
    newArr.push(obj);
  });
  return newArr;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="h-full">
          <div class="mockup-browser border bg-slate-200 h-full w-full">
            <List />
            <Outlet></Outlet>
          </div>
        </div>
      </>
    ),
    children: mapFunc(),
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
