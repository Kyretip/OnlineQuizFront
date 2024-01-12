import logo from './logo.svg';
import './App.css';
import { HashRouter as MyRouter, Route, Redirect, Routes } from 'react-router-dom';
import Login from './containers/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import { useSelector } from 'react-redux';
import Register from './containers/Register/Register';
import Quiz from './containers/Quiz/Quiz';
import MyProfile from './containers/MyProfile/MyProfile';
import QuizAdd from './containers/QuizAdd/QuizAdd';

function App() {

  const { isLoggedIn } = useSelector((store) => {
    return {
      isLoggedIn: store.isLoggedIn
    }
  });

  return (
    <div className="App">
      <MyRouter>
        <Navbar />
        <Routes>
          {!isLoggedIn && <Route exact path="/login" element={<Login />} />}
          {!isLoggedIn && <Route exact path="/" element={<Login />} />}
          {isLoggedIn && <Route exact path="/home" element={<Home />} />}
          {isLoggedIn && <Route exact path="/quiz/:quizId" element={<Quiz />} />}
          {isLoggedIn && <Route exact path="/my-profile" element={<MyProfile />} />}
          {isLoggedIn && <Route exact path="/quizadd/:lessonId" element={<QuizAdd />} />}
          {!isLoggedIn && <Route exact path="/register" element={<Register />} />}
          
          
        </Routes>
      </MyRouter>
    </div>
  );
}

export default App;
