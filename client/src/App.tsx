import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Teachings from './pages/Teachings';
import Consultations from './pages/Consultations';
import Login from './pages/Login';
import PrayerRequests from './pages/PrayerRequests';
import Events from './pages/Events';
import Bible from './pages/Bible';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/prayers" element={<PrayerRequests />} />
          <Route path="/events" element={<Events />} />
          <Route path="/bible" element={<Bible />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
