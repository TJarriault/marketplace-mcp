'use client';

import { useState } from "react";
import { agents } from "@/lib/data";
import AgentCard from "@/components/AgentCard";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = agents.filter((agent) => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      agent.name.toLowerCase().includes(lowerQuery) ||
      agent.description.toLowerCase().includes(lowerQuery) ||
      agent.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            MCP Agent Marketplace
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Discover and integrate powerful Model Context Protocol agents for your development workflow.
          </p>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search agents by name, description, or tag..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-slate-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No agents found matching your search.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </main>
      
      <footer className="border-t bg-white mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} MCP Marketplace. Internal Tool.
        </div>
      </footer>
    </div>
  );
}
