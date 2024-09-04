import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/AuthPage/Login';
import Register from '@/pages/AuthPage/Register';
import HomePage from '@/pages/HomePage/HomePage';
import NotesPage from '@/pages/NotesPage/NotesPage';
import QuizPage from '@/pages/QuizPage/QuizPage';
import FlashCardsPage from '@/pages/FlashCardsPage/FlashCardsPage';
import TranscribedDetailsPage from '@/pages/TranscribedDetailsPage/TranscribedDetailsPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/flashcards" element={<FlashCardsPage />} />
      <Route path="/transcribed-details" element={<TranscribedDetailsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
