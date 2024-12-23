import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BlogList } from './components/BlogList/BlogList';
import { BlogEditor } from './components/BlogEditor/BlogEditor';
import { getBlogDrafts, getBlogPublished } from './services/blogService';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/blogs" replace />} />
            <Route
              path="/blogs"
              element={<BlogList blogs={getBlogDrafts()} isDrafts={true} />}
            />
            <Route path="/blogs/create" element={<BlogEditor />} />
            <Route
              path="/published"
              element={<BlogList blogs={getBlogPublished()} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;