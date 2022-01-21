import { Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './libs/stlyes/GlobalStyle';
import FooterPage from './pages/FooterPage';
import HtmlPage from './pages/HtmlPage';
import MainPage from './pages/MainPage';
import NavPage from './pages/NavPage';

function App() {
  return (
    <>
      <NavPage />
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/html" element={<HtmlPage />} />
        </Routes>
      <FooterPage />
    </>
  );
}

export default App;
