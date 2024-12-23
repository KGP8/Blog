import React from 'react';
import { BlogPost } from '../../types/blog';
import { SuggestedBlogs } from './SuggestedBlogs';
import { X } from 'lucide-react';

interface BlogViewProps {
  blog: BlogPost;
  suggestedBlogs: BlogPost[];
  onClose: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ blog, suggestedBlogs, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Blog Preview</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex gap-6 p-6">
          <div className="flex-1">
            {blog.coverImage && (
              <img
                src={blog.coverImage}
                alt="Cover"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {blog.category}
              </span>
              {blog.tags.map((tag) => (
                <span
                  key={tag.value}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {tag.label}
                </span>
              ))}
            </div>
            
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          
          <div className="w-80">
            <SuggestedBlogs blogs={suggestedBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
};