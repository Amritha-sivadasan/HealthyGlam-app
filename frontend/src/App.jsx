import "./App.css";
import AddPosts from "./Pages/AddPosts";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import SinglePageView from "./Pages/SinglePageView";
import Headers from "./components/Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Headers />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/view" element={<SinglePageView />} />
          <Route path="/addPost" element={<AddPosts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
