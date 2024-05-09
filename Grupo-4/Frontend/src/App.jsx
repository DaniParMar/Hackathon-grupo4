import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* <Route path="/user-profile" element={<UserProfilePage />} /> */}
            </Routes>
        </>
    );
}

export default App;
