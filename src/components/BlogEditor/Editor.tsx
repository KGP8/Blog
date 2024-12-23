import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import { modules, formats } from './config/editor.config';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<ReactQuill>(null);

  return (
    <div className="min-h-[400px] bg-white">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="h-[350px] mb-12"
      />
    </div>
  );
};