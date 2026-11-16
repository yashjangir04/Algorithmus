import React, { useState } from 'react';
import LandingPage from './LandingPage';
import AnalyticsDashboard from './AnalyticsDashboard';
import { fetchUserAnalytics } from './api';
import { Code2 } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async (form) => {
    setLoading(true);
    setError(null);
    try {
      setFormData(form);
      const result = await fetchUserAnalytics(form);
      setData(result);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.detail ||
        err.message ||
        'Failed to retrieve analytics. Please verify handle names and network connectivity.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    if (formData) {
      handleFetch(formData);
    }
  };

  const handleReset = () => {
    setData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">

      {/* Main Body */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1">
        {!data ? (
          <LandingPage
            onSubmit={handleFetch}
            loading={loading}
            error={error}
          />
        ) : (
          <AnalyticsDashboard
            data={data}
            onReset={handleReset}
            onRefresh={handleRefresh}
            loading={loading}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 px-6 text-center text-xs text-slate-500">
        <p>
          CodePulse &copy; {new Date().getFullYear()} — Multi-Platform Competitive Programming & DSA Analytics.
        </p>
      </footer>
    </div>
  );
}

