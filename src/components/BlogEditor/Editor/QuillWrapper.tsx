import React, { forwardRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from './editor.config';

interface QuillWrapperProps {
  value: string;
  onChange: (content: string) => void;
}

export const QuillWrapper = forwardRef<ReactQuill, QuillWrapperProps>(
  ({ value, onChange }, ref) => {
    return (
      <ReactQuill
        ref={ref}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="h-[350px]"
      />
    );
  }
);