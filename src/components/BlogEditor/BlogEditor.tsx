import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from './Editor';
import { MetadataForm } from './MetadataForm';
import { Preview } from './Preview';
import { BlogPost, Tag } from '../../types/blog';
import { Eye, Save } from 'lucide-react';
import { saveBlogDraft, publishBlog } from '../../services/blogService';

export const BlogEditor: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [coverImage, setCoverImage] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = (isDraft: boolean) => {
    const post: BlogPost = {
      id: crypto.randomUUID(),
      title,
      content,
      category,
      tags,
      coverImage,
      isDraft,
      createdAt: new Date(),
    };

    if (isDraft) {
      saveBlogDraft(post);
      navigate('/blogs');
    } else {
      publishBlog(post);
      navigate('/published');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Editor value={content} onChange={setContent} />
          </div>
          
          <div className="space-y-6">
            <MetadataForm
              title={title}
              setTitle={setTitle}
              category={category}
              setCategory={setCategory}
              tags={tags}
              setTags={setTags}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={() => setShowPreview(true)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </button>
        
        <button
          onClick={() => handleSave(true)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Save className="w-4 h-4 mr-2" />
          Save as Draft
        </button>
        
        <button
          onClick={() => handleSave(false)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Publish
        </button>
      </div>

      {showPreview && (
        <Preview
          post={{
            id: '',
            title,
            content,
            category,
            tags,
            coverImage,
            isDraft: true,
            createdAt: new Date(),
          }}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};