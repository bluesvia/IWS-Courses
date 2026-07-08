import React from 'react';
import { useCourses } from '../../contexts/CourseContext';
import { useUsers } from '../../contexts/UserContext';
import { BookOpen, Users, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { courses } = useCourses();
  const { users } = useUsers();

  const totalStudents = users.filter(u => u.role === 'student').length;
  const totalCourses = courses.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back. Here is an overview of your platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stat Cards */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Students</p>
              <h3 className="text-3xl font-bold text-slate-900">{totalStudents}</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Users size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-emerald-600 font-medium flex items-center"><TrendingUp size={14} className="mr-1" /> +12%</span>
            <span className="text-slate-400">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Active Courses</p>
              <h3 className="text-3xl font-bold text-slate-900">{totalCourses}</h3>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <BookOpen size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
             <span className="text-emerald-600 font-medium flex items-center"><TrendingUp size={14} className="mr-1" /> +3</span>
            <span className="text-slate-400">new courses added</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Revenue</p>
              <h3 className="text-3xl font-bold text-slate-900">£12,450</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <DollarSign size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
             <span className="text-emerald-600 font-medium flex items-center"><TrendingUp size={14} className="mr-1" /> +8%</span>
            <span className="text-slate-400">from last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-fit">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/admin/courses/new" className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BookOpen size={20} />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-blue-700">Add New Course</span>
            </Link>
            <Link to="/admin/users" className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50 transition-colors group">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Users size={20} />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-purple-700">Manage Users</span>
            </Link>
          </div>
        </div>

        {/* Recent Courses Info */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recent Courses</h2>
            <Link to="/admin/courses" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {courses.slice(0, 3).map(course => (
              <div key={course.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="font-bold text-slate-900">{course.title}</h4>
                  <p className="text-sm text-slate-500">{course.level} • {course.duration}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900">£{course.price}</span>
                </div>
              </div>
            ))}
            {courses.length === 0 && (
              <div className="p-6 text-center text-slate-500">
                No courses added yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
