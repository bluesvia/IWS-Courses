import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Save, Monitor, ExternalLink } from 'lucide-react';

export default function AdminCustomPageEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { content, updateCustomPage } = useContent();
  
  const initialData = content.customPages.find(p => p.id === id);
  
  const [formData, setFormData] = useState({ title: '', path: '', content: '' });
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      navigate('/admin/pages');
    }
  }, [id, initialData, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id && initialData) {
      updateCustomPage(id, { ...initialData, ...formData });
      setRefreshKey(k => k + 1);
    }
  };

  if (!initialData) return null;

  return (
    <div className="h-[calc(100vh-6rem)] -m-4 md:-m-8 flex flex-col md:flex-row overflow-hidden bg-slate-50">
      {/* Editor Panel */}
      <div className="w-full md:w-[400px] lg:w-[600px] shrink-0 border-r border-slate-200 bg-white flex flex-col h-full z-10 overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <Link to="/admin/pages" className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <div>
              <h1 className="font-bold text-slate-900 capitalize">Edit Custom Page</h1>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-[#0a1776] text-white text-sm font-medium rounded-lg hover:bg-[#081363] transition-colors"
          >
            <Save size={16} />
            Update
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form id="edit-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-900">Page Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors shadow-sm text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-900">URL Path</label>
              <input
                type="text"
                value={formData.path}
                onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors shadow-sm text-sm"
                placeholder="/my-new-page"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-900">Page Content</label>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full h-64 p-4 border-0 focus:ring-0 font-mono text-sm resize-y"
                  placeholder="<h1>Hello World</h1>"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Live Preview Panel */}
      <div className="flex-1 bg-slate-100 flex flex-col h-full relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-12 bg-slate-800 text-slate-300 flex items-center justify-between px-4 text-sm z-20">
          <div className="flex items-center gap-2">
            <Monitor size={16} />
            <span>Live Preview</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline-block">Updates automatically on save</span>
            <a href={formData.path || '/'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              Open <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="flex-1 mt-12 bg-white w-full h-full">
          <iframe 
            key={refreshKey}
            src={formData.path || undefined}
            className="w-full h-full border-0"
            title="Live Preview"
          />
        </div>
      </div>
    </div>
  );
}
