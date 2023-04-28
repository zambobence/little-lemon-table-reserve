import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
function App() {
  return (
    <main>
      <Header />
      <Routes> 
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
