import React from 'react';
import { FileText, Send } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="w-64 bg-white h-screen border-r">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Blog Dashboard</h1>
      </div>
      
      <nav className="mt-4">
        <Link
          to="/blogs"
          className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            isActive('/blogs') ? 'bg-gray-100' : ''
          }`}
        >
          <FileText className="w-5 h-5 mr-2" />
          Blogs
        </Link>
        
        <Link
          to="/published"
          className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            isActive('/published') ? 'bg-gray-100' : ''
          }`}
        >
          <Send className="w-5 h-5 mr-2" />
          Posted Blogs
        </Link>
      </nav>
    </div>
  );
};