import {  Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import FAQPage from "./pages/FAQ/FAQSection";


function Routing() {
  return (
     <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
          <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
       <Toaster
      />
      </AuthProvider>

  )
}

export default Routing
