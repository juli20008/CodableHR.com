
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import Automation from './pages/Automation';
import HRIS from './pages/HRIS';
import Blog from './pages/Blog';
import BookCall from './pages/BookCall';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/hris" element={<HRIS />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<BookCall />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
