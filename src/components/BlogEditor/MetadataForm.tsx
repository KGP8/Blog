import React from 'react';
import Select from 'react-select';
import { Tag } from '../../types/blog';

interface MetadataFormProps {
  title: string;
  setTitle: (title: string) => void;
  category: string;
  setCategory: (category: string) => void;
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
  coverImage: string;
  setCoverImage: (url: string) => void;
}

const categories = [
  'Technology', 'Design', 'Development', 'Business',
  'Marketing', 'Lifestyle', 'Travel', 'Other'
].map(cat => ({ value: cat.toLowerCase(), label: cat }));

const availableTags = [
  'React', 'JavaScript', 'TypeScript', 'Web Development',
  'UI/UX', 'Programming', 'Tutorial', 'Guide'
].map(tag => ({ value: tag.toLowerCase(), label: tag }));

export const MetadataForm: React.FC<MetadataFormProps> = ({
  title,
  setTitle,
  category,
  setCategory,
  tags,
  setTags,
  coverImage,
  setCoverImage,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Blog Title *
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
        <p className="mt-1 text-sm text-gray-500">
          {100 - title.length} characters remaining
        </p>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category *
        </label>
        <Select
          id="category"
          options={categories}
          value={categories.find(cat => cat.value === category)}
          onChange={(option) => setCategory(option?.value || '')}
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags *
        </label>
        <Select
          id="tags"
          isMulti
          options={availableTags}
          value={tags}
          onChange={(selected) => setTags(selected as Tag[])}
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
          Cover Image URL
        </label>
        <input
          type="url"
          id="coverImage"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://example.com/image.jpg"
        />
      </div>
    </div>
  );
};