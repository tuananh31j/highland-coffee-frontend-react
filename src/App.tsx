import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/client/Home";
import Profile from "./pages/client/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/client/Login";




function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={(
              <>
                <Header />
              <HomePage />
              <Footer />
              </>
            )}></Route>
            <Route path="/profile" element={< Profile />}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
