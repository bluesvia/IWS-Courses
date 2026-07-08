import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export default function DynamicPage() {
  const { path } = useParams();
  const { content } = useContent();

  const currentPath = `/${path}`;
  const page = content.customPages.find(p => p.path === currentPath);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-32 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{page.title}</h1>
          <div className="prose prose-slate prose-lg max-w-none ql-editor !p-0">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}
