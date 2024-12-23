import React from 'react';
import { Eye, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  blog: BlogPost;
  onView: (blog: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {blog.coverImage && (
        <img 
          src={blog.coverImage} 
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <div className="flex gap-2 mb-2">
          {blog.tags.map((tag) => (
            <span
              key={tag.value}
              className="px-2 py-1 bg-gray-100 text-sm rounded-full"
            >
              {tag.label}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 text-sm">
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
          
          <div className="flex gap-2">
            <button
              onClick={() => onView(blog)}
              className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-md"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </button>
            
            <Link
              to={`/blogs/edit/${blog.id}`}
              className="flex items-center px-3 py-1 text-green-600 hover:bg-green-50 rounded-md"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};