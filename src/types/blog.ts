export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: Tag[];
  coverImage?: string;
  isDraft: boolean;
  createdAt: Date;
}

export interface Tag {
  value: string;
  label: string;
}

export type BlogState = {
  drafts: BlogPost[];
  published: BlogPost[];
};