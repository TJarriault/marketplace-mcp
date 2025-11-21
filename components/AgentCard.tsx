import Link from "next/link";
import { Agent } from "@/lib/data";
import { ExternalLink, Terminal } from "lucide-react";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-100 text-blue-700 p-2 rounded-md">
          <Terminal className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
          {agent.author}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-2">{agent.name}</h3>
      <p className="text-slate-600 text-sm mb-4 flex-grow">{agent.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {agent.tags.map((tag) => (
          <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t mt-auto">
        <Link 
          href={`/agent/${agent.id}`}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          View Details
        </Link>
        {agent.repoUrl && (
          <a 
            href={agent.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-600"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
