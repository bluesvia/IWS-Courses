import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Save, Monitor, ExternalLink, Plus, Trash2 } from 'lucide-react';
import MediaUpload from '../../components/admin/MediaUpload';

function DynamicField({ fieldKey, value, onChange }: { fieldKey: string, value: any, onChange: (val: any) => void }) {
  const isImage = fieldKey.toLowerCase().includes('image') || fieldKey.toLowerCase().includes('slide') || fieldKey.toLowerCase().includes('poster');
  const isVideo = fieldKey.toLowerCase().includes('video');
  const isTextarea = fieldKey.toLowerCase().includes('subtitle') || fieldKey.toLowerCase().includes('description') || (typeof value === 'string' && value.length > 60);

  if (typeof value === 'string' || typeof value === 'number') {
    if (isImage || isVideo) {
      return (
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <MediaUpload 
            label=""
            value={value.toString()}
            onChange={(url) => onChange(url)}
            accept={isImage ? "image/*" : "video/*"}
          />
        </div>
      );
    }
    if (isTextarea) {
      return (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none shadow-sm text-sm"
        />
      );
    }
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors shadow-sm text-sm"
      />
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className="space-y-4 border border-slate-200 p-4 rounded-xl bg-slate-50">
        {value.map((item, index) => (
          <div key={index} className="flex gap-4 items-start relative bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="flex-1 min-w-0">
               <DynamicField fieldKey={fieldKey} value={item} onChange={(newVal) => {
                 const newArr = [...value];
                 newArr[index] = newVal;
                 onChange(newArr);
               }} />
            </div>
            <button type="button" onClick={() => {
              const newArr = value.filter((_, i) => i !== index);
              onChange(newArr);
            }} className="p-2 text-slate-400 hover:text-red-500 transition-colors shrink-0">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <button type="button" onClick={() => {
          // If array has items, clone the shape of the first item
          let newItem: any = '';
          if (value.length > 0) {
            if (typeof value[0] === 'object' && value[0] !== null) {
              newItem = Object.keys(value[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
            } else if (typeof value[0] === 'string') {
              newItem = '';
            }
          }
          onChange([...value, newItem]);
        }} className="flex items-center gap-2 text-sm text-[#0a1776] font-bold hover:text-[#081363]">
          <Plus size={16} /> Add Item
        </button>
      </div>
    );
  }

  if (typeof value === 'object' && value !== null) {
    return (
      <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
        {Object.entries(value).map(([subKey, subVal]) => (
          <div key={subKey}>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              {subKey.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <DynamicField fieldKey={subKey} value={subVal} onChange={(newVal) => {
              onChange({ ...value, [subKey]: newVal });
            }} />
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function AdminPageEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { content, updateContent } = useContent();
  
  const pageId = id as keyof typeof content;
  const initialData = content[pageId];
  
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData as any);
    } else {
      navigate('/admin/pages');
    }
  }, [id, initialData, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pageId) {
      updateContent(pageId, formData);
      setRefreshKey(k => k + 1); // trigger iframe refresh
      // don't navigate away, let them keep editing while seeing preview
    }
  };

  const handleFieldChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  if (!initialData) return null;

  const pagePaths: Record<string, string> = {
    home: '/',
    about: '/about',
    howItWorks: '/how-it-works',
    faq: '/faq'
  };

  const previewUrl = pagePaths[pageId as string] || '/';

  return (
    <div className="h-[calc(100vh-6rem)] -m-4 md:-m-8 flex flex-col md:flex-row overflow-hidden bg-slate-50">
      {/* Editor Panel */}
      <div className="w-full md:w-[400px] lg:w-[500px] shrink-0 border-r border-slate-200 bg-white flex flex-col h-full z-10 overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <Link to="/admin/pages" className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <div>
              <h1 className="font-bold text-slate-900 capitalize">Edit {pageId}</h1>
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
          <form id="edit-form" onSubmit={handleSubmit} className="space-y-8">
            {Object.entries(formData).map(([key, value]) => {
              return (
                <div key={key} className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 capitalize pb-2 border-b border-slate-100">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <DynamicField 
                    fieldKey={key} 
                    value={value} 
                    onChange={(newVal) => handleFieldChange(key, newVal)} 
                  />
                </div>
              );
            })}
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
            <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              Open <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="flex-1 mt-12 bg-white w-full h-full">
          <iframe 
            key={refreshKey}
            src={previewUrl}
            className="w-full h-full border-0"
            title="Live Preview"
          />
        </div>
      </div>
    </div>
  );
}
