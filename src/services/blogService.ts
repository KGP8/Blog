import { BlogPost } from '../types/blog';

// Simulated local storage keys
const DRAFTS_KEY = 'blog_drafts';
const PUBLISHED_KEY = 'blog_published';

// Local storage functions
export const getBlogDrafts = (): BlogPost[] => {
  const drafts = localStorage.getItem(DRAFTS_KEY);
  return drafts ? JSON.parse(drafts) : [];
};

export const getBlogPublished = (): BlogPost[] => {
  const published = localStorage.getItem(PUBLISHED_KEY);
  return published ? JSON.parse(published) : [];
};

export const saveBlogDraft = (post: BlogPost): void => {
  const drafts = getBlogDrafts();
  drafts.push(post);
  localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));
};

export const publishBlog = (post: BlogPost): void => {
  const published = getBlogPublished();
  published.push(post);
  localStorage.setItem(PUBLISHED_KEY, JSON.stringify(published));
  
  // If it was a draft, remove it from drafts
  if (post.isDraft) {
    const drafts = getBlogDrafts().filter(d => d.id !== post.id);
    localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));
  }
  
  // TODO: Implement actual API call
  // return await api.post('/blogs', post);
};

export const getSuggestedBlogs = (currentBlogId: string): BlogPost[] => {
  // Get all published blogs except current one
  const published = getBlogPublished()
    .filter(blog => blog.id !== currentBlogId)
    // Sort by date descending
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
  // Return up to 3 suggested blogs
  return published.slice(0, 3);
};