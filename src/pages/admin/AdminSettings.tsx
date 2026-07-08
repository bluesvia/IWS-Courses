import React, { useState } from 'react';
import { Save, Globe, Mail, Lock, CheckCircle2 } from 'lucide-react';

export default function AdminSettings() {
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [settings, setSettings] = useState({
    siteTitle: 'IWS Online School',
    tagline: 'A Cambridge-accredited British online school',
    adminEmail: 'admin@iws.com',
    supportEmail: 'support@iws.com',
    timezone: 'Europe/London',
    language: 'English (UK)',
    allowRegistration: true,
    requireEmailVerification: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">General Settings</h1>
        <p className="text-slate-500 mt-1">Manage your platform's core configuration and preferences.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* General Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
            <Globe className="text-blue-600" size={20} />
            <h2 className="font-bold text-slate-900">Site Identity</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Site Title</label>
              <input
                type="text"
                value={settings.siteTitle}
                onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                className="w-full max-w-md px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full max-w-2xl px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <p className="text-sm text-slate-500 mt-1">In a few words, explain what this site is about.</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
            <Mail className="text-blue-600" size={20} />
            <h2 className="font-bold text-slate-900">Email Configuration</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Administration Email Address</label>
              <input
                type="email"
                value={settings.adminEmail}
                onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                className="w-full max-w-md px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <p className="text-sm text-slate-500 mt-1">This address is used for admin purposes. If you change this, an email will be sent to your new address to confirm it.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Support Contact Email</label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                className="w-full max-w-md px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Security / Membership */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
            <Lock className="text-blue-600" size={20} />
            <h2 className="font-bold text-slate-900">Membership & Security</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="allowRegistration"
                checked={settings.allowRegistration}
                onChange={(e) => setSettings({ ...settings, allowRegistration: e.target.checked })}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <label htmlFor="allowRegistration" className="text-sm font-medium text-slate-700">
                Anyone can register (Student accounts)
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="requireEmailVerification"
                checked={settings.requireEmailVerification}
                onChange={(e) => setSettings({ ...settings, requireEmailVerification: e.target.checked })}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <label htmlFor="requireEmailVerification" className="text-sm font-medium text-slate-700">
                Require email verification for new accounts
              </label>
            </div>
            
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Site Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                >
                  <option>English (UK)</option>
                  <option>English (US)</option>
                  <option>Turkish</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Timezone</label>
                <select
                  value={settings.timezone}
                  onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                >
                  <option>Europe/London</option>
                  <option>Europe/Istanbul</option>
                  <option>America/New_York</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 px-8 py-3 bg-[#0a1776] text-white font-bold rounded-xl hover:bg-[#081363] transition-colors shadow-lg shadow-blue-900/20 disabled:opacity-50"
          >
            <Save size={20} />
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
          
          {showSuccess && (
            <div className="flex items-center gap-2 text-emerald-600 font-medium animate-in fade-in slide-in-from-left-4">
              <CheckCircle2 size={20} />
              Settings saved successfully!
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
