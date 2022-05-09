import { BrowserRouter, Routes, Route } from "react-router-dom";
import URL from '../../utils/URL';
import _404 from '../pages/404/_404';
import Accounts from "../pages/accounts/Accounts";
import Login from '../pages/auth/Login';
import AdminHome from '../pages/home/AdminHome';
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={URL.LOGIN} element={<Login />} />

                <Route path={URL.HOME} element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
                <Route path={URL.ACCOUNTS} element={<ProtectedRoute><Accounts /></ProtectedRoute>} />

                <Route path="*" element={<_404 />} />

            </Routes>
        </BrowserRouter>
    )
}
