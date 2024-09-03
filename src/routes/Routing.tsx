import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import Notes from '@/pages/Notes/Notes';
import Quiz from '@/pages/Quiz/Quiz';
import FlashCards from '@/pages/FlashCards/FlashCards';
import TranscribedDetails from '@/pages/TranscribedDetails/TranscribedDetails';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/flashcards" element={<FlashCards />} />
      <Route path="/transcribed-details" element={<TranscribedDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
