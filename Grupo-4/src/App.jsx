import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
// import UserProfilePage from "./pages/UserProfilePage";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="/user-profile" element={<UserProfilePage />} /> */}
            </Routes>
        </>
    );
}

export default App;
