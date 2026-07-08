import React, { useState } from 'react';
import { useContent } from '../../contexts/ContentContext';
import { Edit2, Plus, Trash2, Link as LinkIcon, MoveUp, MoveDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminPages() {
  const { content, addCustomPage, deleteCustomPage, updateContent } = useContent();
  const [activeTab, setActiveTab] = useState<'system' | 'custom' | 'navigation' | 'footer'>('system');

  const systemPages = [
    { 
      id: 'home', 
      title: 'Home Page', 
      path: '/',
      image: content.home.heroSlide1 || '/Slide_1.webp'
    },
    { 
      id: 'about', 
      title: 'About Us', 
      path: '/about',
      image: content.about.aboutImageUrl || '/students.webp'
    },
    {
      id: 'howItWorks',
      title: 'How It Works',
      path: '/how-it-works',
      image: content.howItWorks.heroImageUrl || '/Slide_4.webp'
    },
    {
      id: 'faq',
      title: 'FAQ',
      path: '/faq',
      image: content.faq.heroImageUrl || '/Asked_Questions.webp'
    },
    {
      id: 'whyChooseIws',
      title: 'Global Component: Why Choose IWS',
      path: 'Used on Home and Course Pages',
      image: '/Slide_2.webp'
    },
    {
      id: 'universityPathways',
      title: 'Global Component: University Pathways',
      path: 'Used on Home and Course Pages',
      image: '/Slide_3.webp'
    }
  ];

  const handleCreateCustomPage = () => {
    const id = 'page_' + Date.now();
    addCustomPage({
      id,
      title: 'New Page',
      path: '/new-page-' + Date.now().toString().slice(-4),
      content: '<h2>New Page Content</h2><p>Start editing your page here...</p>'
    });
  };

  const handleNavChange = (index: number, field: string, value: string) => {
    const newNav = [...content.navigation];
    newNav[index] = { ...newNav[index], [field]: value };
    updateContent('navigation', newNav);
  };

  const addNavLink = () => {
    const newNav = [...content.navigation, { id: Date.now().toString(), label: 'New Link', url: '/' }];
    updateContent('navigation', newNav);
  };

  const removeNavLink = (index: number) => {
    const newNav = content.navigation.filter((_, i) => i !== index);
    updateContent('navigation', newNav);
  };

  const moveNavLink = (index: number, dir: number) => {
    if (index + dir < 0 || index + dir >= content.navigation.length) return;
    const newNav = [...content.navigation];
    const temp = newNav[index];
    newNav[index] = newNav[index + dir];
    newNav[index + dir] = temp;
    updateContent('navigation', newNav);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Site Management</h1>
          <p className="text-slate-500 mt-1">Manage pages, navigation, and footer content.</p>
        </div>
      </div>

      <div className="flex space-x-2 border-b border-slate-200">
        <button 
          onClick={() => setActiveTab('system')} 
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'system' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          System Pages
        </button>
        <button 
          onClick={() => setActiveTab('custom')} 
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'custom' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Custom Pages
        </button>
        <button 
          onClick={() => setActiveTab('navigation')} 
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'navigation' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Navigation Menu
        </button>
        <button 
          onClick={() => setActiveTab('footer')} 
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'footer' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Footer
        </button>
      </div>

      {activeTab === 'system' && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systemPages.map((page) => (
            <div key={page.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
              <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">
                <img src={page.image || undefined} alt={page.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-bold text-lg text-white">{page.title}</h3>
                  <p className="text-sm text-slate-200 font-mono mt-1">{page.path}</p>
                </div>
              </div>
              
              <div className="p-4 bg-white mt-auto">
                <Link 
                  to={`/admin/pages/${page.id}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors border border-transparent"
                >
                  <Edit2 size={16} />
                  Edit Content
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'custom' && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button 
              onClick={handleCreateCustomPage}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={18} />
              Create New Page
            </button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.customPages.map((page) => (
              <div key={page.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900">{page.title}</h3>
                  <div className="flex items-center text-sm text-slate-500 mt-2 font-mono bg-slate-50 p-2 rounded border border-slate-100">
                    <LinkIcon size={14} className="mr-2 shrink-0" />
                    <span className="truncate">{page.path}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-100">
                  <Link 
                    to={`/admin/custom-pages/${page.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors"
                  >
                    <Edit2 size={16} />
                    Edit
                  </Link>
                  <button 
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this page?')) {
                        deleteCustomPage(page.id);
                      }
                    }}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {content.customPages.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-200 border-dashed">
                No custom pages created yet. Click the button above to create one.
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'navigation' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-slate-900">Main Navigation Links</h3>
            <button 
              onClick={addNavLink}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors text-sm"
            >
              <Plus size={16} /> Add Link
            </button>
          </div>
          <div className="space-y-3">
            {content.navigation.map((link, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="flex flex-col gap-1">
                  <button onClick={() => moveNavLink(index, -1)} disabled={index === 0} className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-30"><MoveUp size={14} /></button>
                  <button onClick={() => moveNavLink(index, 1)} disabled={index === content.navigation.length - 1} className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-30"><MoveDown size={14} /></button>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Label</label>
                    <input type="text" value={link.label} onChange={(e) => handleNavChange(index, 'label', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">URL Path</label>
                    <input type="text" value={link.url} onChange={(e) => handleNavChange(index, 'url', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm" />
                  </div>
                </div>
                <button onClick={() => removeNavLink(index)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-2">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'footer' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
          <h3 className="font-bold text-lg text-slate-900 mb-4">Footer Settings</h3>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description / About Text</label>
            <textarea 
              rows={3} 
              value={content.footer.description} 
              onChange={(e) => updateContent('footer', { ...content.footer, description: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"
            />
          </div>
          <div>
             <h4 className="font-medium text-slate-900 mb-3">Footer Links</h4>
             <div className="space-y-3">
               {content.footer.links.map((link, index) => (
                 <div key={index} className="flex items-center gap-3">
                   <input type="text" placeholder="Label" value={link.label} onChange={(e) => {
                     const newLinks = [...content.footer.links];
                     newLinks[index].label = e.target.value;
                     updateContent('footer', { ...content.footer, links: newLinks });
                   }} className="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg text-sm" />
                   <input type="text" placeholder="URL" value={link.url} onChange={(e) => {
                     const newLinks = [...content.footer.links];
                     newLinks[index].url = e.target.value;
                     updateContent('footer', { ...content.footer, links: newLinks });
                   }} className="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg text-sm" />
                   <button onClick={() => {
                     const newLinks = content.footer.links.filter((_, i) => i !== index);
                     updateContent('footer', { ...content.footer, links: newLinks });
                   }} className="p-2 text-slate-400 hover:text-red-600"><Trash2 size={16} /></button>
                 </div>
               ))}
               <button onClick={() => {
                  const newLinks = [...content.footer.links, { id: Date.now().toString(), label: 'New Link', url: '/' }];
                  updateContent('footer', { ...content.footer, links: newLinks });
               }} className="text-sm font-medium text-blue-600 hover:text-blue-700">+ Add Footer Link</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
