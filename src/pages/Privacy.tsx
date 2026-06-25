export default function Privacy() {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At IWS Online School, we are committed to protecting your privacy. This Privacy Policy explains our data collection, use, and disclosure practices.
          </p>
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us when you create an account, enroll in a course, or communicate with us.</p>
          <h3>2. How We Use Information</h3>
          <p>We use the information we collect to operate, maintain, and improve our services, and to process your transactions.</p>
        </div>
      </div>
    </div>
  );
}
