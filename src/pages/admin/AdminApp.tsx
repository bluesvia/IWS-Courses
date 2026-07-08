import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminCourses from './AdminCourses';
import AdminCourseEdit from './AdminCourseEdit';
import AdminPages from './AdminPages';
import AdminPageEdit from './AdminPageEdit';
import { useAuth } from '../../contexts/AuthContext';
import AdminLayout from '../../components/admin/AdminLayout';

function ProtectedAdminRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

import AdminUsers from './AdminUsers';
import AdminSettings from './AdminSettings';
import AdminCustomPageEdit from './AdminCustomPageEdit';

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route 
        path="/*" 
        element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/courses" element={<AdminCourses />} />
                <Route path="/courses/:id" element={<AdminCourseEdit />} />
                <Route path="/pages" element={<AdminPages />} />
                <Route path="/pages/:id" element={<AdminPageEdit />} />
                <Route path="/custom-pages/:id" element={<AdminCustomPageEdit />} />
                <Route path="/users" element={<AdminUsers />} />
                <Route path="/settings" element={<AdminSettings />} />
              </Routes>
            </AdminLayout>
          </ProtectedAdminRoute>
        } 
      />
    </Routes>
  );
}
