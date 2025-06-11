import { Layout } from 'antd';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InitialPage from './pages/InitialPage';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Rotas da página inicial e seus componentes */}
          <Route path="/initial" element={<InitialPage />} />
          <Route path="/new-event" element={<InitialPage />} />
          <Route path="/join-event" element={<InitialPage />} />
          <Route path="/active-events" element={<InitialPage />} />
          <Route path="/my-events" element={<InitialPage />} />
          <Route path="/staff" element={<InitialPage />} />
          
          {/* Redirecionar qualquer outra rota para a página inicial */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;