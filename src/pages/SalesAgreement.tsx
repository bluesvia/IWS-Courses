export default function SalesAgreement() {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-6">Distance Sales Agreement</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            This agreement sets out the terms under which course materials and access are provided to the student by IWS Online School.
          </p>
          <h3>1. Parties</h3>
          <p>This agreement is entered into between IWS Online School (the "Seller") and the purchasing user (the "Buyer").</p>
          <h3>2. Subject Matter</h3>
          <p>The subject of this contract is the online delivery of educational goods and services.</p>
        </div>
      </div>
    </div>
  );
}
