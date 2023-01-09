import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import EditPassword from '../pages/Profile/editPassword';

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/edit-profile" element={<EditPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
