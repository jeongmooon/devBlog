import { Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './libs/stlyes/GlobalStyle';
import FooterPage from './pages/FooterPage';
import MainPage from './pages/MainPage';
import NavPage from './pages/NavPage';

function App() {
  return (
    <>
      <NavPage />
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      <FooterPage />
    </>
  );
}

export default App;
