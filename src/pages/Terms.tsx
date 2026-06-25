export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-6">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service carefully before using our platform. By accessing or using the platform, you agree to be bound by these terms.
          </p>
          <h3>1. Acceptance of Terms</h3>
          <p>By engaging with IWS Online School content, you accept all provisions within this agreement.</p>
          <h3>2. Course Enrollments</h3>
          <p>Course enrollments are bound by the duration and terms specified in your chosen program.</p>
        </div>
      </div>
    </div>
  );
}
