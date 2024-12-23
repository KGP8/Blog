import React from 'react';
import { BlogPost } from '../../types/blog';
import { Link } from 'react-router-dom';

interface SuggestedBlogsProps {
  blogs: BlogPost[];
}

export const SuggestedBlogs: React.FC<SuggestedBlogsProps> = ({ blogs }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Suggested Blogs</h3>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.id}`}
            className="block"
          >
            <div className="bg-white p-3 rounded-md hover:shadow-md transition-shadow">
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
              )}
              <h4 className="font-medium text-gray-900 mb-1">{blog.title}</h4>
              <div className="flex gap-1">
                {blog.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag.value}
                    className="px-2 py-0.5 bg-gray-100 text-xs rounded-full"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};