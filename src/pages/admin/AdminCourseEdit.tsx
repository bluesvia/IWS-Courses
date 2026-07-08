import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourses, CourseData, ModuleData } from '../../contexts/CourseContext';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MediaUpload from '../../components/admin/MediaUpload';

export default function AdminCourseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCourse, addCourse, updateCourse } = useCourses();
  
  const isNew = id === 'new';
  
  const [formData, setFormData] = useState<CourseData>({
    id: '',
    title: '',
    subtitle: '',
    price: '',
    originalPrice: '',
    duration: '',
    level: '',
    bgImageUrl: '',
    videoUrl: '',
    bullets: ['', '', ''],
    courseInfoText: '',
    curriculum: []
  });

  useEffect(() => {
    if (!isNew && id) {
      const course = getCourse(id);
      if (course) {
        setFormData(course);
      } else {
        navigate('/admin/courses');
      }
    }
  }, [id, isNew]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNew) {
      addCourse(formData);
    } else {
      updateCourse(formData.id, formData);
    }
    navigate('/admin/courses');
  };

  const handleBulletChange = (index: number, value: string) => {
    const newBullets = [...formData.bullets];
    newBullets[index] = value;
    setFormData({ ...formData, bullets: newBullets });
  };

  const addModule = () => {
    setFormData({
      ...formData,
      curriculum: [...formData.curriculum, { title: '', items: [''] }]
    });
  };

  const updateModuleTitle = (index: number, title: string) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[index].title = title;
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  const addModuleItem = (moduleIndex: number) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[moduleIndex].items.push('');
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  const updateModuleItem = (moduleIndex: number, itemIndex: number, value: string) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[moduleIndex].items[itemIndex] = value;
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  const removeModuleItem = (moduleIndex: number, itemIndex: number) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[moduleIndex].items.splice(itemIndex, 1);
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  const removeModule = (index: number) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum.splice(index, 1);
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link to="/admin/courses" className="p-2 text-slate-400 hover:text-slate-900 bg-white rounded-lg border border-slate-200 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{isNew ? 'Create New Course' : 'Edit Course'}</h1>
          <p className="text-slate-500 mt-1">{isNew ? 'Add a new course offering to the platform.' : `Editing ${formData.title}`}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Basic Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Course ID (URL Slug)</label>
              <input
                type="text"
                
                disabled={!isNew}
                required value={formData.id}
                onChange={(e) => setFormData({...formData, id: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="e.g. math-igcse"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Level / Type</label>
              <input
                type="text"
                
                value={formData.level}
                onChange={(e) => setFormData({...formData, level: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                placeholder="e.g. IGCSE, A Level"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Course Title</label>
              <input
                type="text"
                
                required value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-lg font-medium"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Course Subtitle</label>
              <textarea
                
                rows={3}
                value={formData.subtitle}
                onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Current Price (£)</label>
              <input
                type="text"
                
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Original Price (£) (Optional)</label>
              <input
                type="text"
                value={formData.originalPrice}
                onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
              <input
                type="text"
                
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                placeholder="e.g. 12 Months"
              />
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Media</h2>
          
          <div className="space-y-6">
            <div>
              <MediaUpload 
                label="Hero Background Image" 
                value={formData.bgImageUrl} 
                onChange={(url) => setFormData({...formData, bgImageUrl: url})} 
                accept="image/*"
              />
            </div>
            <div>
              <MediaUpload 
                label="Teaching Approach Video" 
                value={formData.videoUrl} 
                onChange={(url) => setFormData({...formData, videoUrl: url})} 
                accept="video/*"
              />
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Content Details</h2>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-4">Hero Bullet Points</label>
            <div className="space-y-3">
              {formData.bullets.map((bullet, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={bullet}
                  onChange={(e) => handleBulletChange(idx, e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  placeholder={`Bullet point ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Course Info Text (Teaching Approach)</label>
            <textarea
              rows={3}
              value={formData.courseInfoText}
              onChange={(e) => setFormData({...formData, courseInfoText: e.target.value})}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">Curriculum Modules</h2>
            <button
              type="button"
              onClick={addModule}
              className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              <Plus size={16} /> Add Module
            </button>
          </div>
          
          <div className="space-y-6">
            {formData.curriculum.map((module, mIdx) => (
              <div key={mIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Module Title</label>
                    <input
                      type="text"
                      value={module.title}
                      onChange={(e) => updateModuleTitle(mIdx, e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors font-medium"
                      placeholder="e.g. Module 1 — Numbers"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeModule(mIdx)}
                    className="p-2 text-slate-400 hover:text-red-600 bg-white rounded-md border border-slate-200 mt-5"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="pl-4 border-l-2 border-slate-200 space-y-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Lessons</label>
                  {module.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateModuleItem(mIdx, iIdx, e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                        placeholder="Lesson name..."
                      />
                      <button
                        type="button"
                        onClick={() => removeModuleItem(mIdx, iIdx)}
                        className="p-1.5 text-slate-400 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addModuleItem(mIdx)}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-2"
                  >
                    <Plus size={14} /> Add Lesson
                  </button>
                </div>
              </div>
            ))}
            {formData.curriculum.length === 0 && (
              <div className="text-center text-slate-500 py-4">No modules added yet.</div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-3 bg-[#0a1776] text-white font-bold rounded-xl hover:bg-[#081363] transition-colors shadow-lg shadow-blue-900/20"
          >
            <Save size={20} />
            {isNew ? 'Create Course' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
