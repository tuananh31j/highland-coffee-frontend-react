import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./layouts/MainLayout";
import { routesClient, routesAdmin } from "./routes";
import NotFound from "./pages/NotFound";
import LayoutAdmin from "./layouts/AdminLayout";
import PrivateRoutes from "./layouts/AdminLayout/privateRoutes";




function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            {routesClient.map((router, index) => {
                  const Page = router.component;
                  return <Route key={index} path={router.path} element={<Page />} />
              })}
          </Route>
           

          <Route path="admin" element={<PrivateRoutes> <LayoutAdmin /> </PrivateRoutes>}>
            {routesAdmin.map((router, index) => {
                  const Page = router.component;
                  return <Route key={index} path={router.path} element={<Page />} />
              })}
          </Route>

          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

       
    </BrowserRouter>
  )
}

export default App
