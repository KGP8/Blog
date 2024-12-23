import React, { useState } from 'react';
import { BlogPost } from '../../types/blog';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogCard } from './BlogCard';
import { BlogView } from '../BlogView/BlogView';
import { getSuggestedBlogs } from '../../services/blogService';

interface BlogListProps {
  blogs: BlogPost[];
  isDrafts?: boolean;
}

export const BlogList: React.FC<BlogListProps> = ({ blogs, isDrafts = false }) => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  
  const handleView = (blog: BlogPost) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {isDrafts ? 'Draft Blogs' : 'Published Blogs'}
        </h2>
        
        {isDrafts && (
          <Link
            to="/blogs/create"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Create Blog
          </Link>
        )}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onView={handleView}
          />
        ))}
        
        {blogs.length === 0 && (
          <p className="text-gray-500 text-center py-8 col-span-full">
            {isDrafts
              ? 'No draft blogs yet. Create your first blog!'
              : 'No published blogs yet.'}
          </p>
        )}
      </div>

      {selectedBlog && (
        <BlogView
          blog={selectedBlog}
          suggestedBlogs={getSuggestedBlogs(selectedBlog.id)}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </div>
  );
};