'use client';

import Navbar from "@/components/Navbar";
import { Send } from "lucide-react";
import { useState } from "react";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Submit an MCP Agent</h1>
            <p className="text-slate-600">
              Have you built a useful agent? Share it with the team to boost everyone's productivity.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-900 mb-2">Submission Received!</h2>
              <p className="text-green-700 mb-6">
                Thanks for submitting your agent. The DevOps team will review it shortly and add it to the marketplace.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-green-700 font-medium hover:underline"
              >
                Submit another agent
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g., Jira Task Manager"
                  />
                </div>

                <div>
                  <label htmlFor="repo" className="block text-sm font-medium text-slate-700 mb-1">
                    Repository URL
                  </label>
                  <input
                    type="url"
                    id="repo"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="https://github.com/internal/..."
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                    Short Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="One sentence summary..."
                  />
                </div>

                <div>
                  <label htmlFor="fullDescription" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Description & Capabilities
                  </label>
                  <textarea
                    id="fullDescription"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Describe what the agent can do in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Agent
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
