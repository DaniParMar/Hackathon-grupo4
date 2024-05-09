import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { AddCards } from './pages/AddCards';
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/addCards" element={<AddCards />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
        </>
    );
}

export default App;
