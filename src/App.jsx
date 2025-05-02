import { Layout } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InitialPage from './pages/InitialPage';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/initial" element={<InitialPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;