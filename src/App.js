import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import ManagePost from './pages/ManagePost';
import './App.css';

function App() {
  return (
    <div  >
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: '56px' }}>
          <Routes >
            <Route className="App" path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/update" element={<ManagePost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;