import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import { QuillWrapper } from './QuillWrapper';

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<ReactQuill>(null);

  return (
    <div className="min-h-[400px] bg-white">
      <QuillWrapper
        ref={quillRef}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};